export default function OutreachPage() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#1E4A73] to-[#132F4B] text-white">

      <main className="mx-auto max-w-5xl px-6 py-12">

        {/* PAGE TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold text-blue-200">Outreach</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded"></div>
        </div>

        {/* PUBLIC EVENTS */}
        <h2 className="text-4xl text-center text-blue-200 mb-10">
          Public Events
        </h2>

        {/* UPCOMING EVENTS */}
        <section className="mb-10">

          <h3 className="text-3xl text-blue-200 mb-3">
            Upcoming Events
          </h3>

          <p className="text-gray-300">No new events</p>

        </section>

        <hr className="border-gray-500 mb-10" />

        {/* PAST EVENTS */}
        <section className="mb-12">

          <h3 className="text-3xl text-blue-200 mb-3">
            Past Events
          </h3>

          <h4 className="text-2xl text-blue-300 mb-4">
            National Science Day
          </h4>

          <div className="border border-slate-500 rounded-lg overflow-hidden">

            <details className="border-b border-slate-500">

              <summary className="cursor-pointer p-4 text-lg">
                2023
              </summary>

              <div className="px-4 pb-6">

                <h3 className="text-2xl font-semibold text-blue-300 mt-4">
                  28-02-2023 (Total visitors : 920)
                </h3>

                <div className="overflow-x-auto mt-6">

                  <table className="w-full border border-white/20 text-gray-200">

                    <thead className="bg-[#1E4A73]">
                      <tr>
                        <th className="border border-white/20 p-2">College / Institution</th>
                        <th className="border border-white/20 p-2">Faculty</th>
                        <th className="border border-white/20 p-2">Student</th>
                        <th className="border border-white/20 p-2">Other</th>
                      </tr>
                    </thead>

                    <tbody className="bg-[#132F4B]/60">

                      <tr>
                        <td className="border p-2">CSI College of Engineering, Ketti</td>
                        <td className="border p-2">-</td>
                        <td className="border p-2">12</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">Mango Education, Coimbatore</td>
                        <td className="border p-2">4</td>
                        <td className="border p-2">-</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">Hebron School, Ooty</td>
                        <td className="border p-2">4</td>
                        <td className="border p-2">22</td>
                        <td className="border p-2">-</td>
                      </tr>

                      {/* KEEP ALL YOUR OTHER ROWS HERE */}

                      <tr className="font-semibold text-white">
                        <td className="border p-2 text-right">Total</td>
                        <td className="border p-2">70</td>
                        <td className="border p-2">779</td>
                        <td className="border p-2">71</td>
                      </tr>

                      <tr>
                        <td className="border p-2">JSS Public School, Ooty</td>
                        <td className="border p-2">1</td>
                        <td className="border p-2">41</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">Vivekananda Memorial School, Ooty</td>
                        <td className="border p-2">2</td>
                        <td className="border p-2">73</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">The Blue Mountains School, Ooty</td>
                        <td className="border p-2">8</td>
                        <td className="border p-2">28</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">CSI Gell Memorial Girls Hr. Sec. School, Ooty</td>
                        <td className="border p-2">2</td>
                        <td className="border p-2">40</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">St. Hildas School, Ooty</td>
                        <td className="border p-2">1</td>
                        <td className="border p-2">1</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">Woodside School, Ooty</td>
                        <td className="border p-2">2</td>
                        <td className="border p-2">34</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">The Lawrence School, Ooty</td>
                        <td className="border p-2">2</td>
                        <td className="border p-2">28</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">JSS SLS, Ooty</td>
                        <td className="border p-2">3</td>
                        <td className="border p-2">110</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">Kaypayes, Kotagiri</td>
                        <td className="border p-2">5</td>
                        <td className="border p-2">20</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">Unique Public School, Ooty</td>
                        <td className="border p-2">1</td>
                        <td className="border p-2">21</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">Breeks All India Secondary School, Ooty</td>
                        <td className="border p-2">2</td>
                        <td className="border p-2">25</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">St. Thomas Higher Secondary School, Gudalur</td>
                        <td className="border p-2">4</td>
                        <td className="border p-2">15</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">CSI College of Engineering, Ketti</td>
                        <td className="border p-2">5</td>
                        <td className="border p-2">116</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">The Laidlaw Memorial School & Junior College, Ketti</td>
                        <td className="border p-2">2</td>
                        <td className="border p-2">46</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">Panchayat Union Middle School, Thuthurmattam</td>
                        <td className="border p-2">2</td>
                        <td className="border p-2">5</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">The Nilgiris Matriculation Higher Sec. School, Ooty</td>
                        <td className="border p-2">2</td>
                        <td className="border p-2">30</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr>
                        <td className="border p-2">Government Hr. Sec. School, Anikorai</td>
                        <td className="border p-2">6</td>
                        <td className="border p-2">20</td>
                        <td className="border p-2">-</td>
                      </tr>

                      <tr className="font-semibold text-white">
                        <td className="border p-2 text-right">Total</td>
                        <td className="border p-2">70</td>
                        <td className="border p-2">779</td>
                        <td className="border p-2">71</td>
                      </tr>

                    </tbody>
                  </table>
                </div>

                <details className="border-b border-slate-500">

  <summary className="cursor-pointer p-4 text-lg">
    2020
  </summary>

  <div className="px-4 pb-6">

    <h3 className="text-2xl font-semibold text-blue-300 mt-4">
      28-02-2020 (Total visitors : 293)
    </h3>

    <div className="overflow-x-auto mt-6">

      <table className="w-full border border-white/20 text-gray-200">

        <thead className="bg-[#1E4A73]">
          <tr>
            <th className="border border-white/20 p-2">College / Institution</th>
            <th className="border border-white/20 p-2">Faculty</th>
            <th className="border border-white/20 p-2">Student</th>
            <th className="border border-white/20 p-2">Other</th>
          </tr>
        </thead>

        <tbody className="bg-[#132F4B]/60">

          <tr>
            <td className="border p-2">Mango Education, Coimbatore</td>
            <td className="border p-2">4</td>
            <td className="border p-2">19</td>
            <td className="border p-2">-</td>
          </tr>

          <tr>
            <td className="border p-2">PSG Institute of Technology and Applied Research, Coimbatore</td>
            <td className="border p-2">2</td>
            <td className="border p-2">44</td>
            <td className="border p-2">-</td>
          </tr>

          <tr>
            <td className="border p-2">Breeks All India Secondary School, Ooty</td>
            <td className="border p-2">2</td>
            <td className="border p-2">40</td>
            <td className="border p-2">-</td>
          </tr>

          <tr>
            <td className="border p-2">CSI College, Ketti</td>
            <td className="border p-2">3</td>
            <td className="border p-2">52</td>
            <td className="border p-2">-</td>
          </tr>

          <tr>
            <td className="border p-2">Auxilium College of Arts and Science for Women, Pudukkottai</td>
            <td className="border p-2">6</td>
            <td className="border p-2">59</td>
            <td className="border p-2">-</td>
          </tr>

          <tr>
            <td className="border p-2">R&D Department of Animal Husbandry</td>
            <td className="border p-2">-</td>
            <td className="border p-2">-</td>
            <td className="border p-2">2</td>
          </tr>

          <tr>
            <td className="border p-2">Lekshmipuram College, Neyyoor</td>
            <td className="border p-2">4</td>
            <td className="border p-2">53</td>
            <td className="border p-2">-</td>
          </tr>

          <tr>
            <td className="border p-2">IISWC, Ooty</td>
            <td className="border p-2">-</td>
            <td className="border p-2">-</td>
            <td className="border p-2">2</td>
          </tr>

          <tr>
            <td className="border p-2">Others / VIPs</td>
            <td className="border p-2">-</td>
            <td className="border p-2">-</td>
            <td className="border p-2">1</td>
          </tr>

          <tr className="font-semibold text-white">
            <td className="border p-2 text-right">Total</td>
            <td className="border p-2">21</td>
            <td className="border p-2">267</td>
            <td className="border p-2">5</td>
          </tr>

        </tbody>

      </table>

    </div>

  </div>

</details>

                <details className="border-b border-slate-500 p-4">
                  <summary className="cursor-pointer">2016</summary>
                </details>

                <details className="p-4">
                  <summary className="cursor-pointer">2015</summary>
                </details>

              </div>
            </details>

</div>   {/* CLOSE Past Events container */}

</section>

<hr className="border-gray-500 mb-10" />

            {/* PUBLIC LECTURES */}
            <section className="mb-12">

              <h3 className="text-3xl text-blue-200 mb-6">
                Public Lectures
              </h3>

              <table className="w-full border border-slate-500 text-gray-200">

                <thead>
                  <tr className="bg-[#244B72]">
                    <th className="border border-slate-500 p-3">Date</th>
                    <th className="border border-slate-500 p-3">Venue</th>
                    <th className="border border-slate-500 p-3">Participants</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td className="border border-slate-500 p-2">28-02-2023</td>
                    <td className="border border-slate-500 p-2">GRAPES-3 Experiment, Ooty</td>
                    <td className="border border-slate-500 p-2">920</td>
                  </tr>

                  <tr>
                    <td className="border border-slate-500 p-2">24-05-2022</td>
                    <td className="border border-slate-500 p-2">Virtual Mode</td>
                    <td className="border border-slate-500 p-2">681</td>
                  </tr>

                  <tr>
                    <td className="border border-slate-500 p-2">17-12-2018</td>
                    <td className="border border-slate-500 p-2">HADP Auditorium, Ooty</td>
                    <td className="border border-slate-500 p-2">648</td>
                  </tr>

                  <tr>
                    <td className="border border-slate-500 p-2">18-01-2017</td>
                    <td className="border border-slate-500 p-2">Anna Stadium, Ooty</td>
                    <td className="border border-slate-500 p-2">532</td>
                  </tr>

                  <tr>
                    <td className="border border-slate-500 p-2">27-01-2016</td>
                    <td className="border border-slate-500 p-2">Anna Stadium, Ooty</td>
                    <td className="border border-slate-500 p-2">1161</td>
                  </tr>

                  <tr>
                    <td className="border border-slate-500 p-2">13-11-2014</td>
                    <td className="border border-slate-500 p-2">Anna Stadium, Ooty</td>
                    <td className="border border-slate-500 p-2">416</td>
                  </tr>

                  <tr className="bg-[#244B72] font-semibold">
                    <td className="border border-slate-500 p-2"></td>
                    <td className="border border-slate-500 p-2 text-right">Total</td>
                    <td className="border border-slate-500 p-2">3438</td>
                  </tr>

                </tbody>

              </table>

            </section>

            <hr className="border-gray-500 mb-10" />

            {/* INDUSTRIAL VISITS */}
            <section>

              <h2 className="text-4xl text-center text-blue-200 mb-8">
                Industrial Visits
              </h2>

              <div className="border border-slate-500 rounded-lg overflow-hidden">

                {[
                  "2023", "2022", "2021", "2020", "2019", "2018",
                  "2017", "2016", "2015", "2014", "2013", "2012"
                ].map((year) => (
                  <details key={year} className="border-b border-slate-500 p-4">
                    <summary className="cursor-pointer">{year}</summary>
                  </details>
                ))}

              </div>

            </section>

          </main>

        </div>
        );
}