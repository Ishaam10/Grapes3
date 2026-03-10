import protonSpectrum from "../../assets/protonSpectrum.png";
import anisotropyMap from "../../assets/anisotropyMap.png";
import muonRate from "../../assets/muonRate.png";
import transient from "../../assets/transient.png";
export default function SciencePage() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10">

        <h1 className="text-center text-5xl font-semibold text-blue-700">
          Science
        </h1>
        {/* OBJECTIVES */}
<section className="mt-12">
  <h2 className="text-center text-3xl font-semibold text-blue-700">
    Objectives
  </h2>

  <ol className="mt-6 space-y-6 text-gray-800">

    <li>
      <span className="font-medium">
        Investigation of Origin, Acceleration and Propagation of Galactic Cosmic Rays
        through observations at 10¹³ – 10¹⁶ eV energies
      </span>

      <ul className="list-disc ml-6 mt-2">
        <li>Precise measurement of cosmic ray energy spectrum and mass composition</li>
        <li>Observation of small and large-scale cosmic ray anisotropy</li>
        <li>Observation of point and diffuse gamma ray sources</li>
      </ul>
    </li>

    <li>
      <span className="font-medium">
        Investigation of Heliospheric and Space Weather Phenomena through Cosmic Ray
        Modulation at 10¹⁰ – 10¹² eV energies using flux of GeV muons
      </span>

      <ul className="list-disc ml-6 mt-2">
        <li>Coronal mass ejections inducing Forbush decreases and other transient changes</li>
        <li>Periodic modulations such as diurnal, 27-day and 11-year solar cycle</li>
      </ul>
    </li>

    <li>
      <span className="font-medium">
        Investigation of Atmospheric Phenomena using flux of GeV muons
      </span>

      <ul className="list-disc ml-6 mt-2">
        <li>Particle acceleration during thunderstorms</li>
        <li>Thunderstorm induced muon events and relation to climate change</li>
      </ul>
    </li>

  </ol>
</section>

<hr className="my-12" />

{/* KEY SCIENTIFIC RESULTS */}
<section>
  <h2 className="text-center text-3xl font-semibold text-blue-700">
    Key Scientific Results
  </h2>

  <div className="mt-6 text-gray-800">
    <h3 className="text-2xl font-semibold mt-10 mb-4">
      1. Evidence of a Hardening in the Cosmic Ray Proton Spectrum at around
      166 TeV Observed by the GRAPES-3 Experiment
    </h3>

    <p className="mt-2">
  GRAPES-3 discovers a kink in the cosmic ray proton spectrum at around
  166 TeV while measuring the spectrum over 50 TeV to 1.3 PeV.
  Results published in{" "}
  <a
    href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.132.051002"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    Physical Review Letters
  </a>.
</p>
  </div>
</section>

        {/* SECTION 1 */}
        <section className="mt-12">

          <img
            src={protonSpectrum}
            alt="Cosmic ray proton spectrum"
            className="w-full rounded-lg border"
          />

          <p className="mt-4 text-gray-700">
            Cosmic ray proton spectrum measured by the GRAPES-3 experiment
            along with measurements from various space and ground based detectors.
          </p>

          <h3 className="mt-6 font-semibold">Popular news articles related to this</h3>

          <ol className="list-decimal ml-6 mt-2 text-blue-600 space-y-1">

  <li>
    <a
      href="https://physicsworld.com/a/kink-in-cosmic-ray-spectrum-puzzles-astrophysicists/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Physics World
    </a>
  </li>

  <li>
    <a
      href="https://phys.org/news/2024-02-kink-proton-spectrum-knowledge-cosmic.html"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Phys.org
    </a>
  </li>

  <li>
    <a
      href="https://www.eurekalert.org/news-releases/1033228"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Eureka Alert
    </a>
  </li>

  <li>
    <a
      href="https://scienmag.com/tag/kink/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      ScienMag
    </a>
  </li>

  <li>
    <a
      href="https://news.helloscholar.in/discovery-of-a-new-cosmic-ray-feature-by-grapes-3-experiment/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Hello Scholar
    </a>
  </li>

  <li>
    <a
      href="https://ground.news/article/a-new-kink-in-proton-spectrum-to-enhance-our-knowledge-of-cosmic-ray-origin"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Ground
    </a>
  </li>

  <li>
    <a
      href="https://www.snexplores.org/article/muons-show-thunderstorms-hold-stunningly-high-voltage"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      ScienceNewsExplores
    </a>
  </li>

  <li>
    <a
      href="https://samacharcentral.com/unlocking-the-potential-of-the-new-kink-in-proton-spectrum/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Samachar Central
    </a>
  </li>

  <li>
    <a
      href="https://www.spacedaily.com/reports/GRAPES_3_experiment_unveils_unexpected_twist_in_cosmic_ray_spectrum_999.html"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Space Daily
    </a>
  </li>

  <li>
    <a
      href="https://ct.moreover.com/?a=52999982276&p=1pl&v=1&x=07GekILs1Mj2LAqVeRcwPQ"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Moreover News
    </a>
  </li>

</ol>
        </section>

        {/* SECTION 2 */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            2. Small-scale Cosmic-Ray Anisotropy Observed by the GRAPES-3 Experiment at TeV Energies
          </h2>

          <p className="text-gray-700">
            GRAPES-3 observes small-scale anisotropic structures in the arrival
            distribution of cosmic rays. Results published in{" "}
<a
  href="https://iopscience.iop.org/article/10.3847/1538-4357/ad132b"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  The Astrophysical Journal
</a>.
          </p>

          <img
            src={anisotropyMap}
            alt="Cosmic ray anisotropy"
            className="mt-6 w-full rounded-lg border"
          />

          <p className="mt-4 text-gray-700">
            Cosmic ray anisotropy observed by the GRAPES-3 experiment at median
            energy of 16 TeV. Structures A and B show significant excess.
          </p>
        </section>

        {/* SECTION 3 */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            3. Measurement of the Electrical Properties of a Thundercloud Through Muon Imaging
          </h2>

          <p className="text-gray-700 leading-relaxed">
  The GRAPES-3 muon telescope recorded rapid (~10 min) variations in the
  muon intensity during major thunderstorms. Out of a total of 184
  thunderstorms recorded during the interval of April 2011–December 2014,
  the one on December 1, 2014 produced a massive potential of 1.3 GV.
  The electric field measured by four well-separated (up to 6 km) monitors
  on the ground was used to help estimate some of the properties of this
  thundercloud, including its altitude and area that were found to be
  11.4 km above mean sea level and ≥ 380 km², respectively. A charging
  time of 6 min to reach 1.3 GV implied the delivery of a power of ≥ 2 GW
  by this thundercloud that was moving at a speed of ~60 km h⁻¹. This work
  possibly provides the first direct evidence for the generation of
  gigavolt potentials in thunderclouds that could also possibly explain
  the production of highest-energy (100 MeV) gamma rays in the terrestrial
  gamma-ray flashes.
</p>

          <img
            src={muonRate}
            alt="Thundercloud muon imaging"
            className="mt-6 w-full rounded-lg border"
          />
          <p className="mt-4 text-gray-700">
  The top panels show the movement of the thundercloud recorded on
  1 December 2014, each with two minute exposure muon image.
  The bottom panels show the measured thundercloud potential
  for each muon image.
</p>

          <p className="mt-4 text-gray-700">
            This work was published in{" "}
<a
  href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.132.051002"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  Physical Review Letters
</a>.
          </p>
        </section>

        {/* SECTION 4 */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            4. Transient Weakening of Earth’s Magnetic Shield
          </h2>

          <p className="text-gray-700 leading-relaxed">
  The GRAPES-3 tracking muon telescope in Ooty, India measured muon
  intensity at high cutoff rigidities (15–24 GV) along nine independent
  directions covering 2.3 sr. The arrival of a coronal mass ejection on
  22 June 2015 18:40 UT had triggered a severe G4-class geomagnetic
  storm. Starting 19:00 UT, the GRAPES-3 muon telescope recorded a
  2 h high-energy (~20 GeV) burst of galactic cosmic rays (GCRs) that
  was strongly correlated with a 40 nT surge in the interplanetary
  magnetic field (IMF).

  Simulations have shown that a large (17×) compression of the IMF to
  680 nT, followed by reconnection with the geomagnetic field (GMF)
  leading to lower cutoff rigidities could generate this burst. Here,
  680 nT represents a short-term change in GMF around Earth, averaged
  over 7 times its volume.

  The GCRs, due to lowering of cutoff rigidities, were deflected from
  Earth’s day side by ~210° in longitude, offering a natural explanation
  of its night-time detection by the GRAPES-3. The simultaneous
  occurrence of the burst in all nine directions suggests its origin
  close to Earth.

  It also indicates a transient weakening of Earth’s magnetic shield,
  and may hold clues for a better understanding of future superstorms
  that could cripple modern technological infrastructure on Earth and
  endanger the lives of astronauts in space.
</p>

          <img
            src={transient}
            alt="Muon rate variation"
            className="mt-6 w-full rounded-lg border"
          />

         <p className="mt-4 text-gray-700">
  Muon-rate variation in nine directions observed by GRAPES-3 on
  22 June 2015 shown by the solid line. Simulation results normalized
  to data by scaling the IMF 17 times are shown by the broken line.
  Cutoff rigidities (GV) and error bars are shown for each direction.
</p>

<p className="mt-4 text-gray-700">
            This work was published in{" "}
<a
  href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.132.051002"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  Physical Review Letters
</a>.
          </p>
        </section>
        <hr className="my-16" />

{/* NEWS */}
<section>

  <h2 className="text-center text-4xl font-semibold text-blue-700">
    News
  </h2>

  <p className="mt-6 text-gray-800">
    Awards received by the GRAPES-3 collaboration members at the
    26th DAE-BRNS HEP symposium held at BHU, Varanasi from
    19 to 23 December, 2024
  </p>

  <ol className="list-decimal ml-6 mt-4 space-y-2 text-gray-800">
    <li>
      Dr. Fahim Varsi – Indian Physics Association Rahul Basu Memorial
      Award for Best Thesis (Honorable mention) in High Energy Physics
    </li>

    <li>
      Mr. Ujjwal Mishra – Best poster award
    </li>

    <li>
      Dr. Pranaba K. Nayak – Poster award (Honorable mention)
    </li>
  </ol>

  <h3 className="mt-8 text-xl font-semibold">
    Other mentions
  </h3>

  <ol className="list-decimal ml-6 mt-4 space-y-2">

    <li>
      <a
        href="https://qrius.com/the-latest-technology-in-indias-space-arsenal/"
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        The latest technology in India’s space arsenal
      </a>
    </li>

    <li>
      <a
        href="https://themango.co/ooty-a-place-for-science-lovers-too/"
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        Ooty – A place for science lovers too!
      </a>
    </li>

    <li>
      <a
        href="https://thewire.in/science/how-earths-magnetic-shield-was-breached-and-a-telescope-in-ooty-tuned-in"
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        How Earth's Magnetic Shield Was Breached – and a Telescope in Ooty Tuned in
      </a>
    </li>

    <li>
      <a
        href="https://www.careerride.com/view/crack-in-earths-magnetic-shield-recorded-31163.aspx"
        target="_blank"
        className="text-blue-600 hover:underline"
      >
        Crack in earth’s magnetic shield recorded
      </a>
    </li>

    <li><a href="https://www.steamregister.com/" target="_blank" className="text-blue-600 hover:underline">Cosmic Burst Cracked Earth's Magnetic Field Wide Open</a></li>

<li><a href="https://www.innovations-report.com/" target="_blank" className="text-blue-600 hover:underline">GRAPES-3 indicates a crack in Earth's magnetic shield</a></li>

<li><a href="https://weather.com/" target="_blank" className="text-blue-600 hover:underline">Burst From a Solar Flare Cracked Our Planet's Protective Barrier, Caused Radio Blackouts, Study Says</a></li>

<li><a href="https://www.freepressjournal.in/" target="_blank" className="text-blue-600 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.msn.com/" target="_blank" className="text-blue-600 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.spacedaily.com/" target="_blank" className="text-blue-600 hover:underline">Cosmic-ray detector finds possible crack in Earth's magnetic shield</a></li>

<li><a href="https://mysteriousuniverse.org/" target="_blank" className="text-blue-600 hover:underline">Massive Crack in Earth's Magnetic Shield Discovered</a></li>

<li><a href="https://www.techwork.net/" target="_blank" className="text-blue-600 hover:underline">Scientists detect a crack in Earth's magnetic shield</a></li>

<li><a href="https://tamil.oneindia.com/" target="_blank" className="text-blue-600 hover:underline">பூமியின் காந்தப் புலத்தில் விரிசல்: இந்திய விஞ்ஞானிகள் தகவல்</a></li>

<li><a href="https://www.vikatan.com/" target="_blank" className="text-blue-600 hover:underline">பூமி காந்தப்புலத்தில் விரிசல்: இந்திய விஞ்ஞானிகள் கண்டுபிடிப்பு</a></li>

<li><a href="https://www.vikatan.com/" target="_blank" className="text-blue-600 hover:underline">பூமியின் காந்தப்புலத்தில் விரிசல்.. என்ன மாதிரியான பாதிப்புகளை ஏற்படுத்தும்?</a></li>

<li><a href="https://www.dinamalar.com/" target="_blank" className="text-blue-600 hover:underline">புவி காந்தப்புலத்தில் பிளவு</a></li>

<li><a href="https://www.upi.com/" target="_blank" className="text-blue-600 hover:underline">Cosmic-ray detector finds possible crack in Earth's magnetic shield</a></li>

<li><a href="https://www.sott.net/" target="_blank" className="text-blue-600 hover:underline">Cosmic-ray detector finds possible crack in Earth's magnetic shield</a></li>

<li><a href="https://www.iflscience.com/" target="_blank" className="text-blue-600 hover:underline">A Solar Storm Put A Crack In Earth's Magnetic Field</a></li>

<li><a href="https://www.talkradio.co.uk/" target="_blank" className="text-blue-600 hover:underline">Scientists fear cosmic rays could one day batter earth after finding crack in magnetic shield</a></li>

<li><a href="https://tech.hindustantimes.com/tech/news/indian-scientists-detect-crack-in-earth-s-magnetic-shield-story-PSWNBbaRpWfWUDAe7ZwDCJ.html" target="_blank" className="text-blue-600 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.sciencealert.com/" target="_blank" className="text-blue-600 hover:underline">Scientists have detected a crack in Earth's magnetic shield</a></li>

<li><a href="https://www.natureworldnews.com/" target="_blank" className="text-blue-600 hover:underline">India's Telescope Detects Crack in the Earth's Magnetic Shield</a></li>

<li><a href="https://www.wired.co.uk/" target="_blank" className="text-blue-600 hover:underline">Galactic cosmic rays burst through a crack in Earth's magnetic shield</a></li>

<li><a href="https://mumbaimirror.indiatimes.com/" target="_blank" className="text-blue-600 hover:underline">SCIENTISTS DETECT CRACK IN EARTH'S MAGNETIC SHIELD</a></li>

<li><a href="https://www.dailymail.co.uk/" target="_blank" className="text-blue-600 hover:underline">Is Earth's protective shield cracking?</a></li>

<li><a href="https://timesofindia.indiatimes.com/" target="_blank" className="text-blue-600 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.deccanchronicle.com/" target="_blank" className="text-blue-600 hover:underline">Cosmic Ray lab scientists track solar storm</a></li>

<li><a href="https://www.deccanchronicle.com/" target="_blank" className="text-blue-600 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.ptinews.com/" target="_blank" className="text-blue-600 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.eurekalert.org/" target="_blank" className="text-blue-600 hover:underline">GRAPES-3 indicates a crack in Earth's magnetic shield</a></li>

<li><a href="https://phys.org/" target="_blank" className="text-blue-600 hover:underline">GRAPES-3 indicates a crack in Earth's magnetic shield</a></li>

<li><a href="https://www.nature.com/" target="_blank" className="text-blue-600 hover:underline">GRAPES-3 cosmic ray muon telescope detects crack in Earth's magnetic field</a></li>

<li><a href="https://egno.gr/" target="_blank" className="text-blue-600 hover:underline">Earth's magnetic field: There was a crack in the Earth's protective shield</a></li>

<li><a href="https://revealedtheninthwave.blogspot.in/" target="_blank" className="text-blue-600 hover:underline">Earth's magnetic field: There was a crack in the Earth's protective shield</a></li>

<li><a href="https://www.sciencemag.org/" target="_blank" className="text-blue-600 hover:underline">Solar storms can weaken Earth's magnetic field</a></li>

<li><a href="https://www.nature.com/" target="_blank" className="text-blue-600 hover:underline">Cosmic rays may threaten space-weather satellite</a></li>

<li><a href="https://www.thehindu.com/" target="_blank" className="text-blue-600 hover:underline">Indian muon trackers get a handle on solar storms</a></li>

<li><a href="https://culturacientifica.com/" target="_blank" className="text-blue-600 hover:underline">A gap in our shield</a></li>

<li><a href="https://www.vozpopuli.com/" target="_blank" className="text-blue-600 hover:underline">Obama is right, we must prepare for the big solar storm</a></li>

<li><a href="https://formaciononlineutrider.com/" target="_blank" className="text-blue-600 hover:underline">Obama is right, we must prepare for the big solar storm</a></li>

<li><a href="https://physics.aps.org/" target="_blank" className="text-blue-600 hover:underline">Synopsis: A Crack in Earth's Protective Shield</a></li>

<li><a href="https://physicsworld.com/" target="_blank" className="text-blue-600 hover:underline">Cosmic rays get past Earth's magnetic field</a></li>

<li>
  <a href="https://www.theguardian.com/science/live/2016/feb/11/gravitational-waves-breakthrough-discovery-announced-live" target="_blank" className="text-blue-600 hover:underline">
    gravitational waves: breakthrough discovery announced – as it happened
  </a>
</li>

  </ol>

</section>

      </div>
    </main>
  );
}