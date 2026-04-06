import { Scissors, Zap, MonitorPlay, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

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

const delays = ['anim-d1', 'anim-d2', 'anim-d3', 'anim-d4'];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group ${inView ? `anim-fade-up ${delays[index]}` : 'opacity-0'}`}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  );
}

export default function Services() {
  const { ref: headRef, inView: headInView } = useInView();

  return (
    <section id="services" className="py-24 relative bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="mb-16 md:mb-24"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${headInView ? 'anim-fade-up' : 'opacity-0'}`}>
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl text-lg ${headInView ? 'anim-fade-up anim-d1' : 'opacity-0'}`}>
            Llevamos tu contenido al siguiente nivel con técnicas de edición modernas y enfocadas en resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
