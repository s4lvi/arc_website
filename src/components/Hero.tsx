'use client';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
        >
          {/* Using a stock video URL - replace with actual video */}
          <source
            src="https://cdn.coverr.co/videos/coverr-aerial-view-of-farmland-1573/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-zinc-400 text-sm tracking-wide">Saginaw, Michigan</span>
          </div>
        </div>

        <h1 className="opacity-0 animate-fade-in-up animation-delay-200 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-white">The Future of</span>
          <br />
          <span className="gradient-text">Agriculture</span>
        </h1>

        <p className="opacity-0 animate-fade-in-up animation-delay-400 text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Pioneering automation research and development for farms, greenhouses, and consumer garden systems.
        </p>

        <div className="opacity-0 animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#solutions"
            className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Explore Solutions
          </a>
          <a
            href="#about"
            className="border border-zinc-700 hover:border-zinc-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-zinc-900"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-zinc-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
