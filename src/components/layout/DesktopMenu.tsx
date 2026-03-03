import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { MenuItem } from '@/types'

interface DesktopMenuProps {
  items: MenuItem[]
  language: 'en' | 'bn'
}

const DesktopMenu = ({ items, language }: DesktopMenuProps) => {
  const location = useLocation()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const isActivePath = (path: string) => location.pathname === path
  const isActiveParent = (item: MenuItem) =>
    item.children ? item.children.some(child => location.pathname === child.path) : false

  const getMenuClasses = (isActive: boolean) => {
    const baseClasses = "flex items-center rounded-full transition-colors whitespace-nowrap"
    const spacing = "px-2 md:px-2.5 lg:px-3 xl:px-4"
    const padding = "py-1 md:py-1.5 lg:py-2"
    const textSize = "text-xs md:text-sm lg:text-base xl:text-lg" 
    const colors = isActive 
      ? 'bg-secondary text-white' 
      : 'text-white hover:bg-secondary/80'
    
    return `${baseClasses} ${spacing} ${padding} ${textSize} ${colors}`
  }

  return (
    <div className="flex items-center gap-0.5 md:gap-1 lg:gap-1.5 xl:gap-2">
      {items.map(item => (
        <div
          key={item.key}
          className="relative flex-shrink-0"
          onMouseEnter={() => item.children && setOpenDropdown(item.key)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.children ? (
            <>
              <Link
                to={item.path}
                className={`${getMenuClasses(isActivePath(item.path) || isActiveParent(item) || openDropdown === item.key)} flex items-center gap-0.5 md:gap-1`}
              >
                <span>{item.label[language]}</span>
                <ChevronDown
                  className={`h-3 w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 transition-transform duration-200 ${
                    openDropdown === item.key ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              {openDropdown === item.key && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-40 md:w-44 lg:w-48 xl:w-52 bg-primary text-white rounded-xl shadow-xl py-1 md:py-2 z-50">
                  {item.children.map(child => (
                    <Link
                      key={child.key}
                      to={child.path}
                      className={`block px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm lg:text-base transition-colors ${
                        isActivePath(child.path) ? 'bg-secondary text-white' : 'hover:bg-secondary/80'
                      }`}
                    >
                      {child.label[language]}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              to={item.path}
              className={getMenuClasses(isActivePath(item.path))}
            >
              {item.label[language]}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

export default DesktopMenu