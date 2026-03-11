import protonSpectrum from "../../assets/protonSpectrum.png";
import anisotropyMap from "../../assets/anisotropyMap.png";
import muonRate from "../../assets/muonRate.png";
import transient from "../../assets/transient.png";

function ResearchCard({
  title,
  image,
  children,
}: {
  title: string;
  image: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#1B3F63] rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-blue-200 mb-4">
          {title}
        </h3>

        <div className="text-gray-300 leading-relaxed text-sm">
          {children}
        </div>
      </div>

    </div>
  );
}
export default function SciencePage() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#1E4A73] to-[#132F4B] text-white">

  <main>
        <div className="mx-auto max-w-5xl px-4 py-10 bg-[#132F4B]/85 backdrop-blur-md rounded-xl shadow-xl">

       <h1 className="text-center text-5xl font-bold text-white tracking-wide">
  Science
</h1>
<div className="w-24 h-1 bg-blue-400 mx-auto mt-3 rounded"></div>
        {/* OBJECTIVES */}
<section className="mt-12">
  <h2 className="text-center text-3xl font-semibold text-blue-300 tracking-wide mt-6">
  Objectives
</h2>

  <ol className="mt-6 space-y-6 text-gray-300">

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

<section className="mt-16">

<h2 className="text-center text-3xl font-semibold text-blue-300 mb-10">
Key Scientific Results
</h2>

<div className="grid md:grid-cols-2 gap-10">

<ResearchCard
title="Hardening in Cosmic Ray Proton Spectrum"
image={protonSpectrum}
>
GRAPES-3 discovered a kink in the cosmic ray proton spectrum
around 166 TeV while measuring energies from 50 TeV to 1.3 PeV.
Results were published in{" "}
<a
href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.132.051002"
target="_blank"
className="text-blue-400 hover:underline"
>
Physical Review Letters
</a>.
</ResearchCard>


<ResearchCard
title="Small-scale Cosmic-Ray Anisotropy"
image={anisotropyMap}
>
GRAPES-3 observed anisotropic structures in the arrival
distribution of cosmic rays at TeV energies.
Published in{" "}
<a
href="https://iopscience.iop.org/article/10.3847/1538-4357/ad132b"
target="_blank"
className="text-blue-400 hover:underline"
>
The Astrophysical Journal
</a>.
</ResearchCard>


<ResearchCard
title="Thundercloud Electrical Properties"
image={muonRate}
>
Thunderclouds during thunderstorms contain extremely strong electric fields 
created by the separation of positive and negative charges inside the cloud. 
Scientists study these electrical properties using muon telescopes, which detect 
muons high-energy particles produced when cosmic rays collide with the Earth’s atmosphere.

These muons travel through the atmosphere and reach the ground, but their paths 
and intensity can be affected by strong electric fields inside thunderclouds. 
By observing changes in muon intensity during thunderstorms, researchers discovered 
that thunderclouds can generate enormous electric potentials of about 
<strong>1.3 gigavolts (GV)</strong>.

This is far greater than normal electrical systems and shows that thunderclouds 
act like natural particle accelerators. Such extremely high potentials help 
explain the production of <strong>terrestrial gamma-ray flashes (TGFs)</strong>, 
which are short bursts of high-energy gamma radiation generated when electrons 
are rapidly accelerated inside thunderclouds.

These findings provide important insights into the physics of thunderstorms, 
lightning formation, and high-energy processes occurring in the Earth’s atmosphere.
</ResearchCard>


<ResearchCard
title="Transient Weakening of Earth's Magnetic Shield"
image={transient}
>
GRAPES-3 detected a burst of galactic cosmic rays during
a severe geomagnetic storm indicating temporary weakening
of Earth's magnetic shield due to solar activity.
</ResearchCard>

</div>

</section>

{/* NEWS */}
<section className="mt-20">

  <h2 className="text-center text-4xl font-semibold text-blue-300">
    News
  </h2>

  <p className="mt-6 text-gray-300">
    Awards received by the GRAPES-3 collaboration members at the
    26th DAE-BRNS HEP symposium held at BHU, Varanasi from
    19 to 23 December, 2024
  </p>

  <ol className="list-decimal ml-6 mt-4 space-y-2 text-gray-300">
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
        className="text-blue-300 hover:text-blue-200 hover:underline"
      >
        The latest technology in India’s space arsenal
      </a>
    </li>

    <li>
      <a
        href="https://themango.co/ooty-a-place-for-science-lovers-too/"
        target="_blank"
        className="text-blue-300 hover:text-blue-200 hover:underline"
      >
        Ooty – A place for science lovers too!
      </a>
    </li>

    <li>
      <a
        href="https://thewire.in/science/how-earths-magnetic-shield-was-breached-and-a-telescope-in-ooty-tuned-in"
        target="_blank"
        className="text-blue-300 hover:text-blue-200 hover:underline"
      >
        How Earth's Magnetic Shield Was Breached – and a Telescope in Ooty Tuned in
      </a>
    </li>

    <li>
      <a
        href="https://www.careerride.com/view/crack-in-earths-magnetic-shield-recorded-31163.aspx"
        target="_blank"
        className="text-blue-300 hover:text-blue-200 hover:underline"
      >
        Crack in earth’s magnetic shield recorded
      </a>
    </li>

    <li><a href="https://www.steamregister.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Cosmic Burst Cracked Earth's Magnetic Field Wide Open</a></li>

<li><a href="https://www.innovations-report.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">GRAPES-3 indicates a crack in Earth's magnetic shield</a></li>

<li><a href="https://weather.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Burst From a Solar Flare Cracked Our Planet's Protective Barrier, Caused Radio Blackouts, Study Says</a></li>

<li><a href="https://www.freepressjournal.in/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.msn.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.spacedaily.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Cosmic-ray detector finds possible crack in Earth's magnetic shield</a></li>

<li><a href="https://mysteriousuniverse.org/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Massive Crack in Earth's Magnetic Shield Discovered</a></li>

<li><a href="https://www.techwork.net/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Scientists detect a crack in Earth's magnetic shield</a></li>

<li><a href="https://tamil.oneindia.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">பூமியின் காந்தப் புலத்தில் விரிசல்: இந்திய விஞ்ஞானிகள் தகவல்</a></li>

<li><a href="https://www.vikatan.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">பூமி காந்தப்புலத்தில் விரிசல்: இந்திய விஞ்ஞானிகள் கண்டுபிடிப்பு</a></li>

<li><a href="https://www.vikatan.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">பூமியின் காந்தப்புலத்தில் விரிசல்.. என்ன மாதிரியான பாதிப்புகளை ஏற்படுத்தும்?</a></li>

<li><a href="https://www.dinamalar.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">புவி காந்தப்புலத்தில் பிளவு</a></li>

<li><a href="https://www.upi.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Cosmic-ray detector finds possible crack in Earth's magnetic shield</a></li>

<li><a href="https://www.sott.net/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Cosmic-ray detector finds possible crack in Earth's magnetic shield</a></li>

<li><a href="https://www.iflscience.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">A Solar Storm Put A Crack In Earth's Magnetic Field</a></li>

<li><a href="https://www.talkradio.co.uk/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Scientists fear cosmic rays could one day batter earth after finding crack in magnetic shield</a></li>

<li><a href="https://tech.hindustantimes.com/tech/news/indian-scientists-detect-crack-in-earth-s-magnetic-shield-story-PSWNBbaRpWfWUDAe7ZwDCJ.html" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.sciencealert.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Scientists have detected a crack in Earth's magnetic shield</a></li>

<li><a href="https://www.natureworldnews.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">India's Telescope Detects Crack in the Earth's Magnetic Shield</a></li>

<li><a href="https://www.wired.co.uk/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Galactic cosmic rays burst through a crack in Earth's magnetic shield</a></li>

<li><a href="https://mumbaimirror.indiatimes.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">SCIENTISTS DETECT CRACK IN EARTH'S MAGNETIC SHIELD</a></li>

<li><a href="https://www.dailymail.co.uk/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Is Earth's protective shield cracking?</a></li>

<li><a href="https://timesofindia.indiatimes.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.deccanchronicle.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Cosmic Ray lab scientists track solar storm</a></li>

<li><a href="https://www.deccanchronicle.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.ptinews.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Indian scientists detect crack in Earth's magnetic shield</a></li>

<li><a href="https://www.eurekalert.org/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">GRAPES-3 indicates a crack in Earth's magnetic shield</a></li>

<li><a href="https://phys.org/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">GRAPES-3 indicates a crack in Earth's magnetic shield</a></li>

<li><a href="https://www.nature.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">GRAPES-3 cosmic ray muon telescope detects crack in Earth's magnetic field</a></li>

<li><a href="https://egno.gr/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Earth's magnetic field: There was a crack in the Earth's protective shield</a></li>

<li><a href="https://revealedtheninthwave.blogspot.in/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Earth's magnetic field: There was a crack in the Earth's protective shield</a></li>

<li><a href="https://www.sciencemag.org/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Solar storms can weaken Earth's magnetic field</a></li>

<li><a href="https://www.nature.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Cosmic rays may threaten space-weather satellite</a></li>

<li><a href="https://www.thehindu.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Indian muon trackers get a handle on solar storms</a></li>

<li><a href="https://culturacientifica.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">A gap in our shield</a></li>

<li><a href="https://www.vozpopuli.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Obama is right, we must prepare for the big solar storm</a></li>

<li><a href="https://formaciononlineutrider.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Obama is right, we must prepare for the big solar storm</a></li>

<li><a href="https://physics.aps.org/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Synopsis: A Crack in Earth's Protective Shield</a></li>

<li><a href="https://physicsworld.com/" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">Cosmic rays get past Earth's magnetic field</a></li>

<li>
  <a href="https://www.theguardian.com/science/live/2016/feb/11/gravitational-waves-breakthrough-discovery-announced-live" target="_blank" className="text-blue-300 hover:text-blue-200 hover:underline">
    gravitational waves: breakthrough discovery announced – as it happened
  </a>
</li>

  </ol>

</section>

   </div>
</main>
</div>
);
}