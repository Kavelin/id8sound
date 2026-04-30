<script lang="ts">
  import LiveSoundEvent from "$lib/assets/LiveSoundEvent.jpg";
</script>

<svelte:head>
  <title>About | ID8 Sound</title>
  <meta
    name="description"
    content="Meet ID8 Sound. Two engineers, careful prep, and reliable live sound for every event."
  />
</svelte:head>

<section class="page-hero">
  <div class="content">
    <p class="eyebrow">About</p>
    <h1>We are two engineers who care about how your event actually sounds.</h1>

    <div class="split">
      <div>
        <h3>Sean Salas</h3>
        <p>I got into sound through marching band or something</p>
      </div>

      <div>
        <h3>Kavin Velmurugan</h3>
        <p>
          love all things sound and music, whether it be trying to produce the
          next hypersmash generational hit of the century, listening to the
          lonely voice of a saxophone wailing in the corner of a street, or
          tweaking levels in a live event.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="content split">
    <div>
      <h2>Inventory</h2>
      <ul class="bullets">
        <li>Digital mixing for consistent control and recall</li>
        <li>PA systems scaled to the room and audience size</li>
        <li>Stereo or multitrack recording when you want it</li>
        <li>Professional Mics and Cables for minimal noise</li>
      </ul>
    </div>
    <div
      class="media-placeholder"
      data-label="Live Sound Event in April"
      role="img"
      aria-label="Live Sound Event in April"
    >
      <img src={LiveSoundEvent} alt="Live Sound Event" />
    </div>
  </div>
</section>

<section class="section">
  <div class="content">
    <h2>At the end of the day</h2>
    <p>
      We just want your event to sound the way it should. If that is what you
      are looking for, we are easy to work with and happy to talk details.
    </p>
  </div>
</section>
