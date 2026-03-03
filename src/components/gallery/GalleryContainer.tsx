import React, { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { galleryContent } from '@/config/galleryContent'
import GalleryHeader from './GalleryHeader'
import GalleryTabs from './GalleryTabs'
import GalleryGrid from './GalleryGrid'
import CTACard from '@/components/ui/CTACard'

// ইউনিয়ন টাইপ ডিফাইন করলাম
type GalleryItemType = {
  id: number
  title: { en: string; bn: string }
  description?: { en: string; bn: string }
  thumbnail: string
  date: string
  category: 'photo' | 'video'
  url?: string
}

const GalleryContainer = () => {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo')

  const getItems = (): GalleryItemType[] => {
    switch(activeTab) {
      case 'photo': 
        return galleryContent.photos
      case 'video': 
        return galleryContent.videos
      default:
        return []
    }
  }

  const getTitle = () => {
    switch(activeTab) {
      case 'photo': 
        return language === 'en' ? 'Photo Gallery' : 'ছবির গ্যালারি'
      case 'video': 
        return language === 'en' ? 'Video Gallery' : 'ভিডিও গ্যালারি'
    }
  }

  const getDescription = () => {
    switch(activeTab) {
      case 'photo': 
        return language === 'en' 
          ? 'A collection of photographs capturing important moments and events.'
          : 'গুরুত্বপূর্ণ মুহূর্ত ও ঘটনার ছবির সংগ্রহ।'
      case 'video':
        return language === 'en'
          ? 'Watch speeches, interviews, and event coverage.'
          : 'ভাষণ, সাক্ষাৎকার ও ইভেন্টের ভিডিও দেখুন।'
    }
  }

  const items = getItems()
  const totalItems = items.length

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-12 md:py-20">
        
        <GalleryHeader 
          title={getTitle()}
          description={getDescription()}
          totalItems={totalItems}
        />

        <GalleryTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* items  */}
        <GalleryGrid 
          items={items} 
          type={activeTab} 
        />

        <div className="mt-16">
          <CTACard />
        </div>
      </div>
    </div>
  )
}

export default GalleryContainer