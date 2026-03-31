export default function manifest() {
  return {
    name: 'Julia Gómez - Editorial AI',
    short_name: 'Julia Gómez',
    description: 'Portfolio profesional de Julia Gómez: Escritora, desarrolladora e investigadora de IA especializada en machine learning y narrativa digital.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#5a91ef',
    orientation: 'portrait-primary',
    categories: ['business', 'education', 'portfolio'],
    lang: 'es-ES',
    icons: [
      {
        src: '/img/cerebro.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/img/cerebro.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    screenshots: [
      {
        src: '/img/escritorio.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Portfolio principal de Julia Gómez'
      }
    ]
  }
} 