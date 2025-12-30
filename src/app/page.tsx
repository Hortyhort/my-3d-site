import Scene from '@/components/Scene';
import TextReveal from '@/components/TextReveal';
import Loader from '@/components/Loader';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen text-white selection:bg-pink-500 selection:text-white">
      
      {/* The Loader sits on top of everything (z-50) */}
      <Loader />
      
      <Scene />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pointer-events-none">
        <div className="text-center space-y-6 p-10">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter pointer-events-auto text-gray-300">
            IMMERSE
          </h1>
          <p className="text-xl font-light tracking-wide uppercase text-gray-500 pointer-events-auto">
            Next.js • R3F • Tailwind
          </p>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 animate-bounce text-xs uppercase tracking-widest opacity-50">
            Scroll Down
          </div>
        </div>
      </div>
      
      {/* SECTION 2: The Text Reveal */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm px-4 md:px-20 py-20">
        
        {/* We use the component here */}
        <div className="max-w-4xl">
          <TextReveal className="text-4xl md:text-7xl font-bold text-white mb-8">
            Design is not just what it looks like and feels like.
          </TextReveal>

          <TextReveal className="text-4xl md:text-7xl font-bold text-gray-400">
             Design is how it works.
          </TextReveal>
          
          <div className="mt-20 text-lg text-gray-300 max-w-xl leading-relaxed">
             <p>This text block is standard HTML, but the headers above use the &ldquo;Masked Reveal&rdquo; technique. Notice how the words slide up from invisible lines rather than just fading in.</p>
          </div>
        </div>

      </section>

    </main>
  );
}
