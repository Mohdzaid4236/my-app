import { motion, AnimatePresence } from 'framer-motion'

// Define your 6 specific assets here
const backgroundAssets = [
  {
    id: 0,
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560',
    color: '#2E8B57'
  },
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2560',
    color: '#D4A574'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2560',
    color: '#1B4D3E'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2560',
    color: '#2C1810'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560',
    color: '#4A90E2'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2560',
    color: '#7B68EE'
  },
]

function Background({ activeIndex = 0, mousePosition = { x: 0, y: 0 }, scrollProgress = 0 }) {
  
  // Calculate subtle parallax based on mouse
  // We divide by 50 to keep the movement elegant and not dizzying
  const xMove = (mousePosition.x / window.innerWidth - 0.5) * 30
  const yMove = (mousePosition.y / window.innerHeight - 0.5) * 30

  const lower = Math.floor(activeIndex)
  const upper = Math.min(Math.ceil(activeIndex), backgroundAssets.length - 1)
  const progress = activeIndex - lower

  return (
    <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden bg-black">
      {/* Lower background */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: 1,
        }}
      >
        <motion.img
          src={backgroundAssets[lower].src}
          alt="Background lower"
          className="h-full w-full object-cover"
          style={{
            x: xMove,
            y: yMove,
            scale: 1.05 + scrollProgress * 0.05,
          }}
        />
      </motion.div>

      {/* Upper background with opacity transition */}
      {upper !== lower && (
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: progress,
          }}
        >
          <motion.img
            src={backgroundAssets[upper].src}
            alt="Background upper"
            className="h-full w-full object-cover"
            style={{
              x: xMove,
              y: yMove,
              scale: 1.05 + scrollProgress * 0.05,
            }}
          />
        </motion.div>
      )}

      {/* Overlays for UI Readability */}
      
      {/* 1. The Main Gradient Tint (Syncs with the active image) */}
      <motion.div 
        className="absolute inset-0 opacity-40 transition-colors duration-1000"
        style={{ 
          backgroundColor: backgroundAssets[Math.floor(activeIndex)].color,
          mixBlendMode: 'multiply' 
        }}
      />

      {/* 2. Global Darkening Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      {/* 3. Radial Vignette (Focuses eye on the center cards) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Progress Indicators (Bottom Center) */}
      <div className="absolute bottom-10 left-1/2 z-50 flex -translate-x-1/2 gap-3">
        {backgroundAssets.map((_, idx) => (
          <motion.div
            key={idx}
            initial={false}
            animate={{
              width: Math.floor(activeIndex) === idx ? 32 : 8,
              backgroundColor: Math.floor(activeIndex) === idx ? '#9DC183' : 'rgba(255,255,255,0.3)',
            }}
            className="h-2 rounded-full transition-all duration-500"
          />
        ))}
      </div>
    </div>
  )
}

export default Background