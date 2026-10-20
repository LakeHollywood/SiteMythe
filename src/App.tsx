import { useState, useEffect, useRef } from 'react';

// Particle component for background effects
function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-purple-400/30"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// Navigation component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-purple-900/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <path
                d="M16 2 L8 12 L4 28 L16 22 L28 28 L24 12 Z"
                fill="none"
                stroke="url(#navGrad)"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            AZRAEL
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Origins', 'Legends', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-purple-300 transition-colors duration-300 tracking-wider uppercase"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Hero section
function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-purple-900/20 animate-pulse-glow"
        style={{ top: '10%', left: '20%', transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-indigo-900/20 animate-pulse-glow"
        style={{ bottom: '20%', right: '15%', animationDelay: '2s', transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full bg-violet-900/15 animate-pulse-glow"
        style={{ top: '50%', left: '60%', animationDelay: '3s' }}
      />

      {/* Rotating circle */}
      <div className="absolute animate-rotate-slow opacity-20">
        <svg width="500" height="500" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="200" fill="none" stroke="url(#heroGrad)" strokeWidth="0.5" strokeDasharray="5 10" />
          <circle cx="250" cy="250" r="220" fill="none" stroke="url(#heroGrad)" strokeWidth="0.3" strokeDasharray="3 15" />
          <circle cx="250" cy="250" r="240" fill="none" stroke="url(#heroGrad)" strokeWidth="0.2" strokeDasharray="2 20" />
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <div className="animate-fade-in opacity-0 mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-xs tracking-[0.3em] uppercase">
            The Angel of Death
          </span>
        </div>
        
        <h1 className="animate-fade-in-up opacity-0 delay-300 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6">
          <span className="bg-gradient-to-r from-purple-300 via-violet-200 to-indigo-300 bg-clip-text text-transparent animate-text-shimmer">
            AZRAEL
          </span>
        </h1>
        
        <p className="animate-fade-in-up opacity-0 delay-500 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          In the silence between worlds, where shadows dance with starlight, 
          Azrael awaits — the eternal guardian of the threshold between life and the infinite.
        </p>
        
        <div className="animate-fade-in-up opacity-0 delay-700 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#origins"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
          >
            Explore the Myth
          </a>
          <a
            href="#legends"
            className="px-8 py-3 rounded-full border border-purple-500/30 text-purple-300 font-medium hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Ancient Legends
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-2000">
        <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-purple-400/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// Origins section
function Origins() {
  return (
    <section id="origins" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-purple-400 text-sm tracking-[0.3em] uppercase">Chapter I</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
            The Origins
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Azrael (עזראל) — the name echoes through millennia of human consciousness. 
              In Hebrew tradition, the name means "Whom God Helps," yet across cultures, 
              this celestial being has been known as the one who gently guides souls 
              from the mortal realm into eternity.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Unlike the grim reaper of Western imagination, Azrael is depicted as a being 
              of profound compassion — an angel whose eyes hold every soul that has ever 
              lived and every soul that ever will. The Quran describes this angel as having 
              four faces, four thousand wings, and a body covered in as many eyes and tongues 
              as there are living people.
            </p>
            <p className="text-gray-400 leading-relaxed">
              In Islamic tradition, Azrael is one of the four archangels, serving as the 
              Angel of Death (Malak al-Mawt). The Talmud speaks of the Angel of Death 
              carrying a sword from which a drop of gall hangs — when the dying person 
              opens their mouth, the angel lets a drop fall, bringing peaceful departure.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative SVG angel wing */}
              <svg viewBox="0 0 400 400" className="w-full h-full animate-float">
                <defs>
                  <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                  </linearGradient>
                  <radialGradient id="glowGrad">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </radialGradient>
                </defs>
                
                {/* Glow */}
                <circle cx="200" cy="200" r="150" fill="url(#glowGrad)" />
                
                {/* Left wing */}
                <path
                  d="M200 200 Q150 150 100 100 Q80 130 90 170 Q100 200 120 220 Q150 250 200 240"
                  fill="url(#wingGrad)"
                  className="animate-wing-flap"
                />
                <path
                  d="M200 200 Q140 170 80 140 Q60 170 70 200 Q80 230 110 250 Q150 270 200 250"
                  fill="url(#wingGrad)"
                  opacity="0.6"
                  className="animate-wing-flap"
                  style={{ animationDelay: '0.5s' }}
                />
                
                {/* Right wing */}
                <path
                  d="M200 200 Q250 150 300 100 Q320 130 310 170 Q300 200 280 220 Q250 250 200 240"
                  fill="url(#wingGrad)"
                  className="animate-wing-flap"
                  style={{ animationDelay: '0.2s' }}
                />
                <path
                  d="M200 200 Q260 170 320 140 Q340 170 330 200 Q320 230 290 250 Q250 270 200 250"
                  fill="url(#wingGrad)"
                  opacity="0.6"
                  className="animate-wing-flap"
                  style={{ animationDelay: '0.7s' }}
                />
                
                {/* Central figure */}
                <circle cx="200" cy="180" r="20" fill="#7c3aed" opacity="0.8" />
                <circle cx="200" cy="180" r="30" fill="none" stroke="#a855f7" strokeWidth="0.5" opacity="0.5" />
                <circle cx="200" cy="180" r="45" fill="none" stroke="#a855f7" strokeWidth="0.3" opacity="0.3" />
                
                {/* Halo */}
                <ellipse cx="200" cy="150" rx="30" ry="8" fill="none" stroke="#c084fc" strokeWidth="1" opacity="0.6" />
                
                {/* Decorative elements */}
                <circle cx="200" cy="300" r="3" fill="#a855f7" opacity="0.5" />
                <circle cx="170" cy="310" r="2" fill="#6366f1" opacity="0.4" />
                <circle cx="230" cy="310" r="2" fill="#6366f1" opacity="0.4" />
                <line x1="200" y1="220" x2="200" y2="290" stroke="#7c3aed" strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Legends section
function Legends() {
  const legends = [
    {
      title: 'The Book of Enoch',
      description: 'In the ancient texts of Enoch, Azrael is described as the angel who holds the book of all living deeds — recording every breath of every soul that draws life from the divine.',
      icon: '📜',
    },
    {
      title: 'Persian Mythology',
      description: 'Known as Azra in Zoroastrian texts, this celestial being stands at the Chinvat Bridge, weighing the deeds of the departed against the feather of truth.',
      icon: '⚖️',
    },
    {
      title: 'Sufi Mysticism',
      description: 'In Sufi poetry, Azrael is the beloved who comes to unite the soul with its divine source — not a taker of life, but a bringer of eternal reunion.',
      icon: '🌙',
    },
    {
      title: 'Jewish Kabbalah',
      description: 'In Kabbalistic tradition, Azrael dwells in the seventh heaven, serving as one of the princes of the divine court, mediating between the infinite and the finite.',
      icon: '✡️',
    },
    {
      title: 'Hollywood Cinema',
      description: 'The 2024 film "Azrael" brings this ancient figure into modern horror cinema, reimagining the angel in a post-apocalyptic world where silence is survival.',
      icon: '🎬',
    },
    {
      title: 'Literary Legacy',
      description: 'From Milton\'s Paradise Lost to Neil Gaiman\'s Sandman, Azrael has inspired countless literary works, each adding new dimensions to this eternal figure.',
      icon: '📖',
    },
  ];

  return (
    <section id="legends" className="relative py-32 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="text-purple-400 text-sm tracking-[0.3em] uppercase">Chapter II</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
            Across the Legends
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legends.map((legend, index) => (
            <div
              key={legend.title}
              className="group relative p-6 rounded-2xl border border-purple-500/10 bg-gradient-to-b from-purple-950/20 to-transparent hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4">{legend.icon}</div>
              <h3 className="text-lg font-semibold text-purple-200 mb-3 group-hover:text-purple-100 transition-colors">
                {legend.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {legend.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery section
function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const artworks = [
    { title: 'The Descent', color: 'from-purple-900 to-indigo-950', description: 'When the final breath escapes, Azrael descends through veils of reality.' },
    { title: 'Wings of Twilight', color: 'from-violet-900 to-purple-950', description: 'Four thousand wings span the space between worlds.' },
    { title: 'The Threshold', color: 'from-indigo-900 to-slate-950', description: 'At the bridge between existence and eternity, the angel waits.' },
    { title: 'Eternal Vigil', color: 'from-purple-950 to-black', description: 'Neither sleeping nor waking, Azrael watches over all creation.' },
  ];

  return (
    <section id="gallery" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-purple-400 text-sm tracking-[0.3em] uppercase">Chapter III</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
            Visions
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main artwork display */}
          <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${artworks[activeIndex].color} border border-purple-500/20`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-32 h-32 opacity-30 animate-float">
                <path
                  d="M100 30 Q70 60 50 100 Q40 130 60 150 Q80 170 100 160 Q120 170 140 150 Q160 130 150 100 Q130 60 100 30"
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="0.5"
                />
                <circle cx="100" cy="80" r="15" fill="none" stroke="#c084fc" strokeWidth="0.5" />
                <ellipse cx="100" cy="60" rx="20" ry="5" fill="none" stroke="#c084fc" strokeWidth="0.3" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">{artworks[activeIndex].title}</h3>
              <p className="text-gray-300 text-sm">{artworks[activeIndex].description}</p>
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 gap-4">
            {artworks.map((artwork, index) => (
              <button
                key={artwork.title}
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${artwork.color} border transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-purple-400/60 shadow-lg shadow-purple-500/20 scale-[0.98]'
                    : 'border-purple-500/10 hover:border-purple-500/30 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl opacity-20">
                    {['🌑', '🦋', '🌉', '👁️'][index]}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-xs text-gray-300 font-medium">{artwork.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Quote section
function QuoteSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-purple-500/20">"</span>
          <blockquote className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed italic">
            When Azrael comes to take the soul of the dying, he does so with gentleness — 
            for he knows that death is not an end, but a door to something greater.
          </blockquote>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-6xl text-purple-500/20 rotate-180">"</span>
        </div>
        <p className="mt-12 text-purple-400 text-sm tracking-wider uppercase">
          — Ancient Sufi Teaching
        </p>
      </div>
    </section>
  );
}

// Contact/Footer section
function Footer() {
  return (
    <footer id="contact" className="relative py-20 px-6 border-t border-purple-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <path
                    d="M16 2 L8 12 L4 28 L16 22 L28 28 L24 12 Z"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-purple-300">AZRAEL</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              An exploration of the Angel of Death across cultures, 
              mythologies, and the human imagination.
            </p>
          </div>
          
          <div>
            <h4 className="text-purple-300 font-semibold mb-4 text-sm tracking-wider uppercase">Explore</h4>
            <ul className="space-y-2">
              {['Origins', 'Legends', 'Gallery', 'Sources'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-purple-300 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-purple-300 font-semibold mb-4 text-sm tracking-wider uppercase">Sources</h4>
            <ul className="space-y-2">
              {['The Quran', 'The Talmud', 'Book of Enoch', 'Zoroastrian Texts'].map((item) => (
                <li key={item}>
                  <span className="text-gray-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-500/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 Azrael Project. A mythological exploration.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App component
export default function App() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0a0a0f] text-gray-100 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Particles />
      <Navigation />
      <Hero />
      <Origins />
      <QuoteSection />
      <Legends />
      <Gallery />
      <Footer />
    </div>
  );
}
