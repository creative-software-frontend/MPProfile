import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Image, Play } from 'lucide-react'

interface GalleryTabsProps {
  activeTab: 'photo' | 'video'  
  onTabChange: (tab: 'photo' | 'video') => void
}

const GalleryTabs = ({ activeTab, onTabChange }: GalleryTabsProps) => {
  const { language } = useLanguage()

  const tabs = [
    {
      id: 'photo' as const,
      label: { en: 'Photos', bn: 'ছবি' },
      icon: Image
    },
    {
      id: 'video' as const,
      label: { en: 'Videos', bn: 'ভিডিও' },
      icon: Play
    }
  ]

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-gray-100 dark:bg-gray-900 rounded-full p-1">
        {tabs.map(tab => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? 'bg-primary text-white shadow'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label[language]}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default GalleryTabs