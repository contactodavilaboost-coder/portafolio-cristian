import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Youtube, X } from 'lucide-react';

const projects = [
  {
    title: 'Una Ciudad Con 250.000 personas.. Y 1 solo semaforo funcionando. PUCON',
    category: 'YouTube',
    youtubeId: 'pX7OIf-zb0o',
    isShort: false,
  },
];

function YoutubeModal({ youtubeId, isShort, onClose }: { youtubeId: string; isShort: boolean; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`relative w-full mx-4 ${isShort ? 'max-w-sm' : 'max-w-4xl'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative w-full"
            style={{ paddingBottom: isShort ? '177.78%' : '56.25%' }}
          >
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full rounded-2xl"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [activeYoutube, setActiveYoutube] = useState<{ id: string; isShort: boolean } | null>(null);

  return (
    <section id="portfolio" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Trabajos <span className="text-primary">Destacados</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl text-lg"
            >
              Una selección de nuestros mejores proyectos de edición y postproducción.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="text-white border-b border-primary pb-1 hover:text-primary transition-colors inline-block w-fit"
          >
            Ver todos los proyectos
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveYoutube({ id: project.youtubeId, isShort: project.isShort })}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 ${project.isShort ? 'aspect-[9/16]' : 'aspect-video'}`}
            >
              <img
                src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                alt={project.title}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 group-hover:bg-white/20 transition-colors">
                  <Youtube className="w-6 h-6" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary text-sm font-medium mb-1">{project.category}</p>
                <h3 className="text-lg font-bold text-white leading-snug">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {activeYoutube && (
          <YoutubeModal
            youtubeId={activeYoutube.id}
            isShort={activeYoutube.isShort}
            onClose={() => setActiveYoutube(null)}
          />
        )}
      </div>
    </section>
  );
}
