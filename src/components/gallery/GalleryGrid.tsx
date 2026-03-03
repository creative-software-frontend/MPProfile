import React, { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import GalleryCard from './GalleryCard'
import Lightbox from './Lightbox'
import type { GalleryItem } from '@/config/galleryContent'

interface GalleryGridProps {
  items: GalleryItem[]
  type: 'photo' | 'video'
}

const GalleryGrid = ({ items, type }: GalleryGridProps) => {
  const { language } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (items.length === 0) {
    return <div className="text-center py-12">No items found</div>
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

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentItem={{
          type: type,
          src: currentItem.thumbnail,
          title: typeof currentItem.title === 'string' 
            ? currentItem.title 
            : currentItem.title[language],
          description: currentItem.description 
            ? (typeof currentItem.description === 'string'
                ? currentItem.description
                : currentItem.description[language])
            : undefined,
          videoId: type === 'video' ? currentItem.videoId : undefined
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