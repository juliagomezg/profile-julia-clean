export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://juliagomezg.dev/#person",
        "name": "Julia Gómez",
        "givenName": "Julia",
        "familyName": "Gómez",
        "description": "Escritora, desarrolladora e investigadora de IA especializada en machine learning, narrativa digital y tecnología con impacto social.",
        "jobTitle": [
          "AI Researcher",
          "Frontend Developer", 
          "Content Writer",
          "Tech Mentor"
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "Frontend Development",
          "Content Writing",
          "Digital Storytelling",
          "AI Ethics",
          "Next.js",
          "TypeScript",
          "React"
        ],
        "url": "https://juliagomezg.dev",
        "image": {
          "@type": "ImageObject",
          "url": "https://juliagomezg.dev/img/cerebro.png",
          "width": 400,
          "height": 400
        },
        "sameAs": [
          "https://linkedin.com/in/juliagomezg",
          "https://github.com/juliagomezg",
          "https://instagram.com/juliagomezg"
        ],
        "email": "juliagomez19@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Mexico"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://juliagomezg.dev/#website",
        "url": "https://juliagomezg.dev",
        "name": "Julia Gómez - Editorial AI",
        "description": "Portfolio profesional de Julia Gómez: Escritora, desarrolladora e investigadora de IA",
        "author": {
          "@id": "https://juliagomezg.dev/#person"
        },
        "inLanguage": "es-ES",
        "copyrightYear": 2025,
        "copyrightHolder": {
          "@id": "https://juliagomezg.dev/#person"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://juliagomezg.dev/#webpage",
        "url": "https://juliagomezg.dev",
        "name": "Julia Gómez - Editorial AI | Portfolio",
        "description": "Explorando la intersección entre narrativa humana e inteligencia artificial. Especialista en machine learning, desarrollo frontend y contenido editorial con IA.",
        "isPartOf": {
          "@id": "https://juliagomezg.dev/#website"
        },
        "about": {
          "@id": "https://juliagomezg.dev/#person"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://juliagomezg.dev/img/cerebro.png"
        },
        "datePublished": "2025-01-01",
        "dateModified": new Date().toISOString(),
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": "https://juliagomezg.dev"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Proyectos",
              "item": "https://juliagomezg.dev/#projects"
            },
            {
              "@type": "ListItem",
              "position": 3, 
              "name": "Sobre mí",
              "item": "https://juliagomezg.dev/#about"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Contacto", 
              "item": "https://juliagomezg.dev/#contact"
            }
          ]
        }
      },
      {
        "@type": "CreativeWork",
        "name": "Content AI Generator",
        "description": "Sistema de inteligencia artificial que genera contenido editorial personalizado, combinando modelos de lenguaje con técnicas de storytelling humano.",
        "author": {
          "@id": "https://juliagomezg.dev/#person"
        },
        "genre": "AI Development",
        "inLanguage": "es-ES"
      },
      {
        "@type": "Book",
        "name": "La Puerta de mi Pueblo",
        "description": "Obra literaria que explora las conexiones entre tradición y modernidad, narrando historias que conectan generaciones a través de la tecnología.",
        "author": {
          "@id": "https://juliagomezg.dev/#person"
        },
        "genre": "Fiction",
        "inLanguage": "es-ES",
        "workExample": {
          "@type": "CreativeWork",
          "name": "Próximo libro sobre narrativa e IA",
          "description": "Obra que explora la evolución de la narrativa humana en la era de la inteligencia artificial",
          "dateExpected": "2026",
          "workStatus": "En progreso"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 