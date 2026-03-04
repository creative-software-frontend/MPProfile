import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { getHomeIntroContent } from '@/config/homeContent'
import { siteConfig } from '@/config/siteConfig'
import ArrowButton from '@/components/ui/ArrowButton'

const HomeIntro = () => {
  const { language } = useLanguage()
  const content = getHomeIntroContent(language)
  const { leader } = siteConfig

  return (
    <section className="py-8 md:py-12 bg-white dark:bg-black">
      <div className="w-full mx-auto ">
        <div className="w-full mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary bg-white rounded-full text-sm font-bold mb-4">
              {language === 'en' ? 'Meet Your Representative' : 'আপনার প্রতিনিধির সাথে পরিচিত হোন'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              {language === 'en' ? 'Meet' : 'পরিচিত হোন'} {leader.name[language]}
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            
            {/* Image Column */}
            <div className="md:col-span-2 flex justify-center lg:justify-left">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img
                  src={leader.imagePath}
                  alt={leader.name[language]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="md:col-span-3 mx-2 lg:mx-0">
              <p className="text-lg text-black dark:text-white leading-relaxed mb-6">
                {content.description}
              </p>
              
              {/* Arrow Button */}
              <ArrowButton 
                to="/candidate" 
                text={content.cta}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeIntro