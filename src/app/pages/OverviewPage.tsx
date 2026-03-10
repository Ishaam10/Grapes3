import hero4 from "../../assets/hero4.jpeg";
export default function OverviewPage() {
  return (
    <div className="relative pt-24 min-h-screen text-white overflow-hidden">
      {/* Background Image */}
<img
  src={hero4}
  alt="Overview Background"
  className="absolute inset-0 w-full h-full object-cover"
/>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-5xl mx-auto bg-[#132F4B]/85 backdrop-blur-md shadow-xl rounded-xl p-12">

        {/* PAGE TITLE */}
<div className="text-center mb-14">

  <p className="text-sm tracking-widest text-blue-300 uppercase mb-3">
    GRAPES-3 Experiment
  </p>

  <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
    Overview
  </h1>

  <div className="flex items-center justify-center mt-5">
    <div className="w-16 h-[2px] bg-blue-400"></div>
    <div className="w-2 h-2 bg-blue-400 rounded-full mx-3"></div>
    <div className="w-16 h-[2px] bg-blue-400"></div>
  </div>

</div>


        {/* HISTORY */}
        <h2 className="text-3xl text-blue-400 text-center mb-6">
          History
        </h2>

        <p className="text-gray-300 leading-8 mb-6">
          The first cosmic ray experiment was started in 1955 by B.V. Sreekantan
          by setting up Cloud chambers that heralded the beginning of research
          at the Cosmic Ray Laboratory in Ooty. The next decade witnessed a
          variety of experiments involving high energy interactions and
          extensive air shower studies in this laboratory.
        </p>

        <p className="text-gray-300 leading-8 mb-10">
          In continuation of this pioneering work on cosmic ray research at CRL
          (Ooty), GRAPES-1 experiment was upgraded in various stages to
          GRAPES-2. However, due to the technical and administrative problems
          in its further expansion, a new experiment was set up at the RAC site
          8 km from the old site which is called GRAPES-3. The GRAPES-3
          experiment at present is operating with ~400 plastic scintillator
          detectors with a separation of 8 meters to record the density and
          arrival time of particles in cosmic ray showers.
        </p>


        {/* COLLABORATIVE INSTITUTIONS */}
        <h2 className="text-3xl text-blue-400 text-center mb-6">
          Collaborative Institutions
        </h2>

        <h3 className="text-lg font-semibold mb-4">From India:</h3>

        <ol className="list-decimal ml-6 space-y-2 text-blue-400 font-medium mb-10">
          <li>
  <a
    href="http://www.tifr.res.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Tata Institute of Fundamental Research
  </a>
</li>
          <li>
  <a
    href="http://www.iiserpune.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    J.C. Bose Institute, Kolkata, India
  </a>
</li>
          <li>
  <a
    href="http://www.iiserpune.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Indian Institute of Science Education and Research Pune, India
  </a>
</li>
          <li>
  <a
    href="http://www.iiserpune.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Indian Institute of Technology, Kanpur, India
  </a>
</li>
          <li>
  <a
    href="http://www.amu.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Aligarh Muslim University, Aligarh, India
  </a>
</li>
          <li>
  <a
    href="http://www.nbu.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    North Bengal University, Siliguri, India
  </a>
</li>
          <li>
  <a
    href="http://www.viit.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Vishwakarma Institute of Information Technology, Pune, India
  </a>
</li>
          <li>
  <a
    href="https://utkaluniversity.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Utkal University, Bhubaneswar, India
  </a>
</li>
          <li>
  <a
    href="https://dibru.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Dibrugarh University, India
  </a>
</li>
          <li>
  <a
    href="https://www.tezu.ernet.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Tezpur University, India
  </a>
</li>
          <li>
  <a
    href="https://www.iitj.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    IIT Jodhpur, India
  </a>
</li>
          <li>
  <a
    href="https://www.iiti.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    IIT Indore, India
  </a>
</li>
          <li>
  <a
    href="https://www.amity.edu/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    AMITY University, Noida, India
  </a>
</li>
          <li>
  <a
    href="https://www.iopb.res.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Institute of Physics, Bhubaneswar, India
  </a>
</li>
          <li>
  <a
    href="https://www.bits-pilani.ac.in/hyderabad/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    BITS Pilani, Hyderabad, India
  </a>
</li>
        </ol>


        <h3 className="text-lg font-semibold mb-4">From Japan:</h3>

        <ol className="list-decimal ml-6 space-y-2 text-blue-400 font-medium mb-12">
          <li>
  <a
    href="http://www.osaka-cu.ac.jp/en"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Osaka City University, Osaka, Japan
  </a>
</li>
          <li>
  <a
    href="http://www.ait.ac.jp/e/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Aichi Institute of Technology, Toyota, Japan
  </a>
</li>
          <li>
  <a
    href="http://www.chubu.ac.jp/english/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Chubu University, Kasugai, Aichi, Japan
  </a>
</li>
          <li>
  <a
    href="http://www.chubu.ac.jp/english/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Hiroshima City University, Hiroshima, Japan
  </a>
</li>
          <li>
  <a
    href="https://www.kochi-u.ac.jp/english/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Kochi University, Kochi, Japan
  </a>
</li>
          <li>
  <a
    href="https://en.nagoya-u.ac.jp/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Nagoya University, Japan
  </a>
</li>
          <li>
  <a
    href="https://www.icrr.u-tokyo.ac.jp/en/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Institute for Cosmic Ray Research, University of Tokyo, Japan
  </a>
</li>
        </ol>


        {/* DETECTORS */}
        <h2 className="text-3xl text-blue-400 text-center mb-6">
          Detectors and Instrumentation
        </h2>

        <p className="text-gray-300 leading-8 mb-6">
          The Cosmic Ray Laboratory has been at the forefront for the development
          of state-of-the-art detectors and electronic instruments in an effort
          to produce and use world-class equipment. Most of the equipment costs
          ~10% of imported equipment, maintenance is inexpensive and prompt
          because of the in-house expertise.
        </p>

        <ul className="list-disc ml-6 space-y-3 text-gray-300">
          <li>High quality fast plastic scintillators with long attenuation length</li>
          <li>Ultra-fast amplifiers and discriminators with time jitter ~100 ps</li>
          <li>Time to digital converters (TDCs)</li>
          <li>General purpose boards with USB and TCP/IP interface</li>
          <li>FPGA boards for triggering and data acquisition</li>
        </ul>

      </div>

    </div>
  );
}