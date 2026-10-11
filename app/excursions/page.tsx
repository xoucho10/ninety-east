import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { excursionsData } from "@/lib/data";
import { MapPin, Clock, Star, ShieldCheck, Check } from "lucide-react";

export default function Excursions(){
  return(<>
    <Header/>
    <PageHero
      title="Zanzibar Excursions & Day Tours"
      subtitle="8 handpicked experiences by Zanzibari locals. Mnemba snorkeling, Safari Blue, Nakupenda sandbank, Stone Town, Prison Island & Sunset Dhow. Small groups max 12, ZCT licensed, free 24h cancellation. Rated 4.9/5 by 500+ guests."
      image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000"
      badge="Top Rated • 8 Tours • 90E Zanzibar & Beyond"
      cta1={{label:"Chat on WhatsApp", href:"https://wa.me/255777123456"}}
      cta2={{label:"Book Now →", href:"/contact"}}
    />

    {/* SEO FILTER BAR */}
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex flex-wrap gap-2 text-[11px]">
        <span className="bg-green-700 text-white px-4 py-2 rounded-full font-bold">All Tours (8)</span>
        <span className="bg-slate-100 px-4 py-2 rounded-full">Full Day (4)</span>
        <span className="bg-slate-100 px-4 py-2 rounded-full">Half Day (4)</span>
        <span className="bg-slate-100 px-4 py-2 rounded-full">Snorkeling (5)</span>
        <span className="bg-slate-100 px-4 py-2 rounded-full">Cultural (2)</span>
        <span className="bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-full font-bold">★ Bestsellers</span>
      </div>
    </div>

    {/* GRID */}
    <div className="max-w-7xl mx-auto px-6 pb-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {excursionsData.map((e,i)=>(
        <Link key={e.slug} href={`/excursions/${e.slug}`} className="group relative rounded-2xl border overflow-hidden bg-white hover:shadow-xl transition">
          <div className="relative h-52 overflow-hidden">
            <img src={e.img} alt={`${e.title} Zanzibar - Ninety East`} className="w-full h-full object-cover group-hover:scale-110 duration-700 transition"/>
            {i===0&&<span className="absolute top-3 left-3 bg-amber-400 text-black text-[10px] px-3 py-1 rounded-full font-black shadow">★ BESTSELLER</span>}
            {i===1&&<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-black text-[10px] px-3 py-1 rounded-full font-bold">CULTURAL</span>}
            <span className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400 text-amber-400"/> 4.9</span>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-[11px] flex items-center gap-1"><MapPin className="w-3 h-3"/>{e.loc} • <Clock className="w-3 h-3 ml-1"/>{e.duration}</p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-[15px] leading-tight">{e.title} - {e.subtitle}</h3>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">Licensed ZCT guide, hotel pickup, snorkel gear, seafood lunch included. Small group max 12.</p>
            <div className="mt-3 flex justify-between items-center">
              <div><p className="text-[10px] text-slate-400 line-through">From ${e.price+15}</p><p className="text-[16px] font-black text-green-700">From ${e.price}</p></div>
              <span className="bg-slate-900 text-white text-[11px] px-4 py-1.5 rounded-full group-hover:bg-green-700 transition">View Tour →</span>
            </div>
          </div>
        </Link>
      ))}
    </div>

    {/* SEO CONTENT BLOCK - BOOSTS RANKING */}
    <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10 border-t mt-4">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-black">Best Zanzibar Excursions & Things To Do in 2026</h2>
        <p className="mt-3 text-[13px] leading-relaxed text-slate-700">
          Looking for the <strong>best Zanzibar excursions</strong>? Ninety East is a locally owned, ZCT licensed tour operator (TO/2028) based in Stone Town since 2018. We own our dhows, not a reseller. Our captains are from Matemwe & Nungwi fishing families who know Mnemba reef tides, Menai Bay sandbank timings, and hidden snorkeling spots.
        </p>
        <h3 className="mt-6 font-bold">Our Top 3 Bestsellers in Zanzibar:</h3>
        <ul className="mt-3 space-y-2 text-[13px]">
          <li><strong>1. Mnemba Island Snorkeling & Dolphin (Full Day - $45):</strong> Sunrise dolphin spotting, snorkel pristine Mnemba Atoll, sandbank BBQ. Max 12 guests.</li>
          <li><strong>2. Safari Blue - Menai Bay (Full Day - $60):</strong> Most photographed tour. Dhow sailing, snorkeling in conservation area, Kwale Island BBQ, baobab & lagoon.</li>
          <li><strong>3. Nakupenda Sandbank Picnic (Full Day - $40):</strong> Disappearing sandbank in open ocean, crystal water, seafood BBQ, Instagram spot.</li>
        </ul>
        <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5">
          <h4 className="font-bold text-sm flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-700"/> What&apos;s Included in Every Tour?</h4>
          <div className="mt-3 grid sm:grid-cols-2 gap-2 text-[12px]">
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> Hotel pickup & drop (Stone Town free)</span>
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> Licensed Zanzibari guide & captain</span>
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> Boat, snorkel gear, life jackets</span>
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> Seafood BBQ & fruits (full day)</span>
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> Conservation fees (Mnemba/Prison Island)</span>
            <span className="flex gap-1.5"><Check className="w-4 h-4 text-green-700"/> Free 24h cancellation & reschedule</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 border rounded-3xl p-6 h-fit">
        <h3 className="font-black">Why Book With Ninety East?</h3>
        <ul className="mt-4 space-y-3 text-[12px]">
          <li>✓ <strong>Locally Owned:</strong> Zanzibari, not foreign reseller</li>
          <li>✓ <strong>Small Groups:</strong> Max 12, not 30 people</li>
          <li>✓ <strong>Own Dhows:</strong> 4 insured boats, licensed captains</li>
          <li>✓ <strong>4.9/5 Rating:</strong> 500+ reviews Google/TripAdvisor</li>
          <li>✓ <strong>No Upfront Payment:</strong> Pay after tour</li>
          <li>✓ <strong>24/7 WhatsApp:</strong> Reply in 5 mins</li>
          <li>✓ <strong>Sustainable:</strong> 5% to reef & turtle conservation</li>
        </ul>
        <Link href="/contact" className="mt-6 block bg-green-700 text-white text-center py-3 rounded-full font-bold text-sm">Check Availability →</Link>
        <p className="mt-2 text-[10px] text-center text-slate-500">Instant confirmation • Free 24h cancellation</p>
      </div>
    </section>

    {/* FAQ FOR SEO SCHEMA */}
    <section className="bg-[#f7fdf7] border-y py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-black text-center">Zanzibar Excursions FAQ - Good To Know</h2>
        <div className="mt-8 space-y-3">
          {[
            ["What are the best excursions in Zanzibar?","Mnemba Island snorkeling, Safari Blue, Nakupenda sandbank, Stone Town tour, Prison Island and Sunset Dhow are top 6. Ninety East offers all with licensed guides."],
            ["How much do Zanzibar tours cost?","From $30 (Stone Town half day) to $60 (Safari Blue full day). Includes pickup, guide, gear, lunch, park fees. No hidden costs."],
            ["Do you offer hotel pickup?","Yes. Stone Town free. Nungwi/Kendwa $15pp, Paje/Jambiani $15pp, Kizimkazi $10pp. Private car available for families."],
            ["What to bring for snorkeling tours?","Swimsuit, towel, sunscreen, hat, camera. We provide snorkel gear, water, fruits. Dry bag provided."],
          ].map(([q,a])=>(
            <details key={q} className="bg-white border p-5 rounded-2xl open:border-green-200">
              <summary className="font-bold text-[14px] cursor-pointer list-none flex justify-between">{q}<span>▼</span></summary>
              <p className="mt-3 text-[12px] text-slate-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
  </>)
}