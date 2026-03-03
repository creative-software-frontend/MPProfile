import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LanguageToggle from '@/components/language-toggle'
import ThemeToggle from '@/components/theme-toggle'
import WriteToMPButton from '@/components/ui/WriteToMPButton'
import { useLanguage } from '@/hooks/useLanguage'
import { menuItems } from '@/config/navbarConfig'
import Logo from './layout/Logo'
import DesktopMenu from './layout/DesktopMenu'
import MobileMenu from './layout/MobileMenu'


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, changeLanguage } = useLanguage()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container with consistent gap that scales */}
        <div className="flex items-center h-14 lg:h-16 gap-3 xl:gap-4 2xl:gap-5">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <DesktopMenu items={menuItems} language={language} />
          </div>

          {/* Right Section – Toggles & CTA (always together) */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-5 ml-auto">
            <LanguageToggle value={language} onChange={changeLanguage} />
            <ThemeToggle />
            <WriteToMPButton />
          </div>

          {/* Mobile Menu Button */}
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