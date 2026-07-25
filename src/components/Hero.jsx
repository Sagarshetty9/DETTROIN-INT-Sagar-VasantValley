import React from 'react'
import Navbar from '../layout/Navbar'

const Hero = () => {


 
  return (
    
      <section
      className="relative min-h-screen w-full overflow-hidden font-sans"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 20%, #7a1f1f 0%, #4a1010 45%, #1c0505 100%)",
      }}
    >
      {/* subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-0.75 bg-black/40" />

        <Navbar/>
   
 
      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-28 text-center md:pt-28">
        <p className="mb-6 text-xs font-semibold tracking-[0.3em] text-amber-400 md:text-sm">
          VASANT VALLEY SCHOOL
        </p>
 
        <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl">
          Where Excellence
        </h1>
        <h2 className="mt-1 font-serif text-5xl italic leading-[1.05] text-amber-400 sm:text-6xl md:text-7xl">
          Meets Possibility
        </h2>
 
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Empowering students to discover their potential, shape their
          character, and lead with purpose in a changing world.
        </p>
 
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-sm bg-amber-400 px-8 py-3.5 text-sm font-semibold text-[#3a0d0d] transition-transform hover:scale-[1.02] hover:bg-amber-300">
            Apply for Admissions
          </button>
          <button className="rounded-sm bg-white px-8 py-3.5 text-sm font-semibold text-[#7a1f1f] transition-transform hover:scale-[1.02] hover:bg-white/90">
            Discover Our School
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero