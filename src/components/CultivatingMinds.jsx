import React from "react";
import Button from "../ui/Button";


const CultivatingMinds = () => {
  return (
   <section className="bg-[#eeece7] px-6 py-24 md:px-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Text column */}
        <div>
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#1e1a17] md:text-5xl">
            Cultivating Minds,
            <br />
            Shaping Character.
          </h2>
 
          <p className="mt-6 text-[15px] leading-relaxed text-[#6b6560]">
            At Vasant Valley, we believe that education is not merely about
            accumulating facts, but about developing a way of thinking. Our
            philosophy centers on creating independent learners who are
            intellectually curious and morally grounded.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#6b6560]">
            With a student-to-teacher ratio that ensures personalized
            attention, our faculty doesn't just teach; they mentor, inspire,
            and guide each child's unique journey.
          </p>
 
          <Button variant="maroon" className="mt-8">
            Read Our Philosophy
          </Button>
        </div>
 
        {/* Image collage column — swap the labelled blocks for real photos */}
        <div className="relative h-105 w-full">
          <div
            className="absolute left-0 top-0 flex h-64 w-[62%] items-end rounded-lg p-4 text-xs font-medium tracking-wide text-white/90"
            style={{
              background: "linear-gradient(160deg, #8a2a20 0%, #4a1010 100%)",
            }}
          >
            ACADEMIC EXCELLENCE
          </div>
          <div
            className="absolute right-0 top-8 flex h-52 w-[55%] items-end rounded-lg p-4 text-xs font-medium tracking-wide text-[#4a1010]/80"
            style={{
              background: "linear-gradient(160deg, #f3d98a 0%, #d4af37 100%)",
            }}
          >
            SPORTS FACILITIES
          </div>
          <div
            className="absolute bottom-0 left-10 h-44 w-[50%] rounded-lg"
            style={{
              background: "linear-gradient(160deg, #7a1f1f 0%, #3a0d0d 100%)",
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default CultivatingMinds