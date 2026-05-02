import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Background from './Background'
import Card from './Card'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    title: 'CHARACTER LAB',
    description: 'Programs and lessons focused on discipline, integrity, and self-development.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path d="M6 12.5L10 16L18 8" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '1-ON-1 GUIDANCE',
    description: 'Direct individual and group mentorship for teenagers and young adults.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <circle cx="12" cy="8" r="3.2" strokeWidth="1.8" />
        <path d="M5.8 19c1.8-2.8 4-4.2 6.2-4.2s4.4 1.4 6.2 4.2" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'CAMPING EXPERIENCE',
    description: 'Values and leadership lived in nature through real-life experiences.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path d="M4.5 18L12 6l7.5 12H4.5Z" strokeWidth="1.8" />
        <path d="M12 12v6" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'COURSES',
    description: 'Structured online courses designed to be practical, clear, and interactive.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path d="M4 8.5L12 5l8 3.5L12 12 4 8.5Z" strokeWidth="1.8" />
        <path d="M7 10v5.2c0 .9 2.4 2.3 5 2.3s5-1.4 5-2.3V10" strokeWidth="1.8" />
      </svg>
    ),
  },
]

function HorizontalScroll() {
  const scrollAreaRef = useRef(null)
  const pinRef = useRef(null)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    const scrollArea = scrollAreaRef.current
    const pin = pinRef.current
    const track = trackRef.current
    if (!scrollArea || !pin || !track) return undefined

    const context = gsap.context(() => {
      const steps = 2
      gsap.to(track, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: scrollArea,
          pin: pin,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          snap: 1 / (steps - 1),
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, scrollArea)

    return () => context.revert()
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden text-[#F5F5F5]">
      <Background />

      <section ref={scrollAreaRef} className="relative h-[200vh]">
        <div ref={pinRef} className="relative flex h-screen items-center justify-center overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-20 p-10">
            <p className="text-xs uppercase tracking-[0.45em] text-[#9DC183]">AL-QUDWAH</p>
            <h1 className="mt-3 text-5xl font-semibold tracking-[0.12em] text-[#F5F5F5]">
              FARIS HAMMADI
            </h1>
            <p className="mt-3 max-w-xl text-sm uppercase tracking-[0.18em] text-[#9DC183]">
              Role modeling through actions, not words
            </p>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-10 z-20 flex justify-center px-8">
            <p className="max-w-5xl rounded-2xl border border-white/20 bg-black/35 px-8 py-4 text-center text-base font-semibold tracking-[0.12em] text-[#F5F5F5] shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              Meaningful guidance for youth through mentorship, practical programs, and lived
              experiences that build character, leadership, and self-reliance.
            </p>
          </div>

          <div className="relative z-30 w-full max-w-[760px] overflow-hidden">
            <div ref={trackRef} className="flex w-[200%] will-change-transform">
              <div className="flex min-w-full items-center justify-center gap-12">
                {cards.slice(0, 2).map((card) => (
                  <Card key={card.title} title={card.title} description={card.description} icon={card.icon} />
                ))}
              </div>
              <div className="flex min-w-full items-center justify-center gap-12">
                {cards.slice(2, 4).map((card) => (
                  <Card key={card.title} title={card.title} description={card.description} icon={card.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HorizontalScroll
