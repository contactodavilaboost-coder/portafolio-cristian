# Portafolio Cristian — CLAUDE.md

## Qué es este proyecto

Portafolio profesional de un editor de video freelance llamado Cristian. El objetivo es presentar sus servicios y trabajos para atraer clientes. El sitio está en español.

## Stack tecnológico

- **React 19** con TypeScript
- **Vite 6** como bundler
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — sintaxis nueva con `@theme` en CSS, sin `tailwind.config.js`
- **Motion** (`motion/react`) para animaciones
- **Lucide React** para íconos

## Estructura del proyecto

```
src/
  App.tsx              # Layout principal: Navbar → Hero → Services → Portfolio → Contact → Footer
  main.tsx             # Entry point
  index.css            # Variables de tema (@theme) y estilos base
  components/
    Navbar.tsx
    Hero.tsx           # Sección principal con CTA
    Services.tsx       # 4 servicios: Edición Dinámica, Motion Graphics, Color Grading, Diseño Sonoro
    Portfolio.tsx      # Grid de 6 trabajos con imágenes (actualmente placeholders de Unsplash)
    Contact.tsx        # CTA con botones de Email y WhatsApp
    Footer.tsx
```

## Colores y tipografía (index.css)

| Variable | Valor |
|----------|-------|
| `--color-background` | `#0a0a0a` |
| `--color-foreground` | `#ffffff` |
| `--color-primary` | `#3b82f6` (azul) |
| `--color-muted-foreground` | `#a3a3a3` |
| `--font-sans` | Inter |
| `--font-display` | Outfit (headings) |

## Cómo correr el proyecto

```bash
npm run dev      # Corre en http://localhost:3000
npm run build    # Build de producción
npm run lint     # Type-check con tsc --noEmit
```

## Assets locales

Hay varios videos `.mp4` en la raíz del proyecto que son trabajos reales de Cristian. Aún no están integrados en el portafolio (Portfolio.tsx usa imágenes de Unsplash como placeholders).

También hay `Cristian.png` — foto del editor, no usada aún.

## Pendientes / contexto importante

- El Portfolio usa imágenes placeholder de Unsplash; eventualmente se reemplazarán con los videos/thumbnails reales de Cristian
- El botón de WhatsApp en Contact.tsx apunta a `href="#"` — falta el número real
- El email en Contact.tsx es `hola@studioedit.com` — placeholder, falta el email real de Cristian
- El `<title>` en index.html dice "My Google AI Studio App" — debe cambiarse al nombre real
- No hay formulario de contacto, solo links directos a email y WhatsApp
