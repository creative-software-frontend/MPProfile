import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { getHomeCommitmentContent, getCommitmentIcon } from '@/config/homeCommitmentContent'
import { siteConfig } from '@/config/siteConfig'
import { ArrowRight } from 'lucide-react'

const HomeCommitment = () => {
  const { language } = useLanguage()
  const content = getHomeCommitmentContent(language)
  const { leader } = siteConfig

  if (!content) return null

  return (
    <section className="py-8 md:py-12 bg-gray-50 dark:bg-black">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {content.description}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Commitment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {content.commitments.map((commitment) => {
            const IconComponent = getCommitmentIcon(commitment.icon)
            
            return (
              <Link
                key={commitment.id}
                to={commitment.path}
                className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={commitment.image}
                    alt={commitment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {commitment.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {commitment.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary dark:text-primary-dark font-medium group-hover:gap-3 transition-all">
                    <span>{language === 'en' ? 'Learn More' : 'বিস্তারিত'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/commitment"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
          >
            <span>{language === 'en' ? 'View All Commitments' : 'সব অঙ্গীকার দেখুন'}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeCommitment