import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { Send } from 'lucide-react'

interface WriteToMPButtonProps {
  className?: string
  fullWidth?: boolean
}

const WriteToMPButton: React.FC<WriteToMPButtonProps> = ({ 
  className = '',
  fullWidth = false 
}) => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    navigate('/reach-out-to-your-mp')
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative overflow-hidden
        bg-secondary text-white 
        px-6 py-3 rounded-full 
        text-sm font-medium 
        transition-all duration-300 ease-in-out
        hover:bg-secondary/80
        whitespace-nowrap
        transform hover:scale-105 active:scale-95
        shadow-md hover:shadow-xl
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {/* Background Animation */}
      <span className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Button Content with Icon */}
      <span className="relative flex items-center justify-center gap-2">
        <span>{language === 'en' ? 'Write to MP' : 'এমপিকে লিখুন'}</span>
        <Send 
          className={`
            h-4 w-4 transition-all duration-300
            ${isHovered ? 'translate-x-1 -translate-y-1' : 'translate-x-0 translate-y-0'}
          `} 
        />
      </span>

      {/* Ripple Effect on Hover */}
      <span className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-500" />
    </button>
  )
}

export default WriteToMPButton