import Link from "next/link";
type Props = { title:string; subtitle:string; badge?:string; image:string; cta1?:{label:string; href:string}; cta2?:{label:string; href:string} }
export default function PageHero({title, subtitle, badge="ZCT Licensed • Since 2018 • 90E", image, cta1, cta2}:Props){
  return(
    <section className="relative h-[420px] lg:h-[480px] w-full overflow-hidden">
      <img src={image} className="absolute inset-0 w-full h-full object-cover" alt={title}/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"/>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <span className="bg-white/20 backdrop-blur border border-white/20 text-white text-[11px] px-4 py-1.5 rounded-full w-fit tracking-wide">{badge}</span>
        <h1 className="mt-4 text-4xl lg:text-6xl font-black text-white leading-[0.9] max-w-3xl drop-shadow-lg">{title}</h1>
        <p className="mt-4 text-white/90 max-w-xl text-[14px] lg:text-[15px] leading-relaxed">{subtitle}</p>
        {(cta1||cta2)&&<div className="mt-6 flex gap-3">{cta1&&<Link href={cta1.href} className="bg-white text-black px-7 py-3 rounded-full text-sm font-bold hover:bg-slate-100">{cta1.label}</Link>}{cta2&&<Link href={cta2.href} className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full text-sm font-bold">{cta2.label}</Link>}</div>}
      </div>
    </section>
  )
}