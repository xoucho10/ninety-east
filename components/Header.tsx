"use client";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Header(){
  const [open,setOpen]=useState(false);
  return(
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="bg-[#0a4d25] text-white text-[10px] sm:text-[11px] py-2 px-4 sm:px-6 flex justify-between items-center">
        <span className="flex items-center gap-2 truncate"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0"/> <span className="truncate">ZCT Licensed TO/2028 • 500+ reviews 4.9/5 • Free 24h Cancellation</span></span>
        <span className="hidden lg:block shrink-0 ml-4">+255 777 123 456 • hello@ninetyeastzanzibar.com</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[64px] sm:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0" onClick={()=>setOpen(false)}>
          <img src="/logo.png" alt="Ninety East Logo" className="h-8 sm:h-10 w-auto object-contain"/>
          <div className="leading-none">
            <p className="font-black text-[14px] sm:text-[16px] tracking-tight">NINETY EAST</p>
            <p className="text-[8px] sm:text-[9px] tracking-[0.2em] text-slate-500 font-bold">ZANZIBAR & BEYOND</p>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium">
          <Link href="/" className="hover:text-green-700 transition">Home</Link>
          <Link href="/excursions" className="hover:text-green-700 transition">Excursions</Link>
          <Link href="/safari" className="hover:text-green-700 transition">Safari & Beyond</Link>
          <Link href="/about" className="hover:text-green-700 transition">About</Link>
          <Link href="/reviews" className="hover:text-green-700 transition">Reviews</Link>
          <Link href="/faq" className="hover:text-green-700 transition">FAQ</Link>
          <Link href="/contact" className="hover:text-green-700 transition">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://wa.me/255777123456" target="_blank" className="hidden md:flex bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold items-center gap-1.5 hover:bg-[#20bd5a] transition"><MessageCircle className="w-4 h-4"/> WhatsApp</a>
          <Link href="/contact" className="bg-[#0a4d25] hover:bg-black text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition">Book Now</Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden border p-2 rounded-full hover:bg-slate-50 ml-1">{open? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}</button>
        </div>
      </div>
      {open&&(
        <div className="lg:hidden border-t bg-white px-4 py-5 space-y-1">
          <Link href="/" onClick={()=>setOpen(false)} className="block py-3 border-b text-sm font-medium">Home</Link>
          <Link href="/excursions" onClick={()=>setOpen(false)} className="block py-3 border-b text-sm font-medium">Excursions</Link>
          <Link href="/safari" onClick={()=>setOpen(false)} className="block py-3 border-b text-sm font-medium">Safari & Beyond</Link>
          <Link href="/about" onClick={()=>setOpen(false)} className="block py-3 border-b text-sm font-medium">About</Link>
          <Link href="/reviews" onClick={()=>setOpen(false)} className="block py-3 border-b text-sm font-medium">Reviews</Link>
          <Link href="/faq" onClick={()=>setOpen(false)} className="block py-3 border-b text-sm font-medium">FAQ</Link>
          <Link href="/contact" onClick={()=>setOpen(false)} className="block py-3 text-sm font-medium">Contact</Link>
        </div>
      )}
    </header>
  )
}