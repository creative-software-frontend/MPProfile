import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './theme-provider'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center rounded-full border border-white/30 p-1 md:p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-1 md:p-1.5 rounded-full transition ${
          theme === 'light' ? 'bg-white text-black shadow' : 'text-white hover:bg-secondary/80'
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-3 w-3 md:h-3 md:w-3" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-1 md:p-1.5 rounded-full transition ${
          theme === 'dark' ? 'bg-black text-white shadow' : 'text-white hover:bg-secondary/80'
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-3 w-3 md:h-3 md:w-3" />
      </button>
    </div>
  )
}

export default ThemeToggle