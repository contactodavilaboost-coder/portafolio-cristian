import { useState, useEffect, Fragment } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Youtube, X, Loader2 } from 'lucide-react';
import { useVideos, type Video } from '../hooks/useVideos';

type Project = Video;

function YoutubeModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);
  const embedUrl = `https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`;
  return (
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
        className={`relative w-full mx-4 ${project.isShort ? 'max-w-sm' : 'max-w-4xl'}`}
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
          style={{ paddingBottom: project.isShort ? '177.78%' : '56.25%' }}
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
  );
}

function VideoCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 ${project.isShort ? 'aspect-[9/16]' : 'aspect-video'}`}
    >
      <img
        src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 group-hover:bg-white/20 transition-colors">
          <Youtube className="w-5 h-5" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">{project.category}</p>
        <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const { videos, loading, error } = useVideos();
  const [active, setActive] = useState('Todos');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Genera filtros dinamicamente segun las categorias que existan en Sanity
  const categories = [...new Set(videos.map((v) => v.category))];
  const FILTERS = ['Todos', ...categories];

  const filtered = active === 'Todos'
    ? videos
    : videos.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-[#050505] pt-28 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Trabajos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Portafolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Cada proyecto es una historia. Filtra por tipo de contenido.
          </motion.p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-white/40 animate-spin" />
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Content */}
        {!loading && !error && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-14"
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active === f
                      ? 'text-black'
                      : 'text-muted-foreground bg-white/5 border border-white/10 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {active === f && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                  <span className={`relative z-10 ml-2 text-xs ${active === f ? 'text-black/50' : 'text-muted-foreground'}`}>
                    {f === 'Todos' ? videos.length : videos.filter((p) => p.category === f).length}
                  </span>
                </button>
              ))}
            </motion.div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, index) => (
                  <Fragment key={project._id}>
                    <VideoCard
                      project={project}
                      index={index}
                      onClick={() => setActiveProject(project)}
                    />
                  </Fragment>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>

      <AnimatePresence>
        {activeProject && (
          <YoutubeModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}