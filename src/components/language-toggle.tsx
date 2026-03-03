import React from 'react'

type Props = {
  value: 'en' | 'bn'
  onChange: (val: 'en' | 'bn') => void
}

const LanguageToggle = ({ value, onChange }: Props) => {
  return (
    <div className="flex items-center rounded-full border border-white/30 p-0.5">
      <button
        onClick={() => onChange('en')}
        className={`px-2 md:px-2.5 lg:px-3 py-1 md:py-1.5 text-xs md:text-sm lg:text-base rounded-full transition whitespace-nowrap ${
          value === 'en' ? 'bg-white text-black shadow' : 'text-white hover:bg-secondary/80'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onChange('bn')}
        className={`px-2 md:px-2.5 lg:px-3 py-1 md:py-1.5 text-xs md:text-sm lg:text-base rounded-full transition whitespace-nowrap ${
          value === 'bn' ? 'bg-white text-black shadow' : 'text-white hover:bg-secondary/80'
        }`}
      >
        বাংলা
      </button>
    </div>
  )
}

export default LanguageToggle