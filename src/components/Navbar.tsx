import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isPortfolio = location.pathname === '/portfolio';

  const navLinks = [
    { name: 'Inicio',      href: '/#home',      external: false },
    { name: 'Servicios',   href: '/#services',  external: false },
    { name: 'Portafolio',  href: '/portfolio',  external: false },
    { name: 'Contacto',    href: '/#contact',   external: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            <Play size={20} fill="currentColor" className="ml-1" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Studio<span className="text-primary">Edit</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/') && !link.href.startsWith('/#')
              ? <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${isPortfolio && link.name === 'Portafolio' ? 'text-white' : 'text-muted-foreground hover:text-white'}`}
                >
                  {link.name}
                </Link>
              : <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                >
                  {link.name}
                </a>
          ))}
          <a
            href="/#contact"
            className="px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors"
          >
            Hablemos
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.startsWith('/#')
                ? <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-white transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                : <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-white transition-colors py-2"
                  >
                    {link.name}
                  </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 rounded-full bg-white text-black font-medium text-center hover:bg-gray-200 transition-colors"
            >
              Hablemos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
