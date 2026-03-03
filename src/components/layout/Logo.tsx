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
    <Link to="/" className="block">
      <Avatar className="h-8 w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 border-2 border-primary">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="bg-primary text-primary-foreground text-xs xl:text-sm">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </Link>
  )
}

export default Logo