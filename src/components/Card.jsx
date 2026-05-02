import { motion } from 'framer-motion'

function Card({ title, description, icon, className = '' }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      whileHover={{
        scale: 1.05,
        y: -10,
        boxShadow: '0 28px 88px rgba(0,0,0,0.72)',
      }}
      className={`group relative h-[420px] w-[320px] cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#9DC183]/40 to-[#2E8B57]/20 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[40%] -translate-x-[120%] skew-x-[-20deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] transition-transform duration-500 ease-in-out group-hover:translate-x-[220%]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.16),transparent_45%)]" />
      <div className="relative z-10 mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-[#2E8B57]/35 text-[#F5F5F5]">
        {icon}
      </div>
      <h3 className="relative z-10 mb-4 inline-block text-[1.08rem] font-extrabold uppercase tracking-[0.15em] text-[#F5F5F5]">
        <span className="relative">
          <span className="relative z-10 drop-shadow-[0_2px_12px_rgba(157,193,131,0.5)]">{title}</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#9DC183]/85" />
        </span>
      </h3>
      <p className="relative z-10 text-base leading-7 text-[#F5F5F5]/90">{description}</p>
    </motion.article>
  )
}

export default Card
