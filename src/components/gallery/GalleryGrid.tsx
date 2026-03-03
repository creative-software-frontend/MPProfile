import React, { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import GalleryCard from './GalleryCard'
import Lightbox from './Lightbox'
import type { GalleryItem } from '@/config/galleryContent'

interface GalleryGridProps {
  items: GalleryItem[]
  type: 'photo' | 'video'
}

// improved YouTube video ID extractor
const getYouTubeVideoId = (url: string): string | null => {
  if (!url) return null
  
  // various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/,
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1] && match[1].length === 11) {
      return match[1]
    }
    if (match && match[2] && match[2].length === 11) {
      return match[2]
    }
  }
  
  console.log('Could not extract video ID from:', url)
  return null
}

const GalleryGrid = ({ items, type }: GalleryGridProps) => {
  const { language } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No items found</p>
      </div>
    )
  }

  const handleItemClick = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const currentItem = items[currentIndex]
  
  // debug: log the current item
  console.log('Current item:', currentItem)
  
  const videoId = currentItem.url ? getYouTubeVideoId(currentItem.url) : null
  console.log('Extracted videoId:', videoId)

  const getCurrentTitle = () => {
    return typeof currentItem.title === 'string' 
      ? currentItem.title 
      : currentItem.title[language]
  }

  const getCurrentDescription = () => {
    if (!currentItem.description) return undefined
    return typeof currentItem.description === 'string'
      ? currentItem.description
      : currentItem.description[language]
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <GalleryCard 
            key={item.id} 
            item={item} 
            type={type}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentItem={{
          type: type,
          src: currentItem.thumbnail,
          title: getCurrentTitle(),
          description: getCurrentDescription(),
          videoId: type === 'video' && videoId ? videoId : undefined
        }}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={items.length > 1}
        hasPrev={items.length > 1}
      />
    </>
  )
}

export default GalleryGrid