import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
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
  const { theme } = useTheme()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Div 1: Logo - বামে */}
          <div className="flex-1 flex justify-start">
            <Logo />
          </div>

          {/* Div 2: Desktop Menu - মাঝে */}
          <div className="hidden lg:block flex-1">
            <div className="flex justify-center">
              <DesktopMenu items={menuItems} language={language} />
            </div>
          </div>

          {/* Div 3: Toggle Buttons - মাঝে */}
          <div className="hidden lg:block flex-1">
            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <LanguageToggle value={language} onChange={changeLanguage} />
              </div>
            </div>
          </div>
          <div className="hidden lg:block flex-1">
            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Div 4: CTA Button - ডানে */}
          <div className="flex-1 flex justify-end">
            <div className="flex items-center gap-2">
              {/* Desktop CTA */}
              <WriteToMPButton className="hidden lg:inline-block px-2 py-1 text-xs" />

              {/* Mobile Menu Button (শুধু মোবাইলে দেখাবে) */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-1.5 rounded-full transition-colors hover:bg-secondary"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4 text-white" />
                ) : (
                  <Menu className="h-4 w-4 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View - Toggle Buttons  */}
        <div className="lg:hidden flex justify-end py-2">
          <div className="flex items-center gap-2">
            <LanguageToggle value={language} onChange={changeLanguage} />
            <ThemeToggle />
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