import React from "react";
import Button from "../ui/Button";


const Admissions = () => {
  return (
     <section
      className="px-6 py-24 text-center md:px-14"
      style={{
        background: "linear-gradient(135deg, #8a2418 0%, #5c1a10 100%)",
      }}
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
          Begin Your Journey With Us
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-white/75 md:text-base">
          Admissions are now open for the upcoming academic year. Discover how
          a Vasant Valley education can shape your child's future.
        </p>
        <Button variant="gold" className="mt-8 px-8 py-3.5">
          Start Application
        </Button>
      </div>
    </section>
  )
}

export default Admissions