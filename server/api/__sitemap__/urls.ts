// Endpoint que alimenta @nuxtjs/sitemap con las URLs dinámicas
// Lo consume el módulo, no se expone directamente
import { projects } from '~~/app/shared/projects'
import { blogs } from '~~/app/shared/blogs'

export default defineSitemapEventHandler(() => {
  const projectUrls = projects.map((p) => ({
    loc: `/trabajos/${p.slug}`,
    changefreq: 'monthly' as const,
    priority: 0.8,
  }))

  const blogUrls = blogs.map((b) => ({
    loc: `/novedad/${b.slug}`,
    changefreq: 'monthly' as const,
    priority: 0.7,
  }))

  return [...projectUrls, ...blogUrls]
})
