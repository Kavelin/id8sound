<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";
  import type { ActionData } from "./$types";
  import "$lib/styles/book.css";

  let { form }: { form: ActionData | null } = $props();
  let submitting = $state(false);

  const handleEnhance: SubmitFunction = () => {
    submitting = true;

    return async ({ update }) => {
      try {
        await update();
      } finally {
        submitting = false;
      }
    };
  };
</script>

<svelte:head>
  <title>Book an Event | ID8 Sound</title>
  <meta
    name="description"
    content="Book ID8 Sound for your next event. Share your event details and we will reply with availability."
  />
  <link rel="canonical" href="https://www.id8sound.com/book" />
  <meta property="og:title" content="Book an Event | ID8 Sound" />
  <meta
    property="og:description"
    content="Book ID8 Sound for your next event. Share your event details and we will reply with availability."
  />
  <meta property="og:url" content="https://www.id8sound.com/book" />
  <meta property="og:type" content="website" />
  <meta name="twitter:title" content="Book an Event | ID8 Sound" />
  <meta
    name="twitter:description"
    content="Book ID8 Sound for your next event. Share your event details and we will reply with availability."
  />
</svelte:head>
<section class="section">
  <div class="content split">
    <div class="booking-info">
      <h2>Book an event</h2>
      <p>
        Our base price: <b>$250 + $50 an hour*</b><br /><br />

        The more detail you share, the faster we can confirm our availability.
        If you are still sorting logistics, just send as much as you have and
        update us when you know more.
        <br><br>
        <small>*price might vary based on venue and needs</small>
      </p>
      <ul class="bullets">
        <li>Date, venue location, and a rough time estimate</li>
        <li>Sound requirements, ie number of mics, aux, etc.</li>
        <li>Recording needs or deliverable preferences</li>
      </ul>
      <div class="booking-note" style="order:3">
        <h3>Prefer email?</h3>
        <p>
          Send a message to <a href="mailto:booking@id8sound.com"
            >booking@id8sound.com</a
          >
          and we will follow up quickly.
        </p>
      </div>
    </div>

    <form method="POST" class="form-card" use:enhance={handleEnhance}>
      {#if form?.success}
        <div class="form-status success" role="status">
          {form.message}
        </div>
      {:else if form?.error}
        <div class="form-status error" role="status">
          {form.error}
        </div>
      {/if}

      <div class="form-field">
        <label for="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          autocomplete="name"
          required
          aria-invalid={form?.errors?.name ? "true" : undefined}
          value={form?.fields?.name ?? ""}
        />
        {#if form?.errors?.name}
          <p class="field-error">{form.errors.name}</p>
        {/if}
      </div>

      <div class="form-field">
        <label for="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required
          aria-invalid={form?.errors?.email ? "true" : undefined}
          value={form?.fields?.email ?? ""}
        />
        {#if form?.errors?.email}
          <p class="field-error">{form.errors.email}</p>
        {/if}
      </div>

      <div class="form-field">
        <label for="message">Event details</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          aria-invalid={form?.errors?.message ? "true" : undefined}
          >{form?.fields?.message ?? ""}</textarea
        >
        {#if form?.errors?.message}
          <p class="field-error">{form.errors.message}</p>
        {/if}
      </div>

      <button class="btn btn-primary shine" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Send booking request"}
      </button>
      <p class="form-note">We reply within 1-2 business days.</p>
    </form>
  </div>
</section>
