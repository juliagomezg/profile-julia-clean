import type { Discipline, MediaItem, NavLink, ProjectGroup, Stat } from '@/types'

export const EMAIL = 'juliagomez19@gmail.com'
export const NEWSLETTER_URL = 'https://juliagomezg.beehiiv.com/'

export const navLinks: NavLink[] = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#en-curso', label: 'En curso' },
  { href: '#media', label: 'Media' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#newsletter', label: 'Newsletter' },
]

export const socialLinks: NavLink[] = [
  { href: `mailto:${EMAIL}`, label: 'Email' },
  { href: 'https://linkedin.com/in/juliagomezg', label: 'LinkedIn' },
  { href: 'https://github.com/juliagomezg', label: 'GitHub' },
  { href: 'https://instagram.com/juliagomezg', label: 'Instagram' },
]

export const stats: Stat[] = [
  { n: '6+', label: 'Productos lanzados' },
  { n: '3', label: 'Ecosistemas de cliente' },
  { n: '100+', label: 'Mentorados' },
  { n: '2.4K', label: 'Comunidad' },
]

export const disciplines: Discipline[] = [
  { num: '01', l1: 'Ecosistemas', l2: 'Digitales', text: 'Sitio + app + sistema como un solo producto con identidad coherente. No páginas sueltas — presencias completas.' },
  { num: '02', l1: 'Apps &', l2: 'Productos', text: 'De la idea al lanzamiento. Gamificación, dashboards, herramientas internas, MVPs. Lo que imagino, lo construyo.' },
  { num: '03', l1: 'Identidad', l2: '& Narrativa', text: 'Cada producto que construyo tiene una historia que contar. La creatividad no es decoración — es la estrategia.' },
  { num: '04', l1: 'Mentoría', l2: 'Tech', text: 'Acompaño a personas que entran al mundo tech. Más de 100 mentorados que hoy construyen sus propias cosas.' },
]

export const projectGroups: ProjectGroup[] = [
  {
    label: 'Productos propios',
    items: [
      { num: '01', title: 'plAIground', text: 'Simulador de carreras con IA real para adolescentes. Tres misiones — analista de fraude, moderadora de contenido, supervisora de flota robótica — donde el usuario ve en qué falla la IA y dónde su juicio importa.', meta: 'Producto propio · She Builds / Lovable', status: 'Live', href: 'https://tryplaiground.lovable.app/' },
      { num: '02', title: 'Borrador', text: 'Estudio de escritura personal para quienes quieren escribir su primera historia y siempre abandonan. Notas, capítulos, grabaciones de voz, auto-guardado y revisión de amigos — todo en un solo cuaderno digital que no te juzga.', meta: 'Producto propio · En construcción', status: 'En desarrollo' },
      { num: '03', title: 'Grabadora IA', text: 'Estaba tentada a comprar una grabadora con IA. La construí yo misma. Corre en local, transcribe y procesa audio con modelos propios.', meta: 'Herramienta propia', status: 'Personal' },
      { num: '04', title: 'Algo se está cocinando', text: 'Un producto para conectar personas con servicios locales — sin intermediarios, sin ruido. En desarrollo activo.', meta: 'Stealth · Hermosillo · 2025', status: 'En beta' },
    ],
  },
  {
    label: 'Ecosistemas para clientes',
    items: [
      { num: '05', title: 'Raspados Tras las Rejas', text: 'Tres productos para una refresquería con 30 años de historia: sitio de marca con eventos y catering, menú digital interactivo con QR, y sistema POS de inventario y ventas instalable como app.', meta: 'Ecosistema digital · Hermosillo', status: '3 productos', href: 'https://www.raspadostraslasrejas.com/' },
      { num: '06', title: 'Dra. Lirio Rubí · Odontopediatra', text: 'Sitio con identidad de marca submarina para dentista pediátrica, más app gamificada "Sonrisas con la Dra. Lirio" donde los niños ganan Perlas aprendiendo a cuidar sus dientes.', meta: 'Ecosistema digital · Hermosillo', status: '2 productos', href: 'https://draliriorubiodontopediatra.com/' },
      { num: '07', title: 'Dr. Reynoso · Cirujano Plástico', text: 'Presencia digital para especialista en rinoplastia y rejuvenecimiento facial. SEO técnico, schema markup, integración con Doctoralia y WhatsApp.', meta: 'Sitio de alta especialidad · En curso', status: 'En curso', href: 'https://posicion-cero-reynoso.vercel.app/' },
    ],
  },
]

export const media: MediaItem[] = [
  { num: '01', kind: 'Entrevista', title: 'IA y Creatividad', text: 'Una conversación sobre cómo la inteligencia artificial está transformando el proceso creativo y qué significa ser escritora en la era de los modelos generativos.', cta: 'Ver en YouTube', href: 'https://youtu.be/kxUyG7L5FPA' },
  { num: '02', kind: 'Demo clase', title: 'Metodología Creativa + Tech', text: 'Una sesión práctica que integra metodología creativa con herramientas tecnológicas. Aprende a combinar el pensamiento narrativo con el desarrollo de productos digitales.', cta: 'Ver la demo', href: 'https://youtu.be/T4ABDEDyhuo' },
  { num: '03', kind: 'Newsletter', title: 'Arte, Creatividad & Tech', text: 'Reflexiones semanales sobre la vida en la intersección del arte y la tecnología. Sin spam, solo ideas que valen la pena. Únete a más de 2.4K personas.', cta: 'Suscribirme', href: NEWSLETTER_URL },
]

export const highlights: string[] = [
  'Construyo ecosistemas digitales completos para negocios locales',
  'Especialista en IA con enfoque ético y aplicación real',
  'Escritora publicada — narrativa que conecta personas con tecnología',
  'Mentora de +100 personas que hoy construyen sus propias cosas',
]
