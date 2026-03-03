import { siteConfig } from './siteConfig'

export interface GalleryItem {
  id: number
  title: {
    en: string
    bn: string
  }
  description?: {
    en: string
    bn: string
  }
  thumbnail: string
  url?: string
  date: string
  category: 'photo' | 'video'
}

export const galleryContent = {
  photos: [
    {
      id: 1,
      title: {
        en: 'Community Meeting in Ward 3',
        bn: 'ওয়ার্ড ৩ এ কমিউনিটি সভা'
      },
      description: {
        en: `${siteConfig.leader.name.en} addressing community concerns in Ward 3`,
        bn: `${siteConfig.leader.name.bn} ওয়ার্ড ৩ এ কমিউনিটির সমস্যা নিয়ে কথা বলছেন`
      },
      thumbnail: '/images/gallery/meeting-1.jpg',
      date: '2024-02-15',
      category: 'photo' as const
    },
    {
      id: 2,
      title: {
        en: 'Inauguration of New School',
        bn: 'নতুন স্কুল উদ্বোধন'
      },
      description: {
        en: `${siteConfig.leader.name.en} inaugurating a new educational institution`,
        bn: `${siteConfig.leader.name.bn} একটি নতুন শিক্ষাপ্রতিষ্ঠান উদ্বোধন করছেন`
      },
      thumbnail: '/images/gallery/school-1.jpg',
      date: '2024-02-10',
      category: 'photo' as const
    }
  ],
  videos: [
    {
      id: 1,
      title: {
        en: 'Speech at Public Rally',
        bn: 'জনসভায় ভাষণ'
      },
      description: {
        en: `${siteConfig.leader.name.en} addressing a massive public gathering`,
        bn: `${siteConfig.leader.name.bn} বিশাল জনসভায় ভাষণ দিচ্ছেন`
      },
      thumbnail: '/images/gallery/video-thumb-1.jpg',
      url: 'https://www.youtube.com/watch?v=TrWaIUqQGJ8', 
      date: '2024-02-01',
      category: 'video' as const
    }
  ]
}