import type { MetadataRoute } from 'next'
import { profile } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.site,
      lastModified: new Date(),
    },
  ]
}
