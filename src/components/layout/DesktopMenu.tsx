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

  // Scale padding and text size proportionally with screen
  const getMenuItemClasses = (isActive: boolean, hasDropdown: boolean = false) => {
    const baseClasses = "flex items-center rounded-full transition-colors whitespace-nowrap"
    // Padding scales with screen - more at larger screens
    const padding = "px-2.5 xl:px-3 2xl:px-8 py-1.5 xl:py-2"
    // Text size scales proportionally
    const textSize = "text-sm xl:text-base 2xl:text-lg"
    const colors = isActive 
      ? 'bg-secondary text-white' 
      : 'text-white hover:bg-secondary/80'
    const extraClasses = hasDropdown ? 'gap-0.5 xl:gap-1' : ''
    
    return `${baseClasses} ${padding} ${textSize} ${colors} ${extraClasses}`
  }

  return (
    <div className="flex items-center space-x-1 xl:space-x-1.5 2xl:space-x-2">
      {items.map(item => (
        <div
          key={item.key}
          className="relative"
          onMouseEnter={() => item.children && setOpenDropdown(item.key)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.children ? (
            <>
              <Link
                to={item.path}
                className={getMenuItemClasses(
                  isActivePath(item.path) || isActiveParent(item) || openDropdown === item.key,
                  true
                )}
              >
                <span>{item.label[language]}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 xl:h-4 xl:w-4 transition-transform duration-200 ${
                    openDropdown === item.key ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              {openDropdown === item.key && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 xl:w-48 2xl:w-56 bg-primary text-white rounded-xl shadow-xl py-2 z-50">
                  {item.children.map(child => (
                    <Link
                      key={child.key}
                      to={child.path}
                      className={`block px-4 py-2 text-sm xl:text-base 2xl:text-lg transition-colors ${
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
              className={getMenuItemClasses(isActivePath(item.path))}
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