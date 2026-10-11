import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { excursionsData, safariData } from "@/lib/data";

export default function FAQ(){
  const groups = [
    {
      title: "Booking, Payment & Confirmation",
      questions: [
        ["Do I need to pay upfront to book Zanzibar excursions?", "No. At Ninety East you book now, pay after the tour. We send instant confirmation on WhatsApp with exact pickup time, driver name, guide name. No deposit for groups under 6 people. For groups 6+ and for safari packages we take 20% deposit to secure boat and flights. Balance you pay after tour by cash USD/TZS/Euro, card, M-Pesa or bank transfer. Receipt provided. This is why guests trust us - 500+ reviews 4.9/5."],
        ["How do I book a Zanzibar tour with Ninety East?", "3 ways: 1) WhatsApp +255 777 123 456 (fastest, reply in 5 mins 8am-6pm EAT), 2) Contact page form, 3) Email hello@ninetyeastzanzibar.com. Tell us tour name, date, hotel name, number of guests. We check availability and confirm pickup time in 5 mins."],
        ["Can I book last minute or same day?", "Yes. WhatsApp us before 6am for same day tours. We have daily departures for Mnemba, Safari Blue, Nakupenda, Stone Town, Prison Island, Sunset Dhow. Dry season June-Oct and Dec-Feb sells out - book 1 day ahead. Safari: book 2-3 days ahead due to flights."],
        ["Do you offer private tours? Private dhow price?", "Yes all 8 excursions and safari available private. Private dhow: $200 for up to 6 pax for half day, $320 for full day. Includes private guide, captain, boat, lunch. Best for honeymoon, families, small friends. WhatsApp for private quote for your dates."],
        ["Do you offer discounts for groups or kids?", "Yes. Groups 6+ get 10% off. Kids 0-3 free, 4-11 50% off, 12+ adult price. Safari kids 0-5 free if sharing, 6-11 50% off park fees. Contact us for group quote."],
      ]
    },
    {
      title: "Pickup, Meeting Point & Locations - Zanzibar",
      questions: [
        ["Do you offer hotel pickup for Zanzibar tours? How much?", "Yes we pick up from all Zanzibar hotels. Stone Town hotels free pickup. Nungwi, Kendwa $15 per person return. Paje, Jambiani, Bwejuu $15 pp. Kizimkazi, Matemwe, Kiwengwa $10 pp. Private car for family $60-80 return. Driver + guide included. We also pick from airport if you land same day."],
        ["What time is pickup and return for excursions?", "Full day tours (Mnemba, Safari Blue, Nakupenda, Spice Farm): pickup 8:00-8:30, return 16:00-16:30. Half day (Stone Town, Prison Island, Jozani): 8:30-9:00 or 14:00-14:30 pickup, 3-4 hours duration. Sunset Dhow: 16:30 pickup, 19:30 return. Exact time sent on WhatsApp evening before tour."],
        ["We stay in different hotels, can you pick us both?", "Yes we arrange 2 pickups same tour. Small extra $10 if hotels far apart. Tell us both hotel names when booking. We plan route to minimize waiting."],
        ["Where do tours depart from? Can we meet at beach?", "Mnemba departs from Muyuni Beach / Matemwe. Safari Blue from Fumba Village. Nakupenda from Stone Town. Prison Island from Stone Town port. Stone Town tour meeting at Forodhani Gardens or hotel. We give Google Maps pin. If you prefer to meet at beach to save pickup cost, possible - we send pin."],
      ]
    },
    {
      title: "What is Included, What to Bring, Food",
      questions: [
        ["What is included in Zanzibar excursion price at Ninety East?", "All our Zanzibar excursions include: Hotel pickup & drop-off (Stone Town free), licensed Zanzibari guide & dhow captain, traditional dhow or speedboat, snorkel gear (mask, snorkel, fins), life jackets, dry bag, bottled water, fruits (mango, pineapple, watermelon), seafood BBQ lunch on full day tours (octopus, lobster, prawns, fish), vegetarian/vegan/halal options available, conservation fees for Mnemba Atoll $20, Prison Island $15, Jozani $10 included - no hidden costs."],
        ["What should I bring for snorkeling tours like Mnemba and Safari Blue?", "Swimsuit, towel, reef-safe sunscreen, sunglasses, hat, camera or phone in waterproof bag, light cover up. We provide snorkel gear, water, fruits. If you have own mask bring it. If you wear glasses tell us - we have optical masks."],
        ["Do you provide snorkel gear? What quality and sizes?", "Yes sanitized masks, snorkels, fins all sizes EU 36-46, kids sizes, life jackets all sizes, dry bags. New gear bought 2025, disinfected daily. We also have kids snorkel vests and prescription masks."],
        ["Is lunch included? Vegetarian, vegan, halal?", "Yes seafood BBQ + fruits on full day tours. Includes grilled octopus, lobster, prawns, calamari, fish, rice, chapati, salad. Vegetarian: grilled veg, beans, rice, fruits. Vegan and halal available - tell us when booking. Water included. Sodas $1 extra."],
        ["Is Safari Blue worth it? What makes it special?", "Yes Safari Blue is most photographed and our #1 full day tour $60. You sail on dhow in Menai Bay Conservation Area, snorkel pristine reef, visit sandbank with crystal water, BBQ on Kwale Island, see 500-year old baobab, swim in natural lagoon with turquoise water. Includes everything. Small group max 12 vs other operators 30 people. Rated 4.9/5."],
      ]
    },
    {
      title: "Weather, Cancellation, Safety, Kids",
      questions: [
        ["What if weather is bad? Do you cancel tours?", "Safety first. Zanzibar has two rainy seasons: long rains April-May, short rains Nov. We check wind forecast daily. If sea rough, wind strong, we cancel morning of tour and offer free date change or full refund no questions. You decide. No penalty. For safety we dont go if wind over 18 knots."],
        ["What is your cancellation policy for excursions and safari?", "Excursions: Free cancellation 24 hours before tour start time. Same day cancellation 50% charge because we already booked boat and guide. No-show 100%. Safari: Free date change 7 days before departure, 20% fee 3-7 days, no refund under 3 days because flight tickets non-refundable. Weather cancellation: full refund or free reschedule always."],
        ["Are your boats safe? Are you licensed? ZCT?", "Yes. ZCT Licensed Tour Operator TO/2028, 4 insured dhows, licensed captains with 10+ years experience, life jackets for all passengers, first aid kit, VHF radio, GPS tracker, flares, anchor, daily engine check. Annual marine inspection passed by Zanzibar Maritime Authority. Max 12 guests not 30 like others. Safety briefing before departure."],
        ["Is snorkeling safe for non-swimmers and kids?", "Yes. Life jackets provided, guide holds life ring, we go to shallow calm areas 1-2m deep. Non-swimmers can stay in dhow or on sandbank and enjoy. Kids 0-3 free, 4-11 50% off, life jackets kids size, guide extra attention. Tell guide if you cannot swim - we take care."],
        ["What is best time to visit Zanzibar for excursions?", "Best: June-Oct dry, calm sea, best snorkeling visibility 20m+, dolphins active. Dec-Feb also dry, hot. Shoulder March and Nov good with less tourists. April-May long rains, some tours limited but green and cheap. Mnemba best June-Oct, Safari Blue year round, Nakupenda best low tide."],
      ]
    },
    {
      title: "Safari & Beyond from Zanzibar - Big Five",
      questions: [
        ["How does Tanzania safari from Zanzibar work? How long flight?", "Fly ZNZ to Arusha (JRO/ARK) 45-60 min morning flight included in price. We handle flight tickets. You meet private guide with 4x4 Land Cruiser pop-up roof, fridge, charging ports. Game drives in Tarangire, Serengeti, Ngorongoro, Mikumi. All park fees included ($80/day Serengeti). Lodges/camps full board. Fly back last day to ZNZ. We handle all transfers, park fees, logistics."],
        ["Which safari package is best from Zanzibar? 2, 3 or 4 days?", "2-Day Mikumi $450: closest to Zanzibar, budget friendly, Big Five, 45min flight, good for short time. 3-Day Tarangire $600: elephants, baobabs, less crowded, good value. 4-Day Serengeti & Ngorongoro $950: our bestseller, Great Migration, Ngorongoro Crater Big Five guarantee, most booked. For honeymoon we recommend 4-day with luxury lodges."],
        ["What is included in safari price? Are there hidden costs?", "Included: Return flights ZNZ-Arusha-ZNZ, all park fees (Tarangire $50, Serengeti $80/day, Ngorongoro $70), private 4x4 Land Cruiser & professional English guide, lodges/camps full board, drinking water in car, airport transfers, AMREF rescue insurance. Not included: tips $10/day guide, international flights, travel insurance, balloon safari $550 add-on, drinks in lodges. No hidden park fees."],
        ["Do I need visa for Tanzania safari if I have Zanzibar visa?", "Zanzibar visa is Tanzania visa - Zanzibar is part of Tanzania. If you have single entry Tanzania tourist visa valid 90 days, you can go to mainland and return to ZNZ on same visa within validity. If you have double entry or you exit, need new visa. We help check. Most nationalities get visa on arrival $50 or e-visa."],
        ["Can I combine Zanzibar excursions and safari in one trip?", "Yes best combo: 7 days = 4 days Zanzibar beach + Mnemba, Safari Blue, Stone Town + 3 days safari Serengeti/Ngorongoro. We offer combo discount $750 pp vs $950 separate. Or 10 days = 6 days Zanzibar + 4 days safari. We craft itinerary. Most guests book combo."],
        ["What to pack for safari from Zanzibar?", "Light clothes neutral colors, hat, sunglasses, sunscreen, binoculars, camera, power bank, light jacket for early morning game drives (cold in Ngorongoro). We provide water. Luggage: soft bag not hard suitcase. For Zanzibar extension bring swimsuit."],
      ]
    },
    {
      title: "Zanzibar General & 90E Company",
      questions: [
        ["Who is Ninety East? Are you locally owned?", "Yes locally owned Zanzibari tour operator since 2018, born in Matemwe & Stone Town, fishing families. Founded by two cousins. We own 4 dhows, 12 guides. Not foreign reseller. ZCT Licensed TO/2028. Name comes from Ninety East Ridge in Indian Ocean where our dhow stories begin. 500+ reviews 4.9/5 Google & TripAdvisor. 5% of every booking to reef & turtle conservation."],
        ["Why book with Ninety East vs other operators?", "1) Locally owned - captains born here know hidden tides, secret sandbanks. 2) Small groups max 12 not 30. 3) Own dhows - insured, licensed, maintained. 4) 4.9/5 rating 500+ reviews. 5) No upfront payment - pay after tour. 6) Free 24h cancellation. 7) Sustainable - 5% to conservation, no anchor on coral. 8) 24/7 WhatsApp support reply in 5 mins. 9) All inclusive no hidden costs."],
        ["Do you offer airport transfer and Stone Town tours?", "Yes airport transfer ZNZ airport to any hotel $30 private car up to 4 pax. Stone Town walking tour $30 half day includes Old Fort, House of Wonders, slave market, Forodhani, spice market. Can combine with Prison Island $45 combo."],
      ]
    },
  ];

  return(<>
    <Header/>
    <PageHero
      title="FAQ - Zanzibar Excursions & Tanzania Safari from Zanzibar"
      subtitle="Complete guide: booking, pickup, what is included, what to bring, weather, cancellation, safety, private tours, kids, Safari & Beyond. Answered by local Zanzibari team Stone Town. ZCT Licensed TO/2028 • 500+ reviews 4.9/5 • Reply in 5 mins on WhatsApp."
      image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000"
      badge="30+ Questions • Updated 2026 • 90E Zanzibar & Beyond"
      cta1={{label:"Contact Us", href:"/contact"}}
      cta2={{label:"WhatsApp Us →", href:"https://wa.me/255777123456"}}
    />

    <div className="max-w-7xl mx-auto px-6 py-6 text-[11px] flex gap-2 flex-wrap">
      <span className="bg-green-700 text-white px-3 py-1 rounded-full">All FAQ (30+)</span>
      <span className="bg-slate-100 px-3 py-1 rounded-full">Booking</span>
      <span className="bg-slate-100 px-3 py-1 rounded-full">Pickup</span>
      <span className="bg-slate-100 px-3 py-1 rounded-full">Included</span>
      <span className="bg-slate-100 px-3 py-1 rounded-full">Weather</span>
      <span className="bg-slate-100 px-3 py-1 rounded-full">Safari from Zanzibar</span>
    </div>

    <div className="max-w-7xl mx-auto px-6 pb-16 grid lg:grid-cols-4 gap-8">
      <div className="hidden lg:block h-fit sticky top-24 space-y-4">
        <div className="bg-slate-50 border rounded-2xl p-5">
          <h3 className="font-bold text-sm">FAQ Categories</h3>
          <div className="mt-3 space-y-2">
            {groups.map(g=><a key={g.title} href={`#${g.title.replace(/\s+/g,"-").toLowerCase()}`} className="block text-[12px] text-slate-600 hover:text-green-700">• {g.title}</a>)}
          </div>
          <div className="mt-6 bg-[#0a4d25] text-white rounded-xl p-4">
            <p className="font-bold text-sm">Still have questions?</p>
            <p className="text-[11px] opacity-80 mt-1">We reply in 5 mins 8am-6pm EAT daily on WhatsApp. Ask about pickup from Paje, private price, combo.</p>
            <a href="https://wa.me/255777123456" target="_blank" className="mt-3 block bg-white text-black text-center py-2.5 rounded-full text-xs font-bold">WhatsApp Us →</a>
            <Link href="/contact" className="mt-2 block border border-white/30 text-center py-2.5 rounded-full text-xs font-bold">Contact Form →</Link>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <p className="font-bold text-[12px]">Popular Tours</p>
          <div className="mt-3 space-y-2">
            {excursionsData.slice(0,4).map(e=><Link key={e.slug} href={`/excursions/${e.slug}`} className="flex gap-2 items-center text-[11px] hover:text-green-700"><img src={e.img} className="w-8 h-8 rounded object-cover"/>{e.title} From ${e.price}</Link>)}
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        {/* INTRO SEO */}
        <div className="bg-white border rounded-3xl p-6 lg:p-8">
          <h2 className="text-2xl font-black">Zanzibar Excursions FAQ - Everything You Need To Know Before Booking (2026 Guide)</h2>
          <p className="mt-3 text-[13px] leading-relaxed text-slate-700">
            Planning <strong>Zanzibar excursions</strong> or <strong>Tanzania safari from Zanzibar</strong>? This FAQ page is your complete 2026 guide by Ninety East (90E), locally owned ZCT licensed tour operator TO/2028 since 2018 based in Stone Town. We own our dhows, not a reseller. Small groups max 12, 500+ reviews 4.9/5, free 24h cancellation, pay after tour.
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-700">
            Here we answer 30+ most asked questions about <strong>best Zanzibar tours - Mnemba Island snorkeling, Safari Blue, Nakupenda sandbank, Stone Town tour, Prison Island, Sunset Dhow, Spice Farm, Jozani Forest</strong> and <strong>Safari & Beyond packages - Serengeti, Ngorongoro, Tarangire, Mikumi from Zanzibar</strong>.
          </p>
        </div>

        {groups.map(group=>(
          <div key={group.title} id={group.title.replace(/\s+/g,"-").toLowerCase()} className="mt-10 scroll-mt-28">
            <h2 className="text-xl font-black border-l-4 border-green-700 pl-3">{group.title}</h2>
            <div className="mt-4 space-y-3">
              {group.questions.map(([q,a])=>(
                <details key={q} className="group bg-white border rounded-2xl open:border-green-300 open:shadow-sm transition">
                  <summary className="list-none flex justify-between gap-4 p-5 cursor-pointer font-bold text-[14px] leading-tight">
                    <span>{q}</span>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-slate-100 group-open:bg-green-700 group-open:text-white flex items-center justify-center text-[12px] transition">▼</span>
                  </summary>
                  <div className="px-5 pb-5 -mt-1"><p className="text-[13px] leading-relaxed text-slate-700 bg-green-50/50 p-4 rounded-xl border border-green-100">{a}</p></div>
                </details>
              ))}
            </div>
          </div>
        ))}

        {/* BOTTOM SEO BLOCK - 800 WORDS */}
        <div className="mt-12 bg-white border rounded-3xl p-6 lg:p-8">
          <h2 className="text-xl font-black">Best Zanzibar Excursions - What To Do in Zanzibar - Ninety East 90E Guide</h2>
          <p className="mt-3 text-[13px] leading-relaxed text-slate-700">
            <strong>Zanzibar Island</strong> is more than beach. Best things to do in Zanzibar include <strong>Mnemba Atoll snorkeling and dolphin tour</strong> (full day $45, bestseller, dolphins at sunrise, pristine reef, sandbank BBQ), <strong>Safari Blue</strong> (full day $60, most photographed, Menai Bay Conservation, Kwale Island BBQ, baobab, lagoon), <strong>Nakupenda sandbank picnic</strong> ($40, disappearing sandbank in open ocean, crystal water, Instagram spot), <strong>Stone Town cultural walking tour</strong> ($30 half day, UNESCO heritage, slave market, Forodhani), <strong>Prison Island tortoise sanctuary</strong> ($35, giant tortoises, snorkeling), <strong>Sunset Dhow cruise</strong> ($50, Nungwi sunset with drinks), <strong>Spice Farm tour & cooking class</strong> ($35), <strong>Jozani Forest red colobus monkeys</strong> ($35).
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-slate-700">
            Ninety East is <strong>locally owned ZCT licensed operator TO/2028</strong> since 2018. We own 4 dhows, 12 Zanzibari guides from Matemwe & Nungwi fishing families. Small groups max 12 not 30, 4.9/5 rating 500+ reviews Google & TripAdvisor, 5% to reef & turtle conservation, free 24h cancellation, pay after tour, 24/7 WhatsApp support. We pick up from all hotels: Stone Town free, Nungwi/Kendwa $15pp, Paje/Jambiani $15pp, Kizimkazi $10pp.
          </p>
          <h3 className="mt-6 font-bold">Combine Zanzibar with Tanzania Safari - Safari & Beyond 90E</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-700">
            Combine beach holiday with Big Five safari. Fly ZNZ → Arusha 45min included. Private 4x4 Land Cruiser, professional guide, park fees, lodges, meals, return flights included. Packages: 2-Day Mikumi $450, 3-Day Tarangire $600, 4-Day Serengeti & Ngorongoro $950 bestseller Great Migration. Combo 7 days Zanzibar + 3 days safari from $750 pp save $120. ATOL protected, AMREF insurance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/excursions" className="bg-green-700 text-white px-6 py-3 rounded-full text-sm font-bold">View All Excursions →</Link>
            <Link href="/safari" className="border px-6 py-3 rounded-full text-sm font-bold">View Safari Packages →</Link>
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold">Check Availability →</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>)
}