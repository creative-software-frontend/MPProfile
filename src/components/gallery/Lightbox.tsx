import React, { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  currentItem: {
    type: 'photo' | 'video'
    src: string
    title: string
    description?: string
    videoId?: string
  }
  onNext?: () => void
  onPrev?: () => void
  hasNext?: boolean
  hasPrev?: boolean
}

const Lightbox = ({ 
  isOpen, 
  onClose, 
  currentItem, 
  onNext, 
  onPrev, 
  hasNext, 
  hasPrev 
}: LightboxProps) => {
  const { language } = useLanguage()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight' && hasNext && onNext) onNext()
      else if (e.key === 'ArrowLeft' && hasPrev && onPrev) onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    if (isOpen) document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Navigation Buttons */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev?.() }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white"
        >
          <ChevronLeft className="h-10 w-10" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext?.() }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white"
        >
          <ChevronRight className="h-10 w-10" />
        </button>
      )}

      {/* Content Container */}
      <div 
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {currentItem.type === 'photo' ? (
          // Photo - full size
          <img
            src={currentItem.src}
            alt={currentItem.title}
            className="max-w-full max-h-[90vh] object-contain"
          />
        ) : (
          // Video - fixed aspect ratio container
          <div className="w-[80vw] max-w-5xl aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${currentItem.videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
              title={currentItem.title}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Info Bar */}
        {(currentItem.title || currentItem.description) && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{currentItem.title}</h3>
            {currentItem.description && (
              <p className="text-sm text-white/80">{currentItem.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Lightbox