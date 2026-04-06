import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20">

          {/* Text content */}
          <div className="max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Disponible para nuevos proyectos
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              Edición de Video <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                Nivel Premium
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              Transformo tus ideas en contenido visual de alto impacto.
              Especialista en edición dinámica, retención de audiencia y storytelling visual.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
              >
                Ver Portafolio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <PlayCircle size={18} />
                Contactar Ahora
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            {/* Pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-purple-500/30 blur-3xl"
            />

            {/* Rotating gradient ring */}
            <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                style={{ background: 'conic-gradient(from 0deg, #3b82f6, #a855f7, #06b6d4, #3b82f6)' }}
                className="absolute inset-0 rounded-full"
              />
              {/* Mask to create border effect */}
              <div className="absolute inset-[3px] rounded-full bg-[#0a0a0a]" />

              {/* Photo */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                <img
                  src="/images/cristian.png"
                  alt="Cristian — Editor de Video"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_4px_rgba(59,130,246,0.8)]" />
              </motion.div>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-2 -right-2 md:bottom-4 md:-right-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3"
            >
              <p className="text-xs text-muted-foreground mb-0.5">Proyectos completados</p>
              <p className="text-2xl font-bold text-white">50+</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  );
}
