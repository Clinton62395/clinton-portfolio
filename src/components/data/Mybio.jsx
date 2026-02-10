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
            Je suis{" "}
            <span className="font-semibold text-blue-400">Billy Doumbouya</span>
            , développeur passionné spécialisé dans les applications web et
            mobile, ainsi que la création d’interfaces interactives et
            dynamiques. Mon objectif est de concevoir des solutions modernes,
            intuitives et engageantes.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Grâce à mon parcours en sociologie et à mes expériences
            entrepreneuriales, je combine créativité, stratégie et approche
            centrée utilisateur pour chaque projet.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            Motivé par les défis et l’innovation, je m’investis dans des projets
            web, mobiles et UI modernes afin de transformer les idées en
            expériences concrètes et impactantes.
          </p>
        </div>
      </div>
    </section>
  );
}
