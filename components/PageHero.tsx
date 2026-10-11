export default function PageHero({title,subtitle,image,badge,cta1,cta2}:{title:string,subtitle:string,image:string,badge?:string,cta1?:any,cta2?:any}){
  return(
    <div className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center overflow-hidden bg-black">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-70"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
        {badge&&<span className="inline-block bg-white/15 backdrop-blur border border-white/20 text-white text-[10px] sm:text-[11px] px-3 sm:px-4 py-1.5 rounded-full mb-4">{badge}</span>}
        <h1 className="text-white text-[28px] sm:text-[40px] lg:text-[52px] font-black leading-[1.05] max-w-3xl drop-shadow">{title}</h1>
        <p className="text-white/80 mt-3 sm:mt-4 max-w-2xl text-[13px] sm:text-[15px] leading-relaxed">{subtitle}</p>
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
          {cta1&&<a href={cta1.href} className="bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-slate-100 transition">{cta1.label}</a>}
          {cta2&&<a href={cta2.href} className="bg-[#0a4d25] sm:bg-green-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-green-800 transition">{cta2.label}</a>}
        </div>
      </div>
    </div>
  )
}