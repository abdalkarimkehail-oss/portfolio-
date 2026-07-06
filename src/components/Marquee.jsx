const tags = ['DYNAMIC ANIMATION', 'MOTION DESIGN', 'FLUTTER', 'ASP.NET CORE', 'REACT', 'NOTION']

export default function Marquee() {
  return (
    <div className="border-y border-white/10 overflow-hidden py-5 whitespace-nowrap">
      <div className="inline-flex animate-[marquee_22s_linear_infinite]">
        {[...tags, ...tags].map((t, i) => (
          <span
            key={i}
            className="text-sm tracking-[0.14em] text-(--color-muted) px-7 uppercase"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
