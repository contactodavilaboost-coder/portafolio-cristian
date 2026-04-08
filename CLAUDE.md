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

# Seguridad

Este proyecto debe seguir las mejores prácticas de seguridad web en todo
momento. Aplica estas reglas en cada archivo y endpoint que generes:

## 1. Rate Limiting
- Implementa rate limiting en TODOS los endpoints de la API.
- Usa un middleware de rate limiting (como express-rate-limit, @upstash/
ratelimit, o el equivalente en tu framework).
- Límites recomendados:
- API general: 100 peticiones por IP cada 15 minutos.
- Auth (login/registro): 5 intentos por IP cada 15 minutos.
- Endpoints sensibles (pagos, admin): 10 peticiones por IP cada 15 minutos.
- Devuelve un error 429 (Too Many Requests) con un mensaje claro cuando se
exceda el límite.

## 2. Variables de Entorno y Secretos
- NUNCA escribas API keys, tokens, contraseñas o secretos directamente en el
código.
- Usa SIEMPRE variables de entorno (.env) para cualquier credencial.
- Asegúrate de que .env está en el .gitignore.
- Si necesitas una API key nueva, créala como variable de entorno y
documéntala en un .env.example (sin el valor real, solo el nombre de la

variable).
- Valida al arrancar la app que todas las variables de entorno necesarias
existen. Si falta alguna, la app no debe iniciar.

## 3. Validación de Inputs (Anti-Inyección)
- Valida y sanitiza TODOS los inputs del usuario antes de procesarlos
(formularios, query params, headers, body de peticiones).
- Usa una librería de validación (como zod, joi, o yup) para definir schemas
estrictos.
- Nunca construyas queries SQL concatenando strings con input del usuario.
Usa SIEMPRE queries parametrizadas o un ORM (como Drizzle, Prisma, etc.).
- Escapa cualquier output que se renderice en HTML para prevenir XSS. Usa las
protecciones built-in de tu framework (React escapa por defecto, pero ten
cuidado con dangerouslySetInnerHTML).
- Rechaza y loguea cualquier input que no pase la validación.

## 4. Headers de Seguridad

- Configura headers de seguridad HTTP: Content-Security-Policy, X-Content-
Type-Options, X-Frame-Options, Strict-Transport-Security.

- Usa un middleware como helmet (Express) o el equivalente de tu framework.

## 5. Autenticación y Sesiones
- Usa tokens seguros (httpOnly, secure, sameSite) para cookies de sesión.
- Implementa CSRF protection en formularios.
- Las contraseñas deben hashearse con bcrypt o argon2. NUNCA almacenar en
texto plano.

## 6. Logging de Seguridad
- Loguea intentos fallidos de autenticación.
- Loguea peticiones que excedan el rate limit.
- Loguea inputs rechazados por la validación (posibles intentos de
inyección).
- NUNCA loguees datos sensibles (contraseñas, tokens, datos personales).