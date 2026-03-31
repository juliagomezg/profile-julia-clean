# Julia Gómez - Portfolio Next.js

🚀 **Portfolio moderno construido con Next.js 14, TypeScript y Tailwind CSS, optimizado para integraciones de IA**

Una landing page elegante y escalable que combina el diseño original con la potencia de Next.js para futuras integraciones de inteligencia artificial.

## ✨ Nuevas Características

### 🔧 **Tecnología Modern Stack**
- **Next.js 14** con App Router
- **TypeScript** para desarrollo type-safe
- **Tailwind CSS** para estilos utilitarios
- **Framer Motion** ready para animaciones avanzadas
- **API Routes** preparadas para AI

### 🤖 **AI-Ready Architecture**
- Endpoints preparados para OpenAI, Claude, Custom Models
- Estructura para content generation
- API routes escalables
- TypeScript interfaces para AI data

### ⚡ **Performance Optimizada**
- **Server-side Rendering (SSR)**
- **Image Optimization** automática con Next.js Image
- **Code Splitting** automático
- **Bundle Analysis** incluido

## 📁 Estructura del Proyecto

```
portfolio-julia/
├── package.json              # Dependencies y scripts
├── next.config.js            # Configuración Next.js
├── tailwind.config.js        # Configuración Tailwind
├── tsconfig.json             # Configuración TypeScript
├── postcss.config.js         # PostCSS para Tailwind
├── public/
│   └── img/                  # Imágenes optimizadas
│       ├── cerebro.png       # IA/Research
│       ├── escritorio.png    # Desarrollo/Workspace
│       ├── lineas.png        # Elementos gráficos
│       ├── piezas.png        # Componentes/Design
│       ├── colores-calidos.png
│       ├── colores-fuertes.png
│       └── sobre-colores.png
├── src/
│   ├── app/                  # App Router (Next.js 13+)
│   │   ├── layout.tsx        # Root layout con fonts
│   │   ├── page.tsx          # Homepage
│   │   ├── globals.css       # Estilos globales + Tailwind
│   │   └── api/              # API Routes para AI
│   │       └── ai/
│   │           └── route.ts  # Endpoint AI preparado
│   ├── components/           # Componentes React
│   │   ├── Header.tsx        # Navegación con scroll effects
│   │   ├── Hero.tsx          # Sección principal con Image
│   │   ├── Projects.tsx      # Grid de proyectos
│   │   ├── About.tsx         # Estadísticas y descripción
│   │   └── Contact.tsx       # Links sociales
│   ├── lib/
│   │   └── utils.ts          # Utilidades (clsx, scroll)
│   └── types/
│       └── index.ts          # TypeScript interfaces
└── README-nextjs.md          # Este archivo
```

## 🚀 Instalación y Setup

### 1. **Preparar el entorno**
```bash
# Asegúrate de tener Node.js 18+ instalado
node --version

# Clona o crea la estructura del proyecto
mkdir portfolio-julia && cd portfolio-julia
```

### 2. **Instalar dependencias**
```bash
npm install
```

### 3. **Mover imágenes**
```bash
# Crea la carpeta public/img y mueve tus imágenes allí
mkdir -p public/img
# Mueve todas las imágenes de ./img/ a ./public/img/
```

### 4. **Desarrollo**
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

### 5. **Build para producción**
```bash
npm run build
npm start
```

## 🎨 Personalización

### **Colores y Tipografía**
Edita `tailwind.config.js` para personalizar la paleta:

```javascript
theme: {
  extend: {
    colors: {
      'primary-dark': '#2d2d2d',
      'accent': '#5a91ef',
      'accent-secondary': '#ffe271',
      'accent-coral': '#f77a7a',
      // Añade tus colores aquí
    }
  }
}
```

### **Proyectos**
Modifica el array en `src/components/Projects.tsx`:

```typescript
const projects: ProjectType[] = [
  {
    id: 1,
    title: "Tu Nuevo Proyecto",
    category: "AI Development",
    description: "Descripción del proyecto...",
    image: "/img/tu-imagen.png",
    emoji: "🚀",
    link: "https://tu-link.com"
  },
  // Añade más proyectos
]
```

### **Información Personal**
Actualiza datos en:
- `src/components/Hero.tsx` - Título y descripción
- `src/components/About.tsx` - Estadísticas y biografía
- `src/components/Contact.tsx` - Links sociales
- `src/app/layout.tsx` - Metadata y SEO

## 🤖 Integraciones de IA

### **Configurar OpenAI**
```bash
npm install openai
```

Edita `src/app/api/ai/route.ts`:
```typescript
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  const { prompt } = await request.json()
  
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }]
  })
  
  return NextResponse.json({
    content: response.choices[0].message.content
  })
}
```

### **Variables de Entorno**
Crea `.env.local`:
```env
OPENAI_API_KEY=tu_api_key_aqui
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### **Ejemplos de Uso**
```typescript
// Desde cualquier componente
const generateContent = async (prompt: string) => {
  const response = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, type: 'content' })
  })
  
  const data = await response.json()
  return data.content
}
```

## 📱 Responsive Design

- **Desktop (1024px+)**: Grid de 2 columnas, navegación completa
- **Tablet (768-1023px)**: Layout adaptativo, espaciado optimizado
- **Mobile (<768px)**: Columna única, navegación simplificada

## 🔍 SEO Optimizado

- **Metadata dinámico** en `layout.tsx`
- **Open Graph** para redes sociales
- **Structured data** ready
- **Sitemap** automático con Next.js
- **Performance metrics** con Core Web Vitals

## 🚀 Deploy

### **Vercel (Recomendado)**
```bash
npm install -g vercel
vercel
```

### **Netlify**
```bash
npm run build
# Sube la carpeta ./out a Netlify
```

### **Custom Server**
```bash
npm run build
npm start
```

## 📊 Analytics y Monitoreo

### **Vercel Analytics**
```bash
npm install @vercel/analytics
```

Añade en `layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🛠 Scripts Disponibles

```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run start        # Servidor producción
npm run lint         # ESLint
npm run type-check   # Verificar tipos TypeScript
```

## 🔄 Migración desde HTML

Si vienes de la versión HTML original:

1. **Mantén el diseño**: Todos los estilos se conservan
2. **Mejora performance**: SSR + optimizaciones automáticas
3. **Añade interactividad**: React hooks + state management
4. **Prepara para IA**: API routes + TypeScript ready

## 🌟 Próximas Funcionalidades

- [ ] **CMS Integration**: Sanity o Contentful para proyectos
- [ ] **Dark Mode**: Theme switcher
- [ ] **Blog**: Sección de artículos con MDX
- [ ] **AI Chat**: Chatbot integrado en el portfolio
- [ ] **Analytics Dashboard**: Métricas de visitantes
- [ ] **Multi-idioma**: i18n con next-intl

## 📧 Contacto

- **Email**: juliagomez19@gmail.com
- **LinkedIn**: [linkedin.com/in/juliagomezg](https://linkedin.com/in/juliagomezg)
- **GitHub**: [github.com/juliagomezg](https://github.com/juliagomezg)

---

*Portfolio construido con ❤️ usando Next.js 14, TypeScript y Tailwind CSS. Optimizado para el futuro de la IA.* 