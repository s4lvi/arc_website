import Image from 'next/image';

export default function Solutions() {
  const solutions = [
    {
      id: '02',
      title: 'Farm Automation',
      subtitle: 'Small to Medium Scale Operations',
      description: 'Intelligent automation systems designed specifically for small to medium-sized farms. Our solutions integrate seamlessly with existing infrastructure, providing precision agriculture capabilities that were once reserved for large industrial operations.',
      features: [
        'Autonomous irrigation systems',
        'Crop monitoring & analytics',
        'Precision planting technology',
        'Harvest optimization tools',
      ],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80',
    },
    {
      id: '03',
      title: 'Greenhouse Technology',
      subtitle: 'Climate-Controlled Growing',
      description: 'Advanced climate control and monitoring systems for greenhouse operations. Our technology maintains optimal growing conditions while minimizing energy consumption and labor requirements.',
      features: [
        'Automated climate control',
        'Nutrient management systems',
        'Growth cycle optimization',
        'Energy efficiency monitoring',
      ],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
    },
    {
      id: '04',
      title: 'Consumer Gardens',
      subtitle: 'Smart Home Growing Systems',
      description: 'Bringing professional-grade automation to home gardens. Our consumer products make sustainable gardening accessible to everyone, regardless of experience or available space.',
      features: [
        'App-controlled growing systems',
        'Automated watering & feeding',
        'Indoor & outdoor solutions',
        'Seasonal growing guidance',
      ],
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80',
    },
  ];

  return (
    <section id="solutions" className="relative">
      {solutions.map((solution, index) => (
        <div
          key={solution.id}
          className="relative min-h-screen flex items-center py-32"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="section-overlay" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-2 mb-6">
                  <span className="text-green-500 text-sm font-mono">{solution.id}</span>
                  <span className="text-zinc-400 text-sm tracking-wide uppercase">{solution.subtitle}</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {solution.title}
                </h2>

                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  {solution.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Empty column for layout balance */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
