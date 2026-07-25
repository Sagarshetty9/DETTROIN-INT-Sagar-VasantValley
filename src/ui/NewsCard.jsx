import React from 'react'

const NewsCard = ({ gradient, date, title, excerpt }) => {
  return (
     <div className="overflow-hidden rounded-xl border border-black/5 bg-white">
      <div
        className={`flex h-48 items-center justify-center text-sm font-medium tracking-wide text-[#7a1f1f]/70 ${gradient}`}
      >
        NEWS IMAGE
      </div>
      <div className="p-6">
        {date && (
          <p className="mb-2 text-xs font-semibold tracking-wider text-[#7a1f1f]">
            {date}
          </p>
        )}
        <h3 className="mb-2 font-serif text-lg font-semibold text-[#1e1a17]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#6b6560]">{excerpt}</p>
      </div>
    </div>
  )
}

export default NewsCard