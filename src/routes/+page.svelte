<script>
  import id8logo from "$lib/assets/id8logo.png";
  import SeanLiveSound from "$lib/assets/SeanLiveSound.jpg";
  import AbletonRecording from "$lib/assets/AbletonRecording.png";
</script>

<svelte:head>
  <title>ID8 Sound</title>
  <meta
    name="description"
    content="Professional Live Sound At Half The Price. Reliable crews, clean mixes, and fair pricing."
  />
</svelte:head>

<section class="hero">
  <div class="content hero-banner">
    <div class="hero-logo">
      <img src={id8logo} alt="ID8 Sound logo" />
    </div>
    <div class="hero-text">
      <h1 class="hero-title">ID8 Sound</h1>
      <p class="hero-tagline">
        <span>PROFESSIONAL LIVE SOUND</span>
        <span>AT HALF THE PRICE</span>
      </p>
      <p class="hero-services">
        Stage Events • Parties • Live Music • Weddings
      </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="content split">
    <div>
      <h2>Experienced engineers</h2>
      <p>
        We require 2 engineers at every event one of has dozens of events of
        live sound experience and an engineer with years of sound design
        experience!
      </p>
      <ul class="bullets">
        <li>Attention to Detail</li>
        <li>Passion for Sound</li>
      </ul>
    </div>
    <div
      class="media-placeholder"
      data-label="Cat"
      role="img"
      aria-label="Sean doing Live Sound"
    >
      <img src={SeanLiveSound} alt="" />
    </div>
  </div>
</section>

<section class="section">
  <div class="content split">
    <div
      class="media-placeholder"
      data-label="Recording workflow"
      role="img"
      aria-label="Recording workflow"
    >
      <img src={AbletonRecording} alt="Recording workflow in Ableton" />
    </div>
    <div>
      <h2>Professional Recordings</h2>
      <p>
        Capture the energy of the room with stereo or multitrack recording.
        Choose a polished mixed deliverable or an unmixed session ready for your
        producer.
      </p>
      <ul class="bullets">
        <li>Multitrack or stereo capture options</li>
        <li>Mixed or raw deliverables within days</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="content card-grid">
    <article class="card">
      <h3>Flexibility</h3>
      <p>
        Our experience lends ourselves to be able to handle any curveballs,
        including last minute changes and technical difficulties.
      </p>
    </article>
    <article class="card">
      <h3>Professional Equipment</h3>
      <p>
        We run on a QSC PA system with QSC amps and EAW subs. All of our mics
        are Shure and our mixer is Behringer.
      </p>
    </article>
    <article class="card">
      <h3>Deliver a better show</h3>
      <p>
        You can put your trust in us to deliver clean sound for your audience!
      </p>
    </article>
  </div>
</section>

<section class="section">
  <div class="content cta">
    <div>
      <h2>Ready to book?</h2>
      <p>
        Tell us about your venue, schedule, and technical needs. We will reply
        quickly with our availability.
      </p>
    </div>
    <a class="btn btn-primary" href="/book">Start booking</a>
  </div>
</section>
