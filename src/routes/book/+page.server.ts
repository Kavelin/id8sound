import { fail } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import nodemailer from "nodemailer";
import type { Actions } from "./$types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const fields = { name, email, message };
    const errors: Record<string, string> = {};

    if (!name) {
      errors.name = "Name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!emailPattern.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!message) {
      errors.message = "Message is required.";
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors, fields });
    }

    const smtpHost = env.SMTP_HOST;
    const smtpUser = env.SMTP_USER;
    const smtpPass = env.SMTP_PASS;
    const smtpPort = env.SMTP_PORT ? Number(env.SMTP_PORT) : 587;
    const smtpSecure = env.SMTP_SECURE === "true";

    if (!smtpHost || !smtpUser || !smtpPass) {
      return fail(500, {
        error: "Email service is not configured. Please try again later.",
        fields
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    try {
      await transporter.sendMail({
        from: `"ID8 Sound Booking" <${smtpUser}>`,
        to: "id8nsp@gmail.com",
        replyTo: email,
        subject: `Booking request from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
      });
    } catch (error) {
      console.error("Booking email failed", error);
      return fail(500, {
        error: "We could not send your message. Please try again in a moment.",
        fields
      });
    }

    return {
      success: true,
      message: "Thanks for reaching out. We will reply within 1-2 business days."
    };
  }
} satisfies Actions;
