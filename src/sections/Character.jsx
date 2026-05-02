function Character() {
  return (
    <section className="relative h-screen w-screen shrink-0 px-14 py-16">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(13,21,24,0.56),rgba(8,18,12,0.28),rgba(16,37,31,0.52))]" />
      <div className="relative z-10 mt-8 max-w-[520px]">
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-[#9dc183]">01</p>
        <h2 className="text-5xl font-semibold uppercase tracking-[0.12em] text-white">Character Lab</h2>
        <p className="mt-4 text-lg leading-8 text-[#e2e8f0]">
          Structured growth sprints where discipline, focus, and faith habits are trained through
          practical weekly systems.
        </p>
      </div>
    </section>
  )
}

export default Character
