import React from 'react'

type Props = {
  value: 'en' | 'bn'
  onChange: (val: 'en' | 'bn') => void
}

const LanguageToggle = ({ value, onChange }: Props) => {
  return (
    <div className="flex items-center rounded-full border border-white/30 p-0.5 h-8 xl:h-9 2xl:h-10">
      <button
        onClick={() => onChange('en')}
        className={`
          px-2.5 xl:px-3 2xl:px-4 
          h-full
          text-xs xl:text-sm 2xl:text-base 
          font-medium rounded-full transition 
          whitespace-nowrap
          flex items-center justify-center
          ${value === 'en' 
            ? 'bg-white text-black shadow' 
            : 'text-white hover:bg-secondary/80'
          }
        `}
      >
        EN
      </button>
      <button
        onClick={() => onChange('bn')}
        className={`
          px-2.5 xl:px-3 2xl:px-4 
          h-full
          text-xs xl:text-sm 2xl:text-base 
          font-medium rounded-full transition 
          whitespace-nowrap
          flex items-center justify-center
          ${value === 'bn' 
            ? 'bg-white text-black shadow' 
            : 'text-white hover:bg-secondary/80'
          }
        `}
      >
        বাং
      </button>
    </div>
  )
}

export default LanguageToggle