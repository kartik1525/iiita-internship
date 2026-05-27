function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">

      <p className="text-blue-900 font-semibold uppercase tracking-[0.2em] mb-4">
        IIITA 2026
      </p>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>

      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        {subtitle}
      </p>

    </div>
  )
}

export default SectionTitle