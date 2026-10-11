import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { safariData } from "@/lib/data";
import Link from "next/link";
import { Plane, ShieldCheck, Check, Star, Calendar, Users, Clock } from "lucide-react";

export default function SD({params}:{params:{slug:string}}){
  const s=safariData.find(x=>x.slug===params.slug);
  if(!s) return <div className="p-20">Not found - <Link href="/safari" className="text-green-700 underline">View safaris</Link></div>;
  const others = safariData.filter(x=>x.slug!==s.slug);
  return(<>
    <Header/>
    <PageHero
      title={`${s.title} - Safari from Zanzibar`}
      subtitle={`${s.days} • Big Five Tanzania safari from Zanzibar • Return flights ZNZ-Arusha-ZNZ, private 4x4 Land Cruiser, professional guide, all park fees, lodges & meals included. ATOL protected. Rated 4.9/5. ${s.days} package.`}
      badge={`${s.days} • Big Five • Flights from ZNZ • 90E`}
      image={s.img}
      cta1={{label:"← All Safaris", href:"/safari"}}
      cta2={{label:`Request Quote $${s.price} →`, href:"/contact"}}
    />

    <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <div className="grid grid-cols-3 gap-3">
          <div className="border rounded-2xl p-4 text-center"><Clock className="w-5 h-5 mx-auto text-green-700"/><p className="text-[11px] mt-1 text-slate-500">Duration</p><p className="font-bold text-sm">{s.days}</p></div>
          <div className="border rounded-2xl p-4 text-center"><Plane className="w-5 h-5 mx-auto text-green-700"/><p className="text-[11px] mt-1 text-slate-500">Flight</p><p className="font-bold text-sm">ZNZ ↔ ARK</p></div>
          <div className="border rounded-2xl p-4 text-center"><Users className="w-5 h-5 mx-auto text-green-700"/><p className="text-[11px] mt-1 text-slate-500">Vehicle</p><p className="font-bold text-sm">Private 4x4</p></div>
        </div>

        <h2 className="mt-8 text-2xl font-black">{s.title} - Overview & Itinerary</h2>
        <p className="mt-3 text-[14px] leading-relaxed text-slate-700">
          This {s.days.toLowerCase()} <strong>{s.title} from Zanzibar</strong> is perfect for beach + safari combo. You fly from Zanzibar to Arusha (45min morning flight included), meet your private guide with Land Cruiser, and start game drives same day. All park fees ($80/day Serengeti etc), private 4x4, lodges, meals & return flights included.
        </p>

        <div className="mt-8 bg-slate-900 text-white rounded-3xl p-6">
          <h3 className="font-bold">Day-by-Day Itinerary - {s.days}</h3>
          <div className="mt-4 space-y-4 text-[13px]">
            <div className="flex gap-3"><span className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center font-black text-[11px] shrink-0">1</span><div><p className="font-bold">Fly ZNZ → Arusha + Tarangire Game Drive</p><p className="opacity-70 text-[12px] mt-1">07:00 flight, 10:00 meet guide, full day Tarangire elephants & baobabs, overnight lodge.</p></div></div>
            <div className="flex gap-3"><span className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center font-black text-[11px] shrink-0">2</span><div><p className="font-bold">Serengeti Central - Great Migration</p><p className="opacity-70 text-[12px] mt-1">Full day Serengeti, witness wildebeest migration, lions, cheetahs. Overnight camp/lodge.</p></div></div>
            <div className="flex gap-3"><span className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center font-black text-[11px] shrink-0">3</span><div><p className="font-bold">Ngorongoro Crater + Fly back to ZNZ</p><p className="opacity-70 text-[12px] mt-1">Early crater descent - Big Five in one place. Afternoon flight to ZNZ, back for sunset.</p></div></div>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 p-5 rounded-2xl">
            <h4 className="font-bold text-sm">Included - All Inclusive</h4>
            <ul className="mt-3 text-[12px] space-y-1.5">
              <li>• Return flights ZNZ-Arusha-ZNZ</li>
              <li>• All park fees (Tarangire, Serengeti, Ngorongoro)</li>
              <li>• Private 4x4 Land Cruiser + guide</li>
              <li>• Lodges/camps full board + water</li>
              <li>• Airport transfers</li>
            </ul>
          </div>
          <div className="bg-slate-50 border p-5 rounded-2xl">
            <h4 className="font-bold text-sm">Not Included</h4>
            <ul className="mt-3 text-[12px] space-y-1.5 text-slate-600">
              <li>• International flights</li>
              <li>• Tips ($10/day guide)</li>
              <li>• Travel insurance (recommended)</li>
              <li>• Balloon safari add-on ($550)</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-black">Other Safari Packages</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {others.map(o=>(
              <Link key={o.slug} href={`/safari/${o.slug}`} className="border rounded-2xl overflow-hidden hover:shadow-md bg-white flex">
                <img src={o.img} className="w-24 h-24 object-cover"/><div className="p-3"><h4 className="font-bold text-[13px]">{o.title}</h4><p className="text-[11px] text-slate-500">{o.days}</p><p className="font-black text-sm mt-1">From ${o.price}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="h-fit sticky top-24 border rounded-3xl p-6 shadow-xl bg-white">
        <div className="flex items-center gap-2"><Star className="w-4 h-4 fill-amber-400 text-amber-400"/><p className="text-[12px] font-bold">4.9/5 • 500+ reviews</p></div>
        <p className="mt-4 text-[11px] text-slate-500 line-through">Was ${s.price+150}</p>
        <p className="text-3xl font-black">From ${s.price}</p>
        <p className="text-[11px] text-slate-500">per person • all inclusive • flights</p>
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 text-[11px]">
          <p className="font-bold flex items-center gap-1"><Calendar className="w-4 h-4"/> Dry season sells out fast</p><p className="text-slate-600 mt-1">June-Oct & Dec-Feb best. Book early, free date change.</p>
        </div>
        <Link href="/contact" className="mt-5 block bg-green-700 hover:bg-green-800 text-white text-center py-3.5 rounded-full font-bold">Request Quote →</Link>
        <a href={`https://wa.me/255777123456?text=Hi, I want quote for ${s.title} ${s.days} from Zanzibar`} target="_blank" className="mt-3 block bg-[#25D366] text-white text-center py-3.5 rounded-full font-bold text-sm">WhatsApp Quote in 2h →</a>
        <div className="mt-4 space-y-2 text-[11px] text-slate-600">
          <p className="flex gap-2"><ShieldCheck className="w-4 h-4 text-green-700"/> ATOL protected • AMREF</p>
          <p className="flex gap-2"><Check className="w-4 h-4 text-green-700"/> No hidden fees • All inclusive</p>
        </div>
      </div>
    </div>
    <Footer/>
  </>)
}