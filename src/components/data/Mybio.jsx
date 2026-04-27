export function Mybio() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-10 mt-16">
      {/* décor gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div
        className="relative max-w-5xl w-full backdrop-blur-xl 
              bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50
              rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
        data-aos="fade-up"
      >
        {/* ligne gradient */}
        <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />

        <div className="p-6 sm:p-10 text-justify text-white">
          <h1
            className="text-4xl md:text-5xl font-bold text-center mb-8"
            data-aos="fade-right"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              À propos de moi
            </span>
          </h1>

          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            je suis{" "}
            <span className="font-semibold text-blue-400">Billy Doumbouya</span>
            , développeur full-stack spécialisé dans la conception et le
            développement d'applications web et mobiles scalables. j'accompagne
            les entreprises et les startups dans la transformation numérique et
            la création de solutions technologiques innovantes.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            fort de ma formation en sociologie et de mes expériences
            entrepreneuriales, je combine une compréhension profonde des enjeux
            métier avec des compétences techniques avancées. mon approche
            holistique garantit que chaque solution est à la fois techniquement
            robuste et centrée sur l'expérience utilisateur.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            spécialisé dans les architectures modernes (react, node.js,
            firebase, mongodb), j'ai livré plusieurs projets production incluant
            des plateformes e-commerce, des applications saas, et des solutions
            mobiles cross-platform. mes projets se distinguent par leur qualité,
            leurs performances et leur maintenabilité.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            motivé par l'excellence et l'innovation, je m'engage à transformer
            les défis complexes en solutions élégantes et impactantes.
            disponible pour des missions de consulting, développement full-stack
            ou expertise technique.
          </p>
        </div>
      </div>
    </section>
  );
}
