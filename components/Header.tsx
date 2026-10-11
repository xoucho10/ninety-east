"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
export default function Header(){
  const [o,setO]=useState(false);
  const path=usePathname();
  const links=[
    {h:"/",l:"Home", icon:Home},
    {h:"/excursions",l:"Excursions"},
    {h:"/safari",l:"Safari & Beyond"},
    {h:"/about",l:"About"},
    {h:"/reviews",l:"Reviews"},
    {h:"/faq",l:"FAQ"},
    {h:"/contact",l:"Contact"},
  ];
  const isActive=(h:string)=> h==="/"? path==="/" : path.startsWith(h);
  return(
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-green-50 border-2 border-green-700 flex items-center justify-center font-black text-[8px] text-green-700 leading-none text-center">NINETY<br/>EAST<br/>90E</div>
          <div className="leading-tight"><p className="font-bold text-green-800 text-sm">NINETY EAST</p><p className="text-[10px] text-slate-500 tracking-widest">Zanzibar & Beyond • 90°E</p></div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium">
          {links.map(a=>{
            const Icon=a.icon;
            return <Link key={a.h} href={a.h} className={`px-4 py-2 rounded-full flex items-center gap-1.5 transition ${isActive(a.h)?"bg-green-700 text-white":"hover:bg-green-50 hover:text-green-700"}`}>{Icon&&<Icon className="w-4 h-4"/>}{a.l}</Link>
          })}
          <Link href="/contact" className="ml-2 bg-green-700 text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-800">Book Now</Link>
        </nav>
        <button onClick={()=>setO(!o)} className="lg:hidden p-2">{o?<X/>:<Menu/>}</button>
      </div>
      {o&&<div className="lg:hidden border-t p-4 flex flex-col gap-2 bg-white">{links.map(a=><Link key={a.h} href={a.h} onClick={()=>setO(false)} className={`px-4 py-3 rounded-full ${isActive(a.h)?"bg-green-700 text-white":"bg-slate-50"}`}>{a.l}</Link>)}<Link href="/contact" className="bg-green-700 text-white text-center py-3 rounded-full font-bold mt-2">Book Now</Link></div>}
    </header>
  )
}