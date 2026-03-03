import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface LogoProps {
  image?: string
  name?: string
}

const Logo: React.FC<LogoProps> = ({ 
  image = '/images/leader-image.jpg', 
  name = 'Leader' 
}) => {
  return (
    <Link to="/" className="flex items-center">
      <Avatar className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 border-2 border-primary flex-shrink-0">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="bg-primary text-primary-foreground text-xs md:text-sm lg:text-base">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </Link>
  )
}

export default Logo