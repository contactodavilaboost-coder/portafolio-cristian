import { RefObject } from 'react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24 relative bg-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div
          ref={ref as RefObject<HTMLDivElement>}
          className="max-w-4xl mx-auto bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-16 text-center"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${inView ? 'anim-fade-up' : 'opacity-0'}`}>
            ¿Listo para crear algo <span className="text-primary">increíble</span>?
          </h2>
          <p className={`text-muted-foreground text-lg mb-10 max-w-2xl mx-auto ${inView ? 'anim-fade-up anim-d1' : 'opacity-0'}`}>
            Cuéntanos sobre tu proyecto. Ya sea un video para YouTube, un comercial o contenido para redes sociales, estamos aquí para ayudarte.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${inView ? 'anim-fade-up anim-d2' : 'opacity-0'}`}>
            <a
              href="mailto:Cristianmorales120798@gmail.com"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Enviar Email
            </a>
            <a
              href="https://wa.me/584123647936"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
            >
              <MessageSquare size={18} />
              Escribir por WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
