import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LanguageToggle from '@/components/language-toggle'
import ThemeToggle from '@/components/theme-toggle'
import WriteToMPButton from '@/components/ui/WriteToMPButton'
import { useLanguage } from '@/hooks/useLanguage'
import { menuItems } from '@/config/navbarConfig'
import Logo from './Logo'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, changeLanguage } = useLanguage()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-sm">
      {/* Main layout wrapper - matches page content width */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar container - fixed height */}
        <div className="flex items-center h-14 lg:h-16">
          
          {/* Logo - no extra spacing */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu - ml-auto pushes it right after logo */}
          <div className="hidden lg:block ml-4 xl:ml-6">
            <DesktopMenu items={menuItems} language={language} />
          </div>

          {/* Right Section - ml-auto pushes to far right */}
          <div className="hidden lg:flex items-center ml-auto space-x-1 xl:space-x-2">
            <LanguageToggle value={language} onChange={changeLanguage} />
            <ThemeToggle />
            <WriteToMPButton />
          </div>

          {/* Mobile Menu Button - visible only on mobile */}
          <div className="flex lg:hidden items-center ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full transition-colors hover:bg-secondary/80"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <MobileMenu
            items={menuItems}
            language={language}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar