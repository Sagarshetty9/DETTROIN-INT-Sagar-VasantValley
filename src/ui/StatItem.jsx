import React from 'react'

const StatItem = ({ value, label, isLast })=> {
  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center px-4 py-8 text-center ${
        !isLast ? "border-r border-white/10" : ""
      }`}
    >
      <span className="font-serif text-4xl font-bold text-amber-400 md:text-5xl">
        {value}
      </span>
      <span className="mt-2 text-xs font-medium tracking-[0.2em] text-white/60">
        {label}
      </span>
    </div>
  )
}

export default StatItem