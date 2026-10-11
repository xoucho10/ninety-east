import Link from "next/link";

export default function Footer(){
  return(
    <footer className="bg-[#081a10] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Ninety East Logo" className="h-10 sm:h-12 w-auto object-contain bg-white rounded-full p-1"/>
            <div><p className="font-black text-base sm:text-lg leading-none">NINETY EAST</p><p className="text-[9px] tracking-[0.2em] opacity-70">ZANZIBAR & BEYOND • 90E</p></div>
          </div>
          <p className="text-[12px] sm:text-[13px] opacity-70 mt-4 leading-relaxed">Locally owned ZCT licensed TO/2028 since 2018. 4 dhows, 12 Zanzibari guides. Small groups max 12, 4.9/5 rated, 5% to reef conservation.</p>
          <p className="text-[11px] opacity-60 mt-3">📍 Stone Town, Zanzibar<br/>📧 hello@ninetyeastzanzibar.com<br/>📞 +255 777 123 456</p>
        </div>
        <div><p className="font-bold text-sm">Excursions</p><div className="mt-3 space-y-2 text-[12px] opacity-70"><Link href="/excursions/mnemba" className="block hover:text-white">Mnemba Snorkeling</Link><Link href="/excursions/safari-blue" className="block hover:text-white">Safari Blue</Link><Link href="/excursions/nakupenda" className="block hover:text-white">Nakupenda Sandbank</Link><Link href="/excursions" className="block hover:text-white font-bold text-white">View All 8 Tours →</Link></div></div>
        <div><p className="font-bold text-sm">Safari & Beyond</p><div className="mt-3 space-y-2 text-[12px] opacity-70"><Link href="/safari/serengeti-4day" className="block hover:text-white">4-Day Serengeti $950</Link><Link href="/safari/tarangire-3day" className="block hover:text-white">3-Day Tarangire $600</Link><Link href="/safari/mikumi-2day" className="block hover:text-white">2-Day Mikumi $450</Link><Link href="/safari" className="block hover:text-white font-bold text-white">View All Safaris →</Link></div></div>
        <div><p className="font-bold text-sm">Company</p><div className="mt-3 space-y-2 text-[12px] opacity-70"><Link href="/about" className="block hover:text-white">About 90E</Link><Link href="/reviews" className="block hover:text-white">Reviews 4.9/5 (500+)</Link><Link href="/faq" className="block hover:text-white">FAQ</Link><Link href="/contact" className="block hover:text-white">Contact & Booking</Link></div>
        <div className="mt-6 flex gap-2"><a href="https://wa.me/255777123456" target="_blank" className="bg-[#25D366] px-4 py-2 rounded-full text-xs font-bold">WhatsApp</a><Link href="/contact" className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold">Book Now</Link></div></div>
      </div>
      <div className="border-t border-white/10 max-w-7xl mx-auto px-4 sm:px-6 py-4 text-[10px] sm:text-[11px] opacity-50 flex flex-col sm:flex-row justify-between gap-2"><span>© 2026 Ninety East - Zanzibar & Beyond • ZCT TO/2028</span><span>Small Groups • Own Dhows • Pay After Tour • Free 24h Cancellation</span></div>
    </footer>
  )
}