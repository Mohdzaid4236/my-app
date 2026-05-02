import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative h-screen w-screen shrink-0 px-14 py-12">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(0,0,0,0.22),rgba(8,23,15,0.65))]" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="relative z-10"
      >
        <p className="text-xs uppercase tracking-[0.45em] text-[#9dc183]">AL-QUDWAH</p>
        <h1 className="mt-2 text-5xl font-semibold tracking-[0.16em] text-white">FAITH & FITNESS</h1>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[5] flex items-end justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.35 }}
          className="relative mb-18 h-[70vh] w-[24vw] min-w-[260px] rounded-[170px] border border-white/12 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(8,15,20,0.3)_30%,rgba(2,4,7,0.92)_90%)] shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
        >
          <div className="absolute left-1/2 top-[12%] h-[94px] w-[94px] -translate-x-1/2 rounded-full bg-[rgba(13,17,20,0.86)]" />
          <div className="absolute left-1/2 top-[22%] h-[57%] w-[65%] -translate-x-1/2 rounded-[46%_46%_36%_36%] bg-[rgba(11,17,19,0.88)]" />
          <div className="absolute bottom-[8%] left-1/2 h-[28%] w-[54%] -translate-x-1/2 rounded-b-[130px] rounded-t-[25px] bg-[rgba(9,14,17,0.92)]" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-10 left-14 z-20 flex max-w-[80vw] gap-8 text-[0.96rem] text-[#f1f5f9]"
      >
        <p className="max-w-[220px] leading-6">5.2K Faith Practices Completed</p>
        <p className="max-w-[220px] leading-6">350+ Mentorship Sessions Held</p>
        <p className="max-w-[220px] leading-6">Live Values: Strength & Deen</p>
      </motion.div>
    </section>
  )
}

export default Hero
