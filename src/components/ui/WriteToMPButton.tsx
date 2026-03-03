import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { Send } from 'lucide-react'

interface WriteToMPButtonProps {
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'white'
}

const WriteToMPButton: React.FC<WriteToMPButtonProps> = ({ 
  className = '',
  fullWidth = false,
  variant = 'primary'
}) => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    navigate('/reach-out-to-your-mp')
  }

  // Variant styles
  const variantStyles = {
    primary: 'bg-[#DA291C] text-white hover:bg-[#B22222] dark:bg-[#FF4D4D] dark:hover:bg-[#DA291C]',
    secondary: 'bg-[#006747] text-white hover:bg-[#00523b] dark:bg-[#00A86B] dark:hover:bg-[#008055]',
    white: 'bg-white text-[#006747] hover:bg-gray-100 dark:bg-white dark:text-[#00A86B]'
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative overflow-hidden
        ${variantStyles[variant]}
        px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 
        py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3
        rounded-full 
        text-[10px] sm:text-xs md:text-sm lg:text-sm 2xl:text-base
        font-medium 
        transition-all duration-300 ease-in-out
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
      <span className="relative flex items-center justify-center gap-1 sm:gap-2">
        <span>{language === 'en' ? 'Write to MP' : 'এমপিকে লিখুন'}</span>
        <Send 
          className={`
            h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5
            transition-all duration-300
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