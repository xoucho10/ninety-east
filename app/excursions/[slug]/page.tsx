import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { excursionsData } from "@/lib/data";
import Link from "next/link";
import { Clock, MapPin, Users, ShieldCheck, Check, Star, Calendar } from "lucide-react";

export default function Detail({params}:{params:{slug:string}}){
  const e = excursionsData.find(x=>x.slug===params.slug);
  if(!e) return <div className="p-20">Tour not found - <Link href="/excursions" className="text-green-700 underline">View all tours</Link></div>;
  const related = excursionsData.filter(x=>x.slug!==e.slug).slice(0,3);
  return(<>
    <Header/>
    <PageHero
      title={`${e.title} - ${e.subtitle}`}
      subtitle={`${e.loc} • ${e.duration} • Small group max 12 • ZCT Licensed TO/2028 • Hotel pickup, guide, boat, snorkel gear, seafood BBQ included. Rated 4.9/5. Free 24h cancellation.`}
      badge={`${e.loc} • ${e.duration} • Bestseller • 90E`}
      image={e.img}
      cta1={{label:"← All Excursions", href:"/excursions"}}
      cta2={{label:`Book From $${e.price} →`, href:"/contact"}}
    />

    <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">
      {/* MAIN */}
      <div className="lg:col-span-2">
        {/* QUICK FACTS */}
        <div className="grid grid-cols-3 gap-3">
          <div className="border rounded-2xl p-4 text-center"><Clock className="w-5 h-5 mx-auto text-green-700"/><p className="text-[11px] mt-1 text-slate-500">Duration</p><p className="font-bold text-sm">{e.duration}</p></div>
          <div className="border rounded-2xl p-4 text-center"><MapPin className="w-5 h-5 mx-auto text-green-700"/><p className="text-[11px] mt-1 text-slate-500">Location</p><p className="font-bold text-sm">{e.loc}</p></div>
          <div className="border rounded-2xl p-4 text-center"><Users className="w-5 h-5 mx-auto text-green-700"/><p className="text-[11px] mt-1 text-slate-500">Group Size</p><p className="font-bold text-sm">Max 12</p></div>
        </div>

        <h2 className="mt-8 text-2xl font-black">About {e.title} Tour - Best {e.loc} Experience in Zanzibar</h2>
        <p className="mt-3 text-[14px] leading-relaxed text-slate-700">
          Experience the best <strong>{e.title} in Zanzibar</strong> with Ninety East, locally owned ZCT licensed operator since 2018. This {e.duration.toLowerCase()} tour from {e.loc} is our {e.slug===`mnemba`?`most booked snorkeling tour`:``} {e.slug===`safari-blue`?`most photographed full day tour`:``} with small groups, Zanzibari captains, and conservation focus.
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-slate-700">
          We own our dhows, not resellers. Born in Matemwe & Stone Town, we know hidden tides and reef seasons. Includes hotel pickup, licensed guide, boat, snorkel gear, water, fruits, seafood BBQ on full day tours, and conservation fees. No hidden costs. Pay after tour.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-100 p-5 rounded-2xl">
            <h4 className="font-bold text-sm flex items-center gap-2"><Check className="w-4 h-4 text-green-700"/> Included</h4>
            <ul className="mt-3 text-[13px] space-y-1.5">
              <li>• Hotel pickup & drop-off (Stone Town free)</li>
              <li>• Licensed Zanzibari guide & dhow captain</li>
              <li>• Boat, snorkel gear, life jackets, dry bag</li>
              <li>• Water, fruits, seafood BBQ (full day)</li>
              <li>• Park/conservation fees for {e.loc}</li>
            </ul>
          </div>
          <div className="bg-slate-50 border p-5 rounded-2xl">
            <h4 className="font-bold text-sm">Good To Know</h4>
            <ul className="mt-3 text-[13px] space-y-1.5 text-slate-700">
              <li>• Free cancellation 24h before</li>
              <li>• Small group max 12, private available</li>
              <li>• Bring: swimsuit, towel, sunscreen, camera</li>
              <li>• Pickup 8am, return 4pm (full day)</li>
              <li>• Weather: free reschedule or full refund</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-black text-lg">Itinerary - What You Will Do</h3>
          <div className="mt-4 space-y-4 border-l-2 border-green-100 pl-6 relative">
            <div className="relative"><div className="absolute -left-[31px] w-3 h-3 bg-green-700 rounded-full"/><p className="font-bold text-sm">08:00 - Hotel Pickup</p><p className="text-[12px] text-slate-600">Driver & guide at your hotel. Transfer to boat departure point.</p></div>
            <div className="relative"><div className="absolute -left-[31px] w-3 h-3 bg-green-200 rounded-full border-2 border-green-700"/><p className="font-bold text-sm">09:00 - Dhow Departure & Dolphin Spotting</p><p className="text-[12px] text-slate-600">Sail to {e.loc}, spot bottlenose dolphins at sunrise (seasonal).</p></div>
            <div className="relative"><div className="absolute -left-[31px] w-3 h-3 bg-green-200 rounded-full border-2 border-green-700"/><p className="font-bold text-sm">11:00 - Snorkeling at {e.loc}</p><p className="text-[12px] text-slate-600">Snorkel pristine reef with guide. Marine life, coral, tropical fish.</p></div>
            <div className="relative"><div className="absolute -left-[31px] w-3 h-3 bg-green-200 rounded-full border-2 border-green-700"/><p className="font-bold text-sm">13:00 - Sandbank BBQ & Relax</p><p className="text-[12px] text-slate-600">Seafood BBQ on white sandbank, swimming, crystal water photos.</p></div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-black">You Might Also Like</h3>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            {related.map(r=>(
              <Link key={r.slug} href={`/excursions/${r.slug}`} className="border rounded-2xl overflow-hidden hover:shadow-md transition bg-white">
                <img src={r.img} className="h-32 w-full object-cover"/>
                <div className="p-3"><h4 className="font-bold text-[13px]">{r.title}</h4><p className="text-[11px] text-slate-500">From ${r.price}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* BOOKING BOX - STICKY - HIGH CONVERSION */}
      <div className="h-fit sticky top-24 border rounded-3xl p-6 shadow-xl bg-white">
        <div className="flex items-center gap-2"><Star className="w-4 h-4 fill-amber-400 text-amber-400"/><p className="text-[12px] font-bold">4.9/5 (500+ reviews)</p><span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full border">ZCT Licensed</span></div>
        <p className="mt-4 text-[11px] text-slate-500 line-through">Normally ${e.price+15}</p>
        <p className="text-3xl font-black">From ${e.price}</p>
        <p className="text-[11px] text-slate-500">per person • small group • all inclusive</p>

        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 text-[11px]">
          <p className="font-bold flex items-center gap-1"><Calendar className="w-4 h-4"/> Limited spots today</p>
          <p className="text-slate-600 mt-1">Dry season June-Oct sells out. Book now, pay after tour.</p>
        </div>

        <Link href="/contact" className="mt-5 block bg-green-700 hover:bg-green-800 text-white text-center py-3.5 rounded-full font-bold transition">Book This Tour →</Link>
        <a href={`https://wa.me/255777123456?text=Hi Ninety East, I want to book ${e.title} - ${e.loc} for ${e.duration}`} target="_blank" className="mt-3 block border border-green-200 text-green-800 bg-green-50 text-center py-3.5 rounded-full font-bold text-sm hover:bg-green-100 transition">💬 Chat on WhatsApp - Reply in 5 mins</a>

        <div className="mt-4 space-y-2 text-[11px] text-slate-600">
          <p className="flex gap-2"><ShieldCheck className="w-4 h-4 text-green-700"/> Free cancellation 24h</p>
          <p className="flex gap-2"><Check className="w-4 h-4 text-green-700"/> No upfront payment</p>
          <p className="flex gap-2"><Check className="w-4 h-4 text-green-700"/> Instant confirmation</p>
        </div>
      </div>
    </div>
    <Footer/>
  </>)
}