import Link from "next/link";
export default function Footer(){
  return(
    <footer className="bg-[#0a4d25] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        <div><div className="w-11 h-11 rounded-full bg-white text-green-800 flex items-center justify-center font-black text-[8px] text-center">NINETY<br/>EAST</div><p className="mt-3 font-bold text-sm">Ninety East</p><p className="text-[11px] opacity-80 mt-1 leading-relaxed">Licensed ZCT tour operator since 2018. Dhow adventures, island excursions & Tanzania safaris.</p></div>
        <div><h4 className="font-bold text-sm">Tours</h4><div className="mt-3 flex flex-col gap-2 text-[12px] opacity-80"><Link href="/excursions">All Excursions</Link><Link href="/excursions/mnemba">Mnemba</Link><Link href="/excursions/safari-blue">Safari Blue</Link><Link href="/safari">Safari Packages</Link></div></div>
        <div><h4 className="font-bold text-sm">Company</h4><div className="mt-3 flex flex-col gap-2 text-[12px] opacity-80"><Link href="/about">About Us</Link><Link href="/reviews">Reviews</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div></div>
        <div><h4 className="font-bold text-sm">Contact</h4><p className="text-[12px] opacity-80 mt-3">hello@ninetyeastzanzibar.com<br/>+255 777 123 456<br/>Stone Town, Zanzibar</p><a href="https://wa.me/255777123456" className="mt-4 inline-block bg-[#25D366] px-4 py-2 rounded-full text-[12px] font-bold">WhatsApp Us</a></div>
      </div>
      <div className="bg-black/30 text-center text-[10px] py-3 opacity-60">© 2026 Ninety East • 90°E • <Link href="/privacy">Privacy</Link> • <Link href="/terms">Terms</Link></div>
    </footer>
  )
}