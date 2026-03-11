import { Facebook, Youtube } from "lucide-react";
import tifrLogo from "../../assets/tifr-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#1A232B] text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* TIFR Logo */}
          <div>
            <a
              href="https://www.tifr.res.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tifrLogo}
                alt="TIFR Logo"
                className="h-16 grayscale opacity-70 hover:opacity-100 hover:scale-105 transition duration-300"
              />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">

            <a
              href="https://www.facebook.com/CRL.TIFR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2E3A46] hover:bg-[#3B4A58] transition"
            >
              <Facebook size={22} className="text-gray-300"/>
            </a>

            <a
              href="https://x.com/CRL_TIFR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2E3A46] hover:bg-[#3B4A58] text-gray-300 font-semibold"
            >
              X
            </a>

            <a
              href="https://www.youtube.com/@cosmicraylaboratorytifr5078"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2E3A46] hover:bg-[#3B4A58] transition"
            >
              <Youtube size={22} className="text-gray-300"/>
            </a>

          </div>

        </div>

        <hr className="border-gray-600 my-6" />

        <p
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm cursor-pointer hover:text-white transition"
        >
          Copyright ©2023 Cosmic Ray Laboratory - TIFR, Ooty. All rights reserved. Contact webmaster
        </p>

      </div>
    </footer>
  );
}