export default function GalleryPage() {
  return (
    <div className="pt-6 min-h-screen bg-gradient-to-b from-[#1E4A73] to-[#132F4B] text-white">

      <main className="mx-auto px-6 py-12 max-w-5xl">

        {/* PAGE TITLE */}
        <div className="w-screen bg-white/10 backdrop-blur-sm py-8 text-center relative left-1/2 right-1/2 -mx-[50vw] mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Gallery
          </h1>
        </div>

        {/* FEATURED VIDEO */}
        <section className="mb-16">
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">

            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/Xo1wlEidbw8?autoplay=1&mute=1&controls=1&loop=1&playlist=Xo1wlEidbw8"
              title="Cosmic Ray Laboratory"
              frameBorder="0"
              allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
        </section>

        {/* PICTURES TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-blue-200">
            Pictures
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-3 rounded"></div>
        </div>

        {/* WAPP / SEAP */}
        <section className="mb-12">
          <h3 className="text-3xl text-blue-300 mb-4">WAPP / SEAP</h3>

          <ul className="list-disc pl-6 space-y-2 text-blue-200">

            <li><a href="https://photos.google.com/share/AF1QipNnKP7NwRQ_vUA3YHVEdojTbbOTxCgOaHKc6qHh5olaaPf4dp4lx0Htf3RudnG14A?key=Vm1QeEVIdW9XU0Y0YmZqTFZNdjcwOHgwS3k4Smd3" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2025</a></li>

            <li><a href="https://photos.google.com/share/AF1QipPFLDteEOE4lpSXtN7ymeyc7U1709kq5Dh46IXK7xaeyRi0Nsn4OkWt_JpNh4TFTQ?key=S1lQaFpmNlBGakhYT25RbTJQNlVPR2RRRU5KYTdB" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2016</a></li>

            <li><a href="https://photos.google.com/share/AF1QipPv-1_iZ21oeJL-A7EJCLkZtdoLm6pfy5xHTpiBWX1STXBlY9-ynKkP_V8wcWD3fg?key=ZU83VWhKYWdTUjN3NU13Z0NLX0FMSkFGM1JXTXBR" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2014</a></li>

            <li><a href="https://photos.google.com/share/AF1QipO4b1S90BUjmvMJ21ucSTPd1Pq2DIqhOwoKZv9Cr4eSEjD2yIG-MsB-9nBmzUR9Xw?key=bHlkMDAxMVpEZFV3b3hrVnRIVE1Fdl83RzlZMWhB" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2012</a></li>

            <li><a href="https://photos.google.com/share/AF1QipOHcSrI1YWZK0ETI5JPGxgvT75J9gX1zVOzQm98WIoDUjtXlIfznEZhJvZRTAIrOQ?key=enA3ak9QLXpvZnlmV1ltbmtvWmRmRk9ZazFOQWVn" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2010</a></li>

            <li><a href="https://photos.google.com/share/AF1QipOIVGb6w1M1PGro8q8J6G1TWi3xGZCxN5rAD-39viilR_A93Q14-Il2dPcLVa3O0A?key=VXAzLXJuQS14X3JPMnBValJaUnhHRmg0RUZTSFdR" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2008</a></li>

            <li><a href="https://photos.google.com/share/AF1QipNA_Pi-dsX79R0iJV0MkMI1Wg9J_y8Raiz_ymO78i7XR8Za8Mm39_HlBzwE3TQ5kA?key=Q0hPMGRqaTY0MXJPQS1iejlwY0xJRFV6UHNQMXV3" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2007</a></li>

            <li><a href="https://photos.google.com/share/AF1QipOAGm2sd1_MCbr-ZljDbbOBT0n3o0OublE0x-9KkeY7DvbIdZ7RaH55skJSHO9Lgg?key=b3F5ZHRFY3ZiT091WHpXYWQ5ZXNEd2VIQzlTVFh3" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2006</a></li>

          </ul>
        </section>

        <hr className="border-gray-500 mb-10"/>

        {/* PUBLIC LECTURES */}
        <section className="mb-12">
          <h3 className="text-3xl text-blue-300 mb-4">Public Lectures</h3>

          <ul className="list-disc pl-6 space-y-2 text-blue-200">

            <li><a href="https://photos.google.com/share/AF1QipPS1GZj5HeNYjEmCyUzuijpWZHjOPL7LJuFnKl_Ao1XcTFAHSesCW_2iX83fomgSw?key=TXJibzd5ckFaOXZSQVdEcGFFRVEtSnhnUjNmTHBn" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2018</a></li>

            <li><a href="https://photos.google.com/share/AF1QipNgPQBhfBERnphhu6KpfRbpdDmr27Oo2XSIm-e33VProSpyprp6MobhQJaaeK4Dxg?key=eUJSR19hN1BhMUdfeTY4aXkxOEpZeXcxZEF0Q1hR" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2017</a></li>

            <li><a href="https://photos.google.com/share/AF1QipPvgw1Rmsp4cIkEgUUshUJBzdHxqFdlqDOXqEq5yNdjlZzZhEHR9lkJhlXTqV4OZg?key=VjVlZER3S2NacVVyU3NiTW82dndJakZadkFaQ0Z3" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2016</a></li>

            <li><a href="https://photos.google.com/share/AF1QipP6XVdlxokvZOPvHRfZSV2r9-31_SRpO8mmn4NFvKQRS8-Mqf8xwoGFIqGersN-ww?key=NTRJY0RUclRabHNwMXEwT3BYTWZqanFmRXZxYjJR" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2014</a></li>

            <li><a href="https://photos.google.com/share/AF1QipMD5bMJlzXf_BonmK8-sbP7gftSLQh0FSteJvLgBGxHNRMj8Oa3vs166hlyhgIV5A?key=TmdBenNqOHNrMDY5OFkwNFV6WWN4di1EM3pQT0RR" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2008</a></li>

          </ul>
        </section>

        <hr className="border-gray-500 mb-10"/>

        {/* NATIONAL SCIENCE DAY */}
        <section className="mb-12">
          <h3 className="text-3xl text-blue-300 mb-4">National Science Day</h3>

          <ul className="list-disc pl-6 space-y-2 text-blue-200">

            <li><a href="https://photos.google.com/share/AF1QipPgSm-oWr-V5LZColi22tt5Fp2ulovcRpyLiWQNYqEZuKxpA1WSv4NChq8upFrFJg?key=Yjc0d01IUGFXMll6R3haT3FFXzdycTZuM0g1Y05R" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2016</a></li>

            <li><a href="https://photos.google.com/share/AF1QipP19DqNqRIxCIjsHRzni3jVqnYrnivI-Xj_cnVEELbstU_wz7tvcRaLuG_7m_mc-A?key=SnJkS25nU1NnT1RNMUlNVk1hWW5mOGNWUVBobE93" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">2015</a></li>

          </ul>
        </section>

        <hr className="border-gray-500 mb-10"/>

        {/* MISCELLANEOUS */}
        <section className="mb-12">
          <h3 className="text-3xl text-blue-300 mb-4">Miscellaneous</h3>

          <ul className="list-disc pl-6 space-y-2 text-blue-200">

            <li><a href="https://photos.google.com/share/AF1QipMMvqtF6h0EAt87IbErTHEhxbwQEX9BqB5q4Jam8Sk5dchC3YKGwaenkFEl14t2OQ?key=Vk5LZDBfZ2xDN2NHV1Y2UDdSZGNubDFKQUxyRUJB" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">World Hindi Day 2020</a></li>

            <li><a href="https://photos.google.com/share/AF1QipOVgN0S56dmPrBwlEeYl_OTp4IOLwo-hRyKHOr8p_nXoRm7OBJ1LixMo4Wy2nCcCQ?key=c05FOE9QNHN5MzkwX0FOdE1HS2tScXBsRVBZWmhB" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">CORSIKA School 2010</a></li>

          </ul>
        </section>

        {/* VIDEOS */}
        <section className="mt-16">

          <h2 className="text-4xl text-center text-blue-200 mb-8">
            Videos
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-blue-200">

            <li>
              <a href="https://www.facebook.com/chaiandwhy/videos/201441914325574/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                Cosmic rays : Powerful messengers across the universe @ "Chai and Why?" on 02-02-2020
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/watch?v=QTHFX6_Ybqk" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                Cosmic Ray Laboratory, aired in DD Podhigai on 4th Dec 2014
              </a>
            </li>

          </ul>

        </section>

      </main>

    </div>
  );
}