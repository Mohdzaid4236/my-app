import { motion } from 'framer-motion'
import forestVideo from '../assets/mp.mp4'

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={forestVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/30 via-transparent to-[#9DC183]/20" />

      <motion.div
        className="absolute -left-[8%] -top-[10%] h-[500px] w-[500px] rounded-full bg-[#2E8B57]/25 blur-[120px] mix-blend-soft-light"
        animate={{ x: [0, 80, -80, 0], y: [0, -80, 80, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-[10%] -right-[8%] h-[400px] w-[400px] rounded-full bg-[#9DC183]/25 blur-[120px] mix-blend-soft-light"
        animate={{ x: [0, -80, 80, 0], y: [0, 80, -80, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}

export default Background
