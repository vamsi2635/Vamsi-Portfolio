import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

/** Adds a canonical link only when VITE_SITE_URL is configured. */
function canonicalLink(siteUrl: string): Plugin {
  return {
    name: 'canonical-link',
    transformIndexHtml() {
      if (!siteUrl) return []
      return [{ tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' }]
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
    plugins: [react(), tailwindcss(), canonicalLink((env.VITE_SITE_URL ?? '').replace(/\/$/, ''))],
  }
})
