import { motion } from 'motion/react';
import { Scissors, Zap, MonitorPlay, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="w-6 h-6" />,
    title: 'Edición Dinámica',
    description: 'Cortes precisos, ritmo visual y retención de audiencia para YouTube, TikTok y Reels.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Motion Graphics',
    description: 'Animaciones, textos dinámicos y elementos visuales que elevan la calidad de tu contenido.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Color Grading',
    description: 'Corrección de color profesional para darle un look cinematográfico o adaptado a tu marca.'
  },
  {
    icon: <MonitorPlay className="w-6 h-6" />,
    title: 'Diseño Sonoro',
    description: 'Mezcla de audio, efectos de sonido (SFX) y musicalización para una experiencia inmersiva.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Nuestros <span className="text-primary">Servicios</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl text-lg"
          >
            Llevamos tu contenido al siguiente nivel con técnicas de edición modernas y enfocadas en resultados.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
