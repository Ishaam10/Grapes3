export default function ContactPage() {
  return (
    <div className="pt-6 min-h-screen bg-gradient-to-b from-[#1E4A73] to-[#132F4B] text-white">

      <main className="mx-auto max-w-5xl px-6 py-12">

        {/* PAGE TITLE */}
        <div className="w-screen bg-white/10 backdrop-blur-sm py-8 text-center relative left-1/2 right-1/2 -mx-[50vw] mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
        </div>


{/* PRINCIPAL INVESTIGATORS */}
<h2 className="text-3xl text-blue-300 text-center mb-10 font-semibold">
Principal Investigators
</h2>

<section className="grid md:grid-cols-2 gap-8 text-blue-100 mb-16">

{/* CARD 1 */}
<div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
<h3 className="text-xl font-semibold text-blue-200 mb-3">
1. Dr. Pravata K. Mohanty
</h3>

<p>Department of High Energy Physics</p>
<p>Tata Institute of Fundamental Research</p>
<p>Homi Bhabha Road, Colaba</p>
<p>Mumbai 400005, India</p>

<div className="mt-4 space-y-2">
<p className="text-blue-300">📞 +91-22-2278-2513</p>
<p className="text-blue-400 underline">📧 pkm [@] tifr.res.in</p>
</div>
</div>


{/* CARD 2 */}
<div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
<h3 className="text-xl font-semibold text-blue-200 mb-3">
2. Dr. Mohamed Rameez
</h3>

<p>Department of High Energy Physics</p>
<p>Tata Institute of Fundamental Research</p>
<p>Homi Bhabha Road, Colaba</p>
<p>Mumbai 400005, India</p>

<div className="mt-4 space-y-2">
<p className="text-blue-300">📞 +91-22-2278-2542</p>
<p className="text-blue-400 underline">📧 mohamed.rameez [@] tifr.res.in</p>
</div>
</div>

</section>



{/* OUTREACH COORDINATOR */}
<h2 className="text-3xl text-blue-300 text-center mb-10 font-semibold">
Outreach Coordinator
</h2>

<section className="max-w-2xl mx-auto mb-16">

<div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg text-blue-100">

<h3 className="text-xl font-semibold text-blue-200 mb-3">
Dr. Hari Haran Balakrishnan
</h3>

<p>Cosmic Ray Laboratory</p>
<p>Tata Institute of Fundamental Research</p>
<p>Raj Bhavan</p>
<p>Ooty, Tamil Nadu 643001</p>

<div className="mt-4 space-y-2">
<p className="text-blue-300">📞 +91 (423) 2225060</p>
<p className="text-blue-400 underline">📧 hariharan [@] tifr.res.in</p>
</div>

</div>

</section>



{/* OFFICER IN CHARGE */}
<h2 className="text-3xl text-blue-300 text-center mb-10 font-semibold">
Officer-In-Charge
</h2>

<section className="max-w-2xl mx-auto mb-20">

<div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg text-blue-100">

<h3 className="text-xl font-semibold text-blue-200 mb-3">
Mr. Atul Jain
</h3>

<p>Cosmic Ray Laboratory</p>
<p>Tata Institute of Fundamental Research</p>
<p>Raj Bhavan</p>
<p>Ooty, Tamil Nadu 643001</p>

<div className="mt-4 space-y-2">
<p className="text-blue-300">📞 +91 (423) 2225015</p>
<p className="text-blue-400 underline">📧 ajain [@] tifr.res.in</p>
</div>

</div>

</section>

      </main>

    </div>
  );
}