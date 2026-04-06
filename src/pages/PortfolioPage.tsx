import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Youtube } from 'lucide-react';

const ALL_PROJECTS = [
  { title: 'El Dueño del Tiempo',   category: 'Reel',              video: '/videos/vid3.mp4' },
  { title: 'Mindset & Crecimiento', category: 'Reel',              video: '/videos/vid4.mp4' },
  { title: 'Proyecto Visual',       category: 'Motion Graphics',   video: '/videos/vid2.mp4' },
  { title: 'Reel Profesional',      category: 'Reel',              video: '/videos/vid1.mp4' },
  { title: 'Reel Dinámico',         category: 'Reel',              video: '/videos/vid5.mp4' },
  { title: 'Short Viral',           category: 'Reel',              video: '/videos/vid7.mp4' },
  { title: 'Edición Dinámica',      category: 'Reel',              video: '/videos/vid8.mp4' },
  {
    title: 'Producción Visual',
    category: 'Video de Youtube',
    youtubeId: 'Gn3vmCDk9DQ',
    youtubeUrl: 'https://youtube.com/shorts/Gn3vmCDk9DQ',
  },
  {
    title: 'Reel Cristian',
    category: 'Video de Youtube',
    youtubeId: 'C-Mv0Iv2OkY',
    youtubeUrl: 'https://youtube.com/shorts/C-Mv0Iv2OkY',
  },
];

const FILTERS = ['Todos', 'Reel', 'Motion Graphics', 'Video de Youtube'] as const;
type Filter = typeof FILTERS[number];

type Project = typeof ALL_PROJECTS[0];

function VideoCard({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isYoutube = 'youtubeId' in project && !!project.youtubeId;

  const handleMouseEnter = () => { videoRef.current?.play(); };
  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
  };

  const cardContent = (
    <>
      {!isYoutube && (project as { video?: string }).video && (
        <video
          ref={videoRef}
          src={(project as { video: string }).video}
          muted loop playsInline preload="none"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      {isYoutube && (
        <img
          src={`https://img.youtube.com/vi/${(project as { youtubeId: string }).youtubeId}/maxresdefault.jpg`}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
          {isYoutube
            ? <Youtube className="w-5 h-5" />
            : <Play fill="currentColor" className="ml-1 w-5 h-5" />
          }
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">{project.category}</p>
        <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
      </div>
    </>
  );

  if (isYoutube) {
    return (
      <motion.a
        layout
        href={(project as { youtubeUrl: string }).youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, delay: index * 0.05 }}
        className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-muted block"
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
      className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-muted"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cardContent}
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState<Filter>('Todos');

  const filtered = active === 'Todos'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === active);

  return (
    <main className="min-h-screen bg-[#050505] pt-28 pb-24">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
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

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          {FILTERS.map(f => (
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
                {f === 'Todos' ? ALL_PROJECTS.length : ALL_PROJECTS.filter(p => p.category === f).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <VideoCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}
