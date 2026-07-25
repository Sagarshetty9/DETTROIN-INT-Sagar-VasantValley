import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
     <div className="group relative overflow-hidden rounded-xl border border-black/5 bg-white p-8 transition-shadow hover:shadow-lg">
      <div className="mb-5 flex h-11 w-11 items-center justify-center text-[#7a1f1f]">
        {icon}
      </div>
 
      <h3 className="mb-2 font-serif text-2xl font-semibold text-[#1e1a17]">
        {title}
      </h3>
 
      <p className="mb-5 max-w-sm text-[15px] leading-relaxed text-[#6b6560]">
        {description}
      </p>
 
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7a1f1f] transition-transform group-hover:translate-x-1"
      >
        Explore
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  )
}

export default FeatureCard