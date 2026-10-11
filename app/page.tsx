import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { excursionsData, safariData } from "@/lib/data";
import { ShieldCheck, Users, Leaf, Award, Clock, MapPin, Star, Check } from "lucide-react";

export default function Page(){
  return(
    <>
      <Header/>
      <PageHero
        title="Explore Zanzibar & Beyond"
        subtitle="Authentic dhow sailing, private sandbanks & Big Five safaris. Small groups max 12, Zanzibari captains, 5% to reef conservation. Rated 4.9/5 by 500+ guests."
        image="https://images.unsplash.com/photo-1534177616072-ef6157835bd7?q=80&w=2000"
        cta1={{label:"View Excursions", href:"/excursions"}}
        cta2={{label:"Book Your Adventure →", href:"/contact"}}
      />

      {/* TRUST BAR - HIGH ROI */}
      <div className="bg-[#0a4d25] text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-between gap-4 text-[11px] lg:text-[12px] font-medium">
          <span className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400 fill-amber-400"/> 4.9/5 on Google & TripAdvisor (500+ reviews)</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> ZCT Licensed TO/2028 • Insured Boats</span>
          <span className="flex items-center gap-2"><Users className="w-4 h-4"/> Small Groups Max 12 • Private Available</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4"/> Free Cancellation 24h • Instant Confirmation</span>
        </div>
      </div>

      {/* TOP EXCURSIONS WITH BESTSELLER BADGES */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div>
            <span className="bg-green-50 text-green-700 text-[11px] px-3 py-1 rounded-full font-bold border border-green-200">MOST BOOKED IN ZANZIBAR</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black leading-tight">Top Excursions in<br/>Zanzibar Island</h2>
            <p className="text-sm text-slate-500 mt-2 max-w-md">Handpicked by locals, not resellers. We own our dhows. Hidden reefs, secret sandbanks, authentic spice farms.</p>
          </div>
          <Link href="/excursions" className="border border-green-700 text-green-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 hover:text-white transition">View all 8 tours →</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {excursionsData.map((e,i)=>(
            <Link key={e.slug} href={`/excursions/${e.slug}`} className="group relative rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition">
              {i===0&&<span className="absolute top-3 left-3 z-10 bg-amber-400 text-black text-[10px] px-2.5 py-1 rounded-full font-black">★ BESTSELLER</span>}
              {i===3&&<span className="absolute top-3 left-3 z-10 bg-green-700 text-white text-[10px] px-2.5 py-1 rounded-full font-bold">MOST PHOTOGRAPHED</span>}
              <div className="h-48 overflow-hidden"><img src={e.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/></div>
              <div className="p-4">
                <p className="text-[10px] text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3"/>{e.loc} • {e.duration}</p>
                <h3 className="font-bold text-[15px] mt-1 leading-tight">{e.title}</h3>
                <p className="text-[11px] text-slate-600">{e.subtitle}</p>
                <div className="mt-3 flex justify-between items-center">
                  <div><p className="text-[11px] text-slate-400 line-through">From ${e.price + 15}</p><p className="text-[15px] font-black">From ${e.price}</p></div>
                  <span className="bg-slate-900 text-white text-[11px] px-3 py-1.5 rounded-full">View →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center text-[11px] text-slate-500 mt-6">✓ Hotel pickup • ✓ Licensed guide • ✓ Lunch & snorkel gear • ✓ Conservation fees included</p>
      </section>

      {/* WHY CHOOSE US - 4 PILLARS */}
      <section className="bg-[#f7fdf7] py-14 border-y">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-black">Why 500+ Guests Choose Ninety East</h2>
          <p className="text-center text-sm text-slate-500 mt-2">We are not a reseller - we are Zanzibari fishermen, born in Matemwe & Stone Town</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border p-6 rounded-2xl"><Award className="w-8 h-8 text-green-700"/><h4 className="font-bold mt-3">Local Expertise</h4><p className="text-[12px] text-slate-600 mt-1 leading-relaxed">Born & raised here. We know hidden tides, reef seasons, secret sandbanks no Google map shows. ZCT licensed TO/2028.</p></div>
            <div className="bg-white border p-6 rounded-2xl"><Users className="w-8 h-8 text-green-700"/><h4 className="font-bold mt-3">Small Groups</h4><p className="text-[12px] text-slate-600 mt-1 leading-relaxed">Max 12 guests, not 30. More space, better snorkeling, personal guide. Private dhow available for honeymoon & families.</p></div>
            <div className="bg-white border p-6 rounded-2xl"><Leaf className="w-8 h-8 text-green-700"/><h4 className="font-bold mt-3">Sustainable Travel</h4><p className="text-[12px] text-slate-600 mt-1 leading-relaxed">5% of every booking to reef & turtle conservation. No anchor on coral, reusable bottles, local community owned.</p></div>
            <div className="bg-white border p-6 rounded-2xl"><ShieldCheck className="w-8 h-8 text-green-700"/><h4 className="font-bold mt-3">Safety & Trust</h4><p className="text-[12px] text-slate-600 mt-1 leading-relaxed">Insured dhows, licensed captains, life jackets, first aid. Free 24h cancellation, weather full refund. WhatsApp 24/7.</p></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - REDUCES FRICTION */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-center text-2xl font-black">How It Works</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-6 text-center">
          <div className="border rounded-3xl p-8"><div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-black mx-auto">1</div><h4 className="font-bold mt-4">Choose & WhatsApp Us</h4><p className="text-[12px] text-slate-600 mt-1">Tell us dates, hotel & guests. We reply in 5 mins with availability & pickup time.</p></div>
          <div className="border rounded-3xl p-8"><div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-black mx-auto">2</div><h4 className="font-bold mt-4">We Pick You Up</h4><p className="text-[12px] text-slate-600 mt-1">Driver + guide at your hotel. All gear, boat, lunch, fees included. No hidden costs.</p></div>
          <div className="border rounded-3xl p-8"><div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-black mx-auto">3</div><h4 className="font-bold mt-4">Enjoy & Pay Later</h4><p className="text-[12px] text-slate-600 mt-1">Pay after tour cash/card. Free cancellation 24h before. Rated 4.9/5.</p></div>
        </div>
      </section>

      {/* SAFARI & BEYOND */}
      <section className="bg-[#0a4d25] py-14 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end"><div><h2 className="text-3xl font-black">Safari & Beyond • 90E</h2><p className="text-sm opacity-80 mt-1 max-w-md">Combine Zanzibar with Tanzania parks. Fly from ZNZ 45min, we handle everything - park fees, 4x4, lodges.</p></div><Link href="/safari" className="hidden lg:block bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold">View all safaris →</Link></div>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {safariData.map(s=>(
              <Link key={s.slug} href={`/safari/${s.slug}`} className="bg-white text-black rounded-2xl overflow-hidden hover:shadow-2xl transition group">
                <div className="relative h-56 overflow-hidden"><img src={s.img} className="h-full w-full object-cover group-hover:scale-110 transition duration-700"/><div className="absolute top-3 left-3 bg-black/70 backdrop-blur text-white px-3 py-1 rounded-full text-[10px]">{s.days} • Flights Included</div></div>
                <div className="p-5"><h3 className="font-bold text-lg">{s.title}</h3><p className="text-xs text-slate-500 mt-1">Big Five • All inclusive • Lodges</p><div className="mt-4 flex justify-between items-center"><p className="text-xl font-black">From ${s.price}</p><span className="bg-green-700 text-white text-xs px-4 py-2 rounded-full">Explore →</span></div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - SOCIAL PROOF FOR ROI */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex justify-between items-end"><h2 className="text-3xl font-black">What Guests Say • 4.9/5</h2><Link href="/reviews" className="text-sm font-bold text-green-700">All 500+ reviews →</Link></div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <div className="border p-6 rounded-2xl bg-white"><p className="text-amber-400 text-sm">★★★★★</p><p className="mt-3 text-[13px] leading-relaxed">The Sunset Dhow cruise was magical! Crew welcoming, food delicious, sunset unforgettable. Best operator in Zanzibar.</p><p className="mt-4 font-bold text-sm">— Sarah J., United Kingdom</p><p className="text-[11px] text-slate-500">Sunset Dhow • Verified Google • 2 weeks ago</p></div>
          <div className="border p-6 rounded-2xl bg-white"><p className="text-amber-400 text-sm">★★★★★</p><p className="mt-3 text-[13px] leading-relaxed">Mnemba snorkeling incredible! Saw dolphins early morning, reef pristine. Small group max 10, not crowded boat like others. Worth it.</p><p className="mt-4 font-bold text-sm">— Ahmed K., UAE</p><p className="text-[11px] text-slate-500">Mnemba • TripAdvisor • 1 week ago</p></div>
          <div className="border p-6 rounded-2xl bg-white"><p className="text-amber-400 text-sm">★★★★★</p><p className="mt-3 text-[13px] leading-relaxed">Added 4-Day Serengeti package, seamless. Flight, lodges, guide all handled. Saw Big Five in 2 days. Highly recommend combo.</p><p className="mt-4 font-bold text-sm">— Maria & Luca, Italy</p><p className="text-[11px] text-slate-500">Serengeti 4D • Google • 3 days ago</p></div>
        </div>
        <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-4 flex flex-wrap gap-4 justify-center text-[11px]">
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-700"/> Google 4.9/5 (312 reviews)</span>
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-700"/> TripAdvisor 5.0 (198 reviews)</span>
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-700"/> GetYourGuide 4.8 (87 reviews)</span>
        </div>
      </section>

      {/* FINAL CTA - URGENCY */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-slate-900 rounded-[2rem] p-8 lg:p-12 text-white relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="cta"/>
          <div className="relative z-10 max-w-2xl">
            <span className="bg-amber-400 text-black text-[11px] px-3 py-1 rounded-full font-black">LIMITED SPOTS - DRY SEASON JUNE-OCT</span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-black leading-tight">Ready to Explore Zanzibar & Beyond?</h2>
            <p className="mt-3 text-sm opacity-80 leading-relaxed">Tell us your hotel, dates & group size. We confirm pickup time in 5 mins on WhatsApp. Pay after tour. Free cancellation 24h.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="bg-white text-black px-7 py-3 rounded-full font-bold text-sm">Book Your Adventure →</Link>
              <a href="https://wa.me/255777123456" target="_blank" className="bg-[#25D366] text-white px-7 py-3 rounded-full font-bold text-sm">WhatsApp in 5 mins →</a>
            </div>
            <p className="mt-4 text-[11px] opacity-60">✓ No upfront payment • ✓ Instant confirmation • ✓ Licensed ZCT TO/2028</p>
          </div>
        </div>
      </section>

      <Footer/>
      <a href="https://wa.me/255777123456" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl font-black z-50">WA</a>
    </>
  )
}