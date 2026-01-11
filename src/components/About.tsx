export default function About() {
  const stats = [
    { value: '10+', label: 'Years Research' },
    { value: '50+', label: 'Patents Filed' },
    { value: '200+', label: 'Farms Served' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 mb-6">
              <span className="text-green-500 text-sm font-mono">01</span>
              <span className="text-zinc-400 text-sm tracking-wide uppercase">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Redefining Agricultural
              <span className="gradient-text"> Innovation</span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Agricultural Research Corporation (ARC) is at the forefront of agricultural technology innovation. Based in Saginaw, Michigan, we specialize in developing cutting-edge automation solutions tailored for small to medium-sized farming operations.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Our mission is to democratize agricultural technology, making sophisticated automation accessible to farmers who have traditionally been underserved by industrial-scale solutions.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">ISO 9001:2015 Certified</p>
                <p className="text-zinc-500 text-sm">Quality Management Systems</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center hover:border-green-500/30 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-sm tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  );
}
