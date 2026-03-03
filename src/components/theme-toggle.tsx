import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './theme-provider'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center rounded-full border border-white/30 p-0.5">
      <button
        onClick={() => setTheme('light')}
        className={`p-1.5 md:p-2 lg:p-2.5 rounded-full transition ${
          theme === 'light' ? 'bg-white text-black shadow' : 'text-white hover:bg-secondary/80'
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-3.5 w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-1.5 md:p-2 lg:p-2.5 rounded-full transition ${
          theme === 'dark' ? 'bg-black text-white shadow' : 'text-white hover:bg-secondary/80'
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-3.5 w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5" />
      </button>
    </div>
  )
}

export default ThemeToggle