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
    <Link to="/" className="flex items-center gap-3">
      <Avatar className="h-10 w-10 border-2 border-primary">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="bg-primary text-primary-foreground">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      {/* <span className="font-semibold text-lg hidden sm:block text-foreground">
        {name}
      </span> */}
    </Link>
  )
}

export default Logo