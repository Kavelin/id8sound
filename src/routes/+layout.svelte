<script lang="ts">
  import "$lib/styles/global.css";
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <title>ID8 Sound</title>
  <meta
    name="description"
    content="ID8 Sound provides professional live sound engineering and recording for events of every size."
  />
  <link rel="shortcut icon" href={favicon}>
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
    <p><!--©--> 2026 ID8 Sound. Professional Live Sound</p>
    <div class="footer-links">
      <a href="mailto:id8nsp@gmail.com">id8nsp@gmail.com</a>
      <span>Available for events in the DMV area</span>
    </div>
  </div>
</footer>
