import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { getHomeSectionsContent } from '@/config/homeSectionsContent'
import { siteConfig } from '@/config/siteConfig'
import HomeSectionCard from './HomeSectionCard'
import { Target, Award, Image, Newspaper } from 'lucide-react'

const iconMap = {
  commitment: Target,
  works: Award,
  gallery: Image,
  news: Newspaper
}

const HomeSections = () => {
  const { language } = useLanguage()
  const content = getHomeSectionsContent(language)
  const { leader } = siteConfig

  if (!content) {
    return null
  }

  const sections = [
    {
      key: 'commitment',
      title: content.commitment.title,
      description: content.commitment.description,
      cta: content.commitment.cta,
      path: content.commitment.path,
      image: '/images/sections/commitment.jpg',
      icon: iconMap.commitment
    },
    {
      key: 'works',
      title: content.works.title,
      description: content.works.description,
      cta: content.works.cta,
      path: content.works.path,
      image: '/images/sections/works.jpg',
      icon: iconMap.works
    },
    {
      key: 'gallery',
      title: content.gallery.title,
      description: content.gallery.description,
      cta: content.gallery.cta,
      path: content.gallery.path,
      image: '/images/sections/gallery.jpg',
      icon: iconMap.gallery
    },
    {
      key: 'news',
      title: content.news.title,
      description: content.news.description,
      cta: content.news.cta,
      path: content.news.path,
      image: '/images/sections/news.jpg',
      icon: iconMap.news
    }
  ]

  return (
    <section className="py-8 md:py-12 bg-white dark:bg-black">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
            {language === 'en' ? 'Explore More' : 'আরও জানুন'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            {language === 'en' ? 'Discover' : 'আবিষ্কার করুন'} {leader.name[language]} {language === 'en' ? 'Work' : 'এর কাজ'}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <HomeSectionCard
                key={section.key}
                title={section.title}
                description={section.description}
                cta={section.cta}
                path={section.path}
                image={section.image}
                icon={<Icon className="h-6 w-6" />}
                delay={index * 100}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeSections