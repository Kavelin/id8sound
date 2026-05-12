<script lang="ts">
  import "$lib/styles/global.css";
  import favicon from "$lib/assets/favicon.svg";
  import id8logo from "$lib/assets/id8logo.png";

  const siteUrl = "https://www.id8sound.com";
  const ogImage = `${siteUrl}${id8logo}`;

  let { children } = $props();
</script>

<svelte:head>
  <meta name="robots" content="index, follow" />
  <meta property="og:site_name" content="ID8 Sound" />
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:image" content={ogImage} />
  <link rel="icon" href={favicon} />
  <link rel="shortcut icon" href={favicon} />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>

<header class="site-header">
  <div class="header-inner">
    <a class="logo" href="/" aria-label="ID8 Sound home">
      <img class="logo-mark" src={favicon} alt="ID8">
      <span class="logo-text">ID8 Sound</span>
    </a>
    <nav class="nav-links" aria-label="Primary">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a class="shine" href="/book">Booking</a>
    </nav>
  </div>
</header>

<main id="main-content">
  {@render children()}
</main>

<footer class="site-footer">
  <div class="footer-inner">
    <p><!--©--> 2026 ID8 Sound LLC. All rights reserved.</p>
    <div class="footer-links">
      <a href="mailto:booking@id8sound.com">booking@id8sound.com</a>
      <span>Available for events in the DMV area</span>
    </div>
  </div>
</footer>
