import { useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Youtube } from 'lucide-react';

const projects = [
  {
    title: 'El Dueño del Tiempo',
    category: 'Reel',
    video: '/videos/vid3.mp4',
  },
  {
    title: 'Mindset & Crecimiento',
    category: 'Reel',
    video: '/videos/vid4.mp4',
  },
  {
    title: 'Proyecto Visual',
    category: 'Motion Graphics',
    video: '/videos/vid2.mp4',
  },
  {
    title: 'Reel Profesional',
    category: 'Reel',
    video: '/videos/vid1.mp4',
  },
  {
    title: 'Reel Dinámico',
    category: 'Video de Youtube',
    youtubeId: 'C-Mv0Iv2OkY',
    youtubeUrl: 'https://youtube.com/shorts/C-Mv0Iv2OkY',
  },
  {
    title: 'Producción Comercial',
    category: 'Video de Youtube',
    youtubeId: 'Gn3vmCDk9DQ',
    youtubeUrl: 'https://youtube.com/shorts/Gn3vmCDk9DQ',
  },
];

type Project = {
  title: string;
  category: string;
  video?: string;
  youtubeId?: string;
  youtubeUrl?: string;
};

function VideoCard({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const isYoutube = !!project.youtubeId;

  const cardContent = (
    <>
      {project.video && (
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {isYoutube && (
        <img
          src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
          {isYoutube
            ? <Youtube className="w-6 h-6" />
            : <Play fill="currentColor" className="ml-1 w-6 h-6" />
          }
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-primary text-sm font-medium mb-2">{project.category}</p>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
      </div>
    </>
  );

  if (isYoutube) {
    return (
      <motion.a
        href={project.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-muted block"
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-muted"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cardContent}
    </motion.div>
  );
}

export default function Portfolio() {
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
            <VideoCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
