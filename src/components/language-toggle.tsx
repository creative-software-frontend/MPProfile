import React from 'react'

type Props = {
  value: 'en' | 'bn'
  onChange: (val: 'en' | 'bn') => void
}

const LanguageToggle = ({ value, onChange }: Props) => {
  return (
    <div className="flex items-center rounded-full border border-white/30 p-0.5 md:p-1">
      <button
        onClick={() => onChange('en')}
        className={`px-1 py-1 text-xs md:text-xs rounded-full transition whitespace-nowrap ${
          value === 'en' ? 'bg-white text-black shadow' : 'text-white hover:bg-secondary/80'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onChange('bn')}
        className={`px-1 py-1 text-xs md:text-xs rounded-full transition whitespace-nowrap ${
          value === 'bn' ? 'bg-white text-black shadow' : 'text-white hover:bg-secondary/80'
        }`}
      >
        বাং
      </button>
    </div>
  )
}

export default LanguageToggle