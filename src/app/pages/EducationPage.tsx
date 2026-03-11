export default function EducationPage() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#1E4A73] to-[#132F4B] text-white">

      <main className="mx-auto max-w-5xl px-6 py-12">

        {/* PAGE TITLE */}
        <div className="text-center mb-12">
  <h1 className="text-5xl font-semibold text-white">
    Education
  </h1>

  <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded"></div>
</div>

        {/* WINTER SCHOOL */}
        <section>

          <h2 className="text-3xl text-blue-200 font-semibold text-center mb-6">
            Winter School on AstroParticle Physics
          </h2>

          <p className="text-gray-300 leading-relaxed">
            The Winter School on Astroparticle Physics (WAPP), later renamed the School on
            Experimental Astroparticle Physics (SEAP) since 2025, is being held in association
            with the Bose Institute, Kolkata. The philosophy of WAPP is to expose young minds
            to the excitement in the field of experimental high energy astroparticle physics.
            Students gain hands-on experience working with state-of-the-art equipment such as
            high-speed electronics, photomultiplier tubes and plastic scintillators to measure
            the properties of muons and explore real scientific research.
          </p>

        </section>

        {/* TABLE */}
        <section className="mt-10">

          <div className="overflow-x-auto">

            <table className="w-full border border-slate-500 text-gray-200">

              <thead>
                <tr className="bg-[#244B72]">
                  <th className="border border-slate-500 p-3 text-left">Year</th>
                  <th className="border border-slate-500 p-3 text-left">Venue</th>
                  <th className="border border-slate-500 p-3 text-left">Participants</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td className="border border-slate-500 p-2 text-blue-300">2025</td>
                  <td className="border border-slate-500 p-2">Cosmic Ray Laboratory, Ooty, India</td>
                  <td className="border border-slate-500 p-2">35</td>
                </tr>

                <tr>
                  <td className="border border-slate-500 p-2">2016</td>
                  <td className="border border-slate-500 p-2">Cosmic Ray Laboratory, Ooty, India</td>
                  <td className="border border-slate-500 p-2">44</td>
                </tr>

                <tr>
                  <td className="border border-slate-500 p-2">2015</td>
                  <td className="border border-slate-500 p-2">Bose Institute, Darjeeling, India</td>
                  <td className="border border-slate-500 p-2">20</td>
                </tr>

                <tr>
                  <td className="border border-slate-500 p-2">2014</td>
                  <td className="border border-slate-500 p-2">Cosmic Ray Laboratory, Ooty, India</td>
                  <td className="border border-slate-500 p-2">41</td>
                </tr>

                <tr>
                  <td className="border border-slate-500 p-2">2013</td>
                  <td className="border border-slate-500 p-2">Bose Institute, Darjeeling, India</td>
                  <td className="border border-slate-500 p-2">20</td>
                </tr>

                <tr>
                  <td className="border border-slate-500 p-2">2012</td>
                  <td className="border border-slate-500 p-2">Cosmic Ray Laboratory, Ooty, India</td>
                  <td className="border border-slate-500 p-2">20</td>
                </tr>

                <tr>
                  <td className="border border-slate-500 p-2">2011</td>
                  <td className="border border-slate-500 p-2">Bose Institute, Darjeeling, India</td>
                  <td className="border border-slate-500 p-2">20</td>
                </tr>

                <tr>
                  <td className="border border-slate-500 p-2">2010</td>
                  <td className="border border-slate-500 p-2">Cosmic Ray Laboratory, Ooty, India</td>
                  <td className="border border-slate-500 p-2">18</td>
                </tr>

                <tr>
                  <td className="border border-slate-500 p-2">2009</td>
                  <td className="border border-slate-500 p-2">Bose Institute, Darjeeling, India</td>
                  <td className="border border-slate-500 p-2">20</td>
                </tr>

                <tr>
                  <td className="border border-slate-500 p-2">2008</td>
                  <td className="border border-slate-500 p-2">Cosmic Ray Laboratory, Ooty, India</td>
                  <td className="border border-slate-500 p-2">20</td>
                </tr>

                <tr>
                  <td className="border border-slate-500 p-2">2007</td>
                  <td className="border border-slate-500 p-2">Bose Institute, Darjeeling, India</td>
                  <td className="border border-slate-500 p-2">20</td>
                </tr>

                <tr>
                  <td className="border border-slate-500 p-2">2006</td>
                  <td className="border border-slate-500 p-2">Cosmic Ray Laboratory, Ooty, India</td>
                  <td className="border border-slate-500 p-2">22</td>
                </tr>

                <tr className="bg-[#244B72] font-semibold">
                  <td className="border border-slate-500 p-2"></td>
                  <td className="border border-slate-500 p-2 text-right">Total</td>
                  <td className="border border-slate-500 p-2">300</td>
                </tr>

              </tbody>
            </table>

          </div>

        </section>

        {/* PhD Thesis */}
        <section className="mt-16">

          <h2 className="text-center text-4xl font-semibold text-blue-200 mb-10">
            Ph.D Thesis
          </h2>

          <ol className="list-decimal ml-6 space-y-6 text-gray-300">

            <li>
              Exploring thermalization in cosmic ray-air interactions and a new method for muon multiplicity measurement with the GRAPES-3 experiment [2025]
              <br />
              <span className="text-blue-300">– Ronald Scaria</span>
            </li>

            <li>
              Probing cosmic ray anisotropy with the GRAPES-3 experiment [2024]
              <br />
              <span className="text-blue-300">– Medha Chakraborty</span>
            </li>

            <li>
              Study of multi-TeV gamma ray sources with GRAPES-3 experiment [2024]
              <br />
              <span className="text-blue-300">– Diptiranjan Pattanaik</span>
            </li>

            <li>
              Characterizing hadronic phase in relativistic hadronic collisions and study of muon puzzle in cosmic ray events [2024]
              <br />
              <span className="text-blue-300">– Girija Shankar Pradhan</span>
            </li>

            <li>
              Measurement of energy spectrum and composition of cosmic rays [2023]
              <br />
              <span className="text-blue-300">– Fahim Varsi</span>
            </li>

            <li>
  A study of high energy cosmic ray particles by using data from the GRAPES-3 experiment [2021]
  <br />
  <span className="text-blue-300">– B. Hari Haran</span>
</li>

<li>
  An Extensive Study of the Angular Resolution of GRAPES-3 Experiment [2020]
  <br />
  <span className="text-blue-300">– V.B. Jhansi</span>
</li>

<li>
  High Angular Resolution Studies using GRAPES-3 Experimental Data [2020]
  <br />
  <span className="text-blue-300">– Meeran Zuberi</span>
</li>

<li>
  A study of high-energy cosmic ray showers by extending the dynamic range of scintillator detectors in GRAPES-3 experiment [2019]
  <br />
  <span className="text-blue-300">– Anuj Chandra</span>
</li>

<li>
  Coronal mass ejections from the sun - propagation and near earth effects [2014]
  <br />
  <span className="text-blue-300">– K.P. Arunbabu</span>
</li>

<li>
  An investigation of the sun induced diurnal anisotropy in cosmic rays measured with the GRAPES-3 experiment [2014]
  <br />
  <span className="text-blue-300">– Pravata Kumar Mohanty</span>
</li>

<li>
  Search for Point Sources of High Energy Gamma Rays Using GRAPES-3 Air Shower Array [2008]
  <br />
  <span className="text-blue-300">– Akitoshi Oshima</span>
</li>

<li>
  A Study of Loss-Cone Precursor Decrease with GRAPES-3 Muon Telescopes [2006]
  <br />
  <span className="text-blue-300">– Toshiyuki Nonaka</span>
</li>

<li>
  Study of Cosmic Ray Sidereal Anisotropy with GRAPES-3 Muon Telescopes [2005]
  <br />
  <span className="text-blue-300">– Hiroshi Kojima</span>
</li>

<li>
  A Study of Nuclear Composition of Primary Cosmic Rays with GRAPES-3 Air Shower Experiment [2005]
  <br />
  <span className="text-blue-300">– H. Tanaka</span>
</li>

<li>
  Study of Ultra High Energy Gamma Rays with Ooty Air Shower Array Experiment [1999]
  <br />
  <span className="text-blue-300">– Masahiko Sasano</span>
</li>

          </ol>

        </section>

      </main>

    </div>
  );
}