import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { safariData, excursionsData } from "@/lib/data";
import { Plane, ShieldCheck, Clock, Users, Check, MapPin, Star } from "lucide-react";

export default function Safari(){
  return(<>
    <Header/>
    <PageHero
      title="Safari & Beyond • 90E - Tanzania Safari from Zanzibar"
      subtitle="Combine Zanzibar with Big Five Tanzania safari. Fly from ZNZ in 45min, we handle park fees, 4x4 Land Cruiser, professional guide, lodges & flights. Serengeti, Ngorongoro, Tarangire & Mikumi. ATOL protected, 4.9/5 rated."
      image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000"
      badge="Big Five • Flights from ZNZ • All Inclusive • 90E"
      cta1={{label:"View Zanzibar Tours", href:"/excursions"}}
      cta2={{label:"Request Safari Quote →", href:"/contact"}}
    />

    {/* TRUST */}
    <div className="bg-amber-50 border-b border-amber-200 text-[11px] py-3 px-6 flex flex-wrap justify-center gap-6">
      <span className="flex items-center gap-1.5"><Plane className="w-4 h-4"/> 45min Flight from ZNZ Included</span>
      <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4"/> Park Fees, Land Cruiser & Lodges Included</span>
      <span className="flex items-center gap-1.5"><Users className="w-4 h-4"/> Private Guide • Small Group</span>
      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4"/> Free Date Change • 24/7 Support</span>
    </div>

    {/* PACKAGES */}
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div><h2 className="text-3xl font-black">Best Tanzania Safari Packages from Zanzibar</h2><p className="text-sm text-slate-500 mt-2 max-w-2xl">Fly from Zanzibar, safari in Tanzania, fly back. All inclusive - we handle flights, transfers, park fees, lodges. 2 to 4 days, budget to luxury.</p></div>
        <div className="flex gap-2 text-[11px] h-fit"><span className="bg-slate-900 text-white px-4 py-2 rounded-full">All Inclusive</span><span className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full font-bold">Flights Included</span></div>
      </div>

      <div className="mt-8 grid lg:grid-cols-3 gap-6">
        {safariData.map((s,i)=>(
          <Link key={s.slug} href={`/safari/${s.slug}`} className="group relative bg-white rounded-3xl overflow-hidden border hover:shadow-2xl transition">
            {i===1&&<span className="absolute top-4 left-4 z-10 bg-amber-400 text-black text-[11px] px-3 py-1 rounded-full font-black">★ MOST POPULAR - GREAT MIGRATION</span>}
            <div className="relative h-60 overflow-hidden"><img src={s.img} alt={`${s.title} from Zanzibar`} className="h-full w-full object-cover group-hover:scale-110 transition duration-700"/><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"><p className="text-white text-[11px] flex items-center gap-1"><MapPin className="w-3 h-3"/>{s.days} • Big Five • All Inclusive</p></div></div>
            <div className="p-6">
              <h3 className="font-black text-lg leading-tight">{s.title}</h3>
              <p className="text-[12px] text-slate-500 mt-2 leading-relaxed">4x4 Land Cruiser, professional guide, park fees, lodges, meals & return flights ZNZ-Arusha-ZNZ included.</p>
              <div className="mt-4 flex justify-between items-center"><div><p className="text-[11px] text-slate-400 line-through">Was ${s.price+150}</p><p className="text-2xl font-black">${s.price}</p><p className="text-[10px] text-slate-500">per person</p></div><span className="bg-green-700 text-white text-xs px-5 py-2.5 rounded-full group-hover:bg-green-800">Explore →</span></div>
            </div>
          </Link>
        ))}
      </div>

      {/* CUSTOM CTA */}
      <div className="mt-10 bg-[#0a4d25] rounded-[2rem] p-8 lg:p-10 text-white grid lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2"><h3 className="text-2xl font-black">Need a Custom Safari? 2-7 Days?</h3><p className="text-sm opacity-80 mt-2 leading-relaxed">Tell us budget, days, lodge style (budget/mid/luxury), parks you want (Serengeti, Ngorongoro, Tarangire, Lake Manyara, Mikumi). We craft itinerary + quote in 2 hours on WhatsApp.</p><div className="mt-4 flex flex-wrap gap-2 text-[11px]"><span className="bg-white/20 px-3 py-1 rounded-full">Private Land Cruiser</span><span className="bg-white/20 px-3 py-1 rounded-full">Balloon Safari Add-on</span><span className="bg-white/20 px-3 py-1 rounded-full">Honeymoon Upgrade</span></div></div>
        <div className="bg-white text-black rounded-2xl p-6"><p className="font-bold text-sm">Get Custom Quote in 2 Hours</p><Link href="/contact" className="mt-4 block bg-green-700 text-white text-center py-3 rounded-full font-bold text-sm">Request Custom Quote →</Link><a href="https://wa.me/255777123456" target="_blank" className="mt-2 block border text-center py-3 rounded-full font-bold text-sm">WhatsApp Us</a></div>
      </div>
    </div>

    {/* SEO CONTENT - RANKS FOR TANZANIA SAFARI FROM ZANZIBAR */}
    <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10 border-t">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-black">Tanzania Safari from Zanzibar - How It Works</h2>
        <p className="mt-3 text-[13px] leading-relaxed text-slate-700">
          Want to add <strong>Tanzania safari from Zanzibar</strong>? Its easy with Ninety East (90E). We operate <strong>Safari & Beyond</strong> packages combining your Zanzibar beach holiday with Big Five safari in Serengeti, Ngorongoro Crater, Tarangire and Mikumi.
        </p>
        <h3 className="mt-6 font-bold text-[14px]">How does safari from Zanzibar work?</h3>
        <ol className="mt-2 text-[13px] list-decimal ml-5 space-y-1.5 leading-relaxed">
          <li><strong>Fly ZNZ → Arusha (45min):</strong> Morning flight included in price. We handle tickets.</li>
          <li><strong>Meet private guide & 4x4 Land Cruiser:</strong> Professional English speaking guide, pop-up roof, charging ports, fridge.</li>
          <li><strong>Game drives in parks:</strong> Tarangire elephants, Serengeti Great Migration, Ngorongoro Big Five. All park fees included.</li>
          <li><strong>Lodges & meals:</strong> Budget, midrange or luxury lodges/camps. Full board.</li>
          <li><strong>Fly back to ZNZ:</strong> Last day after game drive, fly Arusha → ZNZ. Back in Zanzibar for sunset.</li>
        </ol>

        <h3 className="mt-6 font-bold text-[14px]">Which safari to choose?</h3>
        <ul className="mt-2 text-[13px] space-y-2">
          <li>• <strong>2-Day Mikumi ($450):</strong> Closest to Zanzibar, budget friendly, 45min flight. Big Five, best for short time.</li>
          <li>• <strong>3-Day Tarangire ($600):</strong> Elephants & baobabs, less crowded, good value.</li>
          <li>• <strong>4-Day Serengeti & Ngorongoro ($950):</strong> Our bestseller. Great Migration, Ngorongoro Crater, Big Five guarantee.</li>
        </ul>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <h4 className="font-bold text-sm">What&apos;s Included in Safari Price?</h4>
          <div className="mt-3 grid sm:grid-cols-2 gap-2 text-[12px]">
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> Return flights ZNZ-Arusha-ZNZ</span>
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> All park fees (Serengeti $80/day etc)</span>
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> Private 4x4 Land Cruiser & guide</span>
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> Lodges/camps + meals full board</span>
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> Water in car & airport transfers</span>
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> ATOL protected & AMREF insurance</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border rounded-3xl p-6 h-fit">
        <h3 className="font-black">Why Book Safari with Us?</h3>
        <ul className="mt-4 space-y-3 text-[12px]">
          <li>✓ <strong>Zanzibar based:</strong> We handle flights & logistics</li>
          <li>✓ <strong>All inclusive:</strong> No hidden park fees</li>
          <li>✓ <strong>Private car:</strong> Not shared group bus</li>
          <li>✓ <strong>4.9/5 rating:</strong> 500+ reviews</li>
          <li>✓ <strong>Flexible:</strong> Budget to luxury lodges</li>
          <li>✓ <strong>24/7 support:</strong> WhatsApp during safari</li>
        </ul>
        <Link href="/contact" className="mt-6 block bg-green-700 text-white text-center py-3 rounded-full font-bold text-sm">Check Availability →</Link>
      </div>
    </section>

    {/* COMBO IDEA */}
    <section className="bg-[#f7fdf7] border-y py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-black">Best Combo: Zanzibar Excursions + Safari</h2>
        <p className="text-sm text-slate-500 mt-2">7 days: 4 days beach + excursions + 3 days safari. Our most booked.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-left">
          <div className="bg-white border p-5 rounded-2xl"><p className="text-[11px] text-slate-500">DAYS 1-4 • ZANZIBAR</p><p className="font-bold text-sm mt-1">Mnemba, Safari Blue, Stone Town</p><p className="text-[12px] text-slate-600 mt-2">Stay in Paje/Nungwi, do day tours</p></div>
          <div className="bg-white border p-5 rounded-2xl"><p className="text-[11px] text-slate-500">DAYS 5-7 • SAFARI</p><p className="font-bold text-sm mt-1">Serengeti & Ngorongoro 3-Day</p><p className="text-[12px] text-slate-600 mt-2">Fly, safari, fly back</p></div>
          <div className="bg-green-700 text-white p-5 rounded-2xl"><p className="text-[11px] opacity-80">COMBO PRICE</p><p className="font-black text-xl mt-1">From $750 pp</p><p className="text-[11px] opacity-80 mt-1">Save $120 vs separate</p><Link href="/contact" className="mt-3 inline-block bg-white text-black px-4 py-2 rounded-full text-xs font-bold">Get Combo Quote →</Link></div>
        </div>
      </div>
    </section>
    <Footer/>
  </>)
}