import { useLayoutEffect, useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
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
  {
    title: 'COMMUNITY BUILDING',
    description: 'Fostering connections and support networks for personal growth.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'LIFE SKILLS',
    description: 'Essential skills training for independence and success.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.8" />
      </svg>
    ),
  },
]

function HorizontalScroll() {
  const scrollAreaRef = useRef(null)
  const pinRef = useRef(null)
  const trackRef = useRef(null)
  
  // States for background control
  const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)

  // Track mouse movement
  const handleMouseMove = useCallback((e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })
  }, [])

  // Set up mouse movement tracking only
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  // GSAP horizontal scroll animation
  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return

    const CARD_WIDTH = 320
    const GAP = 16
    const STEP = CARD_WIDTH + GAP
    const CONTAINER_WIDTH = 700
    const CENTER_OFFSET = (CONTAINER_WIDTH - CARD_WIDTH) / 2

    const ctx = gsap.context(() => {

      // 👉 Start centered
      gsap.set(track, {
        x: CENTER_OFFSET
      })

      gsap.to(track, {
        x: CENTER_OFFSET - STEP * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollAreaRef.current,
          pin: pinRef.current,
          start: "top top",
          end: `+=${cards.length * 120}%`,
          scrub: 1.2,

          onUpdate: (self) => {
            const progress = self.progress
            setScrollProgress(progress)

            // 🔥 smooth fractional index (NOT floor)
            const smoothIndex = progress * (cards.length - 1)
            setActiveBackgroundIndex(smoothIndex)
          }
        }
      })

    })

    return () => ctx.revert()
  }, [])

  // Calculate mouse-reactive parallax for text elements
  const mouseXOffset = ((mousePosition.x / window.innerWidth) * 2 - 1) * 10
  const mouseYOffset = ((mousePosition.y / window.innerHeight) * 2 - 1) * 8

  return (
    <main className="relative min-h-screen overflow-x-hidden text-[#F5F5F5]">
      {/* Dynamic Background with mouse and scroll reactivity */}
      <Background 
        activeIndex={activeBackgroundIndex}
        mousePosition={mousePosition}
        scrollProgress={scrollProgress}
      />

      <section ref={scrollAreaRef} className="relative h-[400vh]">
        <div ref={pinRef} className="relative flex h-screen items-center justify-center overflow-hidden">
          {/* Animated header that reacts to mouse movement */}
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-20 p-10"
            animate={{
              x: mouseXOffset * 0.5,
              y: mouseYOffset * 0.3,
            }}
            transition={{ type: 'spring', stiffness: 40, damping: 30 }}
          >
            <motion.p 
              className="text-xs uppercase tracking-[0.45em] text-[#9DC183]"
              animate={{ opacity: 0.7 + scrollProgress * 0.3 }}
            >
              AL-QUDWAH
            </motion.p>
            <motion.h1 
              className="mt-3 text-5xl font-semibold tracking-[0.12em] text-[#F5F5F5]"
              animate={{ scale: 1 + scrollProgress * 0.05 }}
            >
              FARIS HAMMADI
            </motion.h1>
            <motion.p 
              className="mt-3 max-w-xl text-sm uppercase tracking-[0.18em] text-[#9DC183]"
              animate={{ x: mouseXOffset * 0.3 }}
            >
              Role modeling through actions, not words
            </motion.p>
          </motion.div>

          {/* Footer text that reacts to mouse */}
          <motion.div 
            className="pointer-events-none absolute inset-x-0 bottom-10 z-20 flex justify-center px-8"
            animate={{
              y: mouseYOffset * -0.5,
            }}
            transition={{ type: 'spring', stiffness: 40, damping: 30 }}
          >
            <p className="max-w-5xl rounded-2xl border border-white/20 bg-black/35 px-8 py-4 text-center text-base font-semibold tracking-[0.12em] text-[#F5F5F5] shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              Meaningful guidance for youth through mentorship, practical programs, and lived
              experiences that build character, leadership, and self-reliance.
            </p>
          </motion.div>

          {/* Horizontal scrolling cards container */}
          <div className="relative z-30 flex justify-center">
            <div className="w-[700px] overflow-hidden">
              <div
                ref={trackRef}
                className="flex items-center will-change-transform"
                style={{
                  gap: "16px",
                }}
              >
                {cards.map((card, idx) => (
                  <div
                    key={card.title}
                    className="flex-shrink-0 w-[320px]"
                  >
                    <Card
                      title={card.title}
                      description={card.description}
                      icon={card.icon}
                      className={`delay-${idx * 100}`}
                    />
                  </div>
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