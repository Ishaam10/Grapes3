import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Radio, Zap, CloudRain } from "lucide-react";
import CountUp from "react-countup";
import { Facebook, X, Youtube } from "lucide-react";

import hero1 from "../../assets/hero1.jpeg";
import hero2 from "../../assets/hero2.jpeg";
import hero3 from "../../assets/hero3.jpeg";

import cosmicRayShower from "../../assets/cosmicRayShower.jpg";
import protonSpectrum from "../../assets/protonSpectrum.png";
import anisotropyMap from "../../assets/anisotropyMap.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import tifrLogo from "../../assets/tifr-logo.png";

export default function HomePage() {
  const heroImages = [hero1, hero2, hero3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

  {/* Background Image */}
  <img
  src={heroImages[currentImage]}
  alt="GRAPES-3 Experiment"
  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
/>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
    <h1 className="text-5xl md:text-6xl mb-6">
      GRAPES-3 Experiment
    </h1>

    <p className="text-xl md:text-2xl mb-8">
      Studying cosmic rays and extensive air showers at the highest energies
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        to="/science"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
      >
        Explore Research <ArrowRight className="w-5 h-5" />
      </Link>

      <Link
        to="/contact"
        className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
      >
        Get in Touch
      </Link>
    </div>
  </div>

</section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-[#132F4B] to-[#0F2A44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">About GRAPES-3</h2>
              <p className="text-gray-300 mb-6 text-lg">
                The GRAPES-3 observatory located in Ooty, India at an altitude of 2200m is designed 
                to study the origin, acceleration and propagation of cosmic rays through measurement 
                of extensive air showers, induced by primary cosmic rays or gamma rays entering the 
                Earth's atmosphere in tera to peta electronvolt energies.
              </p>
              <p className="text-gray-300 mb-6 text-lg">
                It also studies solar and thunderstorm phenomena using cosmic ray muons. GRAPES-3 
                employs an array of plastic scintillator detectors and a large area muon detector 
                based on proportional counters.
              </p>
              <Link
                to="/overview"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src={cosmicRayShower}
                alt="GRAPES-3 Experiment with Simulated Cosmic Ray Shower"
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-sm p-3">
                A view of the GRAPES-3 experiment in Ooty, India depicted with a simulated cosmic ray shower
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-[#132F4B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Research Areas</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our multi-faceted approach to understanding cosmic phenomena
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1B3A5C] p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-white">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Radio className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Cosmic Ray Physics</h3>
              <p className="text-gray-300 mb-4">
                Studying the origin, acceleration, and propagation of cosmic rays at the highest energies.
              </p>
              <Link
                to="/science"
                className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-[#1B3A5C] p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-white">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl mb-3">Extensive Air Showers</h3>
              <p className="text-gray-300 mb-4">
                Measuring extensive air showers induced by primary cosmic rays entering Earth's atmosphere.
              </p>
              <Link
                to="/science"
                className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-[#1B3A5C] p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-white">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <CloudRain className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl mb-3">Solar & Thunderstorm Studies</h3>
              <p className="text-gray-300 mb-4">
                Investigating solar and thunderstorm phenomena using cosmic ray muons.
              </p>
              <Link
                to="/science"
                className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#132F4B] to-[#1E4A73] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">
  <CountUp end={400} duration={6} />+
</div>
              <div className="text-blue-100">Scintillator Detectors</div>
            </div>
            <div>
              <div className="text-5xl mb-2"><CountUp end={560} duration={6} />m²</div>
              <div className="text-blue-100">Muon Detector Area</div>
            </div>
            <div>
              <div className="text-5xl mb-2"><CountUp end={2200} duration={6} />m</div>
              <div className="text-blue-100">Altitude in Ooty</div>
            </div>
            <div>
              <div className="text-5xl mb-2"><CountUp end={100} duration={6} />+</div>
              <div className="text-blue-100">Publications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Highlights */}
<section className="py-20 bg-[#132F4B] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">
      <h2 className="text-4xl mb-4">Science Highlights</h2>
      <p className="text-gray-300 text-lg">
        Recent discoveries and groundbreaking observations
      </p>
    </div>

    <div className="space-y-16">

      {/* Highlight 1 */}
      <article className="bg-[#1B3F63] rounded-lg shadow-lg p-8 text-white">
        <h3 className="text-2xl mb-4">
          Evidence of a Hardening in the Cosmic Ray Proton Spectrum
        </h3>

        <p className="text-gray-300 mb-6">
          GRAPES-3 discovers a kink in the cosmic ray proton spectrum at
          around 166 TeV while measuring the spectrum over 50 TeV to 1.3 PeV.
          Results published in
          <span className="text-blue-600 ml-1">Physical Review Letters</span>.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <ImageWithFallback
            src={protonSpectrum}
            alt="Cosmic ray proton spectrum"
            className="w-full h-auto"
          />
          <p className="text-sm text-gray-300 mt-4">
            Cosmic ray proton spectrum measured by the GRAPES-3 experiment.
          </p>
        </div>
      </article>


      {/* Highlight 2 */}
      <article className="bg-[#1B3F63] rounded-lg shadow-lg p-8 text-white">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Text */}
          <div>
            <h3 className="text-4xl mb-6">
              Small-scale Cosmic-Ray Anisotropy
            </h3>

            <p className="text-gray-300 mb-6 text-lg">
              Small-scale anisotropy with an angular width less than 60°
              was first reported by the Milagro experiment, which showed
              excesses in two regions known as regions A and B.
            </p>

            <p className="text-gray-300 mb-6 text-lg">
              Region A was centered near α≈69°, δ≈13° while Region B lies
              within 15° &lt; δ &lt; 50° and 117° &lt; α &lt; 141°.
            </p>

            <p className="text-gray-300 text-lg">
              GRAPES-3 covers the declination range −23.8° ≤ δ ≤ 46.6°
              with about 56 % sky coverage, overlapping previous cosmic-ray
              anisotropy experiments.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-end">
            <div className="w-full max-w-md">
              <ImageWithFallback
                src={anisotropyMap}
                alt="Cosmic ray anisotropy map"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-400 mt-3">
                Sky map showing anisotropic structures in cosmic-ray
                arrival directions (Regions A and B).
              </p>
            </div>
          </div>

        </div>
      </article>

    </div>
  </div>
</section>
      <section className="py-20 bg-[#132F4B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Latest News</h2>
            <p className="text-gray-300 text-lg">Stay updated with our recent discoveries and achievements</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-[#1B3F63] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300">
              <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Radio className="w-20 h-20 text-white opacity-80" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-200 mb-2">March 1, 2026</div>
                <h3 className="text-xl mb-3">New Cosmic Ray Spectrum Analysis</h3>
                <p className="text-gray-200 mb-4">
                  Latest data analysis reveals additional features in the cosmic ray energy spectrum 
                  beyond the 166 TeV kink.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>

            <article className="bg-[#1B3F63] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 text-white">
              <div className="h-48 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Zap className="w-20 h-20 text-white opacity-80" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-200 mb-2">February 28, 2026</div>
                <h3 className="text-xl mb-3">Thunderstorm Electric Fields Measured</h3>
                <p className="text-gray-200 mb-4">
                  GRAPES-3 muon telescope successfully measures strong electric fields during 
                  thunderstorm activity.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>

            <article className="bg-[#1B3F63] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 text-white">
              <div className="h-48 overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <CloudRain className="w-20 h-20 text-white opacity-80" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-200 mb-2">February 25, 2026</div>
                <h3 className="text-xl mb-3">Solar Modulation Studies</h3>
                <p className="text-gray-200 mb-4">
                  New insights into solar modulation of cosmic rays during the current solar cycle 
                  published in leading journal.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A232B] text-gray-400 py-10">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex flex-col md:flex-row items-center justify-between">

      {/* Left Logo */}
      <div className="flex items-center gap-4 mb-6 md:mb-0">
        <a
  href="https://www.tifr.res.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="transition duration-300 hover:scale-105 hover:opacity-100"
>
  <img
    src={tifrLogo}
    alt="TIFR Logo"
    className="h-14 opacity-70 grayscale hover:grayscale-0"
  />
</a>
      </div>

      <div className="flex gap-6">

  <a
  href="https://www.facebook.com/CRL.TIFR"
  target="_blank"
  rel="noopener noreferrer"
  className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2E3A46] hover:bg-[#3B4A58] transition"
>
  <Facebook size={22} strokeWidth={1.5} className="text-gray-300" />
</a>

  <a
  href="https://x.com/CRL_TIFR"
  target="_blank"
  rel="noopener noreferrer"
  className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2E3A46] hover:bg-[#3B4A58] transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-6 h-6 fill-gray-300"
  >
    <path d="M18.244 2H21.5l-7.19 8.21L22.5 22h-6.48l-5.08-6.66L4.94 22H1.67l7.68-8.77L1.5 2h6.63l4.6 6.06L18.24 2zm-1.14 18h1.8L7.2 3.9H5.3l11.8 16.1z"/>
  </svg>
</a>

  <a
  href="https://www.youtube.com/@cosmicraylaboratorytifr5078"
  target="_blank"
  rel="noopener noreferrer"
  className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2E3A46] hover:bg-[#3B4A58] transition"
>
  <Youtube size={22} strokeWidth={1.5} className="text-gray-300" />
</a>

</div>
    </div>

    <hr className="border-gray-600 my-6" />

    {/* Copyright */}
    <p
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="text-sm text-gray-400 cursor-pointer hover:text-white transition"
>
  Copyright ©2023 Cosmic Ray Laboratory - TIFR, Ooty. All rights reserved. Contact webmaster
</p>

  </div>
</footer>
    </div>
  );
}
