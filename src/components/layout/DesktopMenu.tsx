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

  return (
    <div className="flex items-center gap-1 lg:gap-2">
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
                className={`flex items-center gap-0 xl:gap-1 px-2 xl:px-3 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm xl:text-base font-medium transition-colors whitespace-nowrap ${
                  isActivePath(item.path) || isActiveParent(item) || openDropdown === item.key
                    ? 'bg-secondary text-white'
                    : 'text-white hover:bg-secondary/80'
                }`}
                style={{ wordBreak: 'keep-all' }} 
              >
                <span className="inline-block">{item.label[language]}</span>
                <ChevronDown
                  className={`h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-200 ${
                    openDropdown === item.key ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              {openDropdown === item.key && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 lg:w-56 bg-primary text-white rounded-xl shadow-xl py-2 z-50">
                  {/* শুধুমাত্র children দেখাবে, parent path দেখাবে না */}
                  {item.children.map(child => (
                    <Link
                      key={child.key}
                      to={child.path}
                      className={`block px-2 xl:px-3 py-2 text-xs lg:text-sm xl:text-base transition-colors ${
                        isActivePath(child.path) ? 'bg-secondary text-white' : 'hover:bg-secondary/80'
                      }`}
                      style={{ wordBreak: 'keep-all' }}
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
              className={`px-2 lg:px-3 py-1.5 xl:py-3 rounded-full text-xs lg:text-sm xl:text-base font-medium transition-colors whitespace-nowrap ${
                isActivePath(item.path) ? 'bg-secondary text-white' : 'text-white hover:bg-secondary/80'
              }`}
              style={{ wordBreak: 'keep-all' }}
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