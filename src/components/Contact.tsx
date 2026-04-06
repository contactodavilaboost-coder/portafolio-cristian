import { motion } from 'motion/react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            ¿Listo para crear algo <span className="text-primary">increíble</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto"
          >
            Cuéntanos sobre tu proyecto. Ya sea un video para YouTube, un comercial o contenido para redes sociales, estamos aquí para ayudarte.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
