# Environment Setup

Para configurar las variables de entorno, crea un archivo `.env.local` en la raíz del proyecto:

```env
# AI API Keys (opcional - para futuras integraciones)
OPENAI_API_KEY=sk-your_openai_api_key_here
ANTHROPIC_API_KEY=your_claude_api_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://juliagomezg.dev
NEXT_PUBLIC_SITE_NAME="Julia Gómez Portfolio"

# SEO & Analytics (opcional)
GOOGLE_VERIFICATION=your_google_search_console_verification_code
VERCEL_ANALYTICS_ID=your_vercel_analytics_id
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX

# Database (para futuras funcionalidades)
# DATABASE_URL=postgresql://user:password@localhost:5432/portfolio

# Email (para formulario de contacto)
# RESEND_API_KEY=your_resend_api_key
# CONTACT_EMAIL=julia@juliagomezg.dev
```

## Configuración Inicial

1. **Copia este contenido** en un archivo llamado `.env.local`
2. **Reemplaza los valores** con tus propias API keys cuando las necesites
3. **Descomenta las líneas** que quieras usar
4. **Reinicia el servidor** de desarrollo después de cambios 