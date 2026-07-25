import React from "react";
import Button from "../ui/Button";
import stage from "../assets/images/Stage_photo.jpeg";
import vector1 from "../assets/images/vector_1.jpeg";
import vector2 from "../assets/images/vector_2.jpeg";
import {motion} from "motion/react"


const CultivatingMinds = () => {
  return (
    <motion.section className="bg-[#eeece7] px-6 py-24 md:px-14"
    initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
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
            With a student-to-teacher ratio that ensures personalized attention,
            our faculty doesn't just teach; they mentor, inspire, and guide each
            child's unique journey.
          </p>

          <Button variant="maroon" className="mt-8">
            Read Our Philosophy
          </Button>
        </div>

      
       <div className="relative h-125 w-full">
  {/* Main image */}
  <div className="absolute left-0 top-0 z-10 h-72 w-[65%] overflow-hidden rounded-2xl shadow-xl">
    <img
      src={stage}
      alt="Students performing on stage"
      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  {/* Top-right image */}
  <div className="absolute right-0 top-12 z-20 h-56 w-[50%] overflow-hidden rounded-2xl border-4 border-[#eeece7] shadow-xl">
    <img
      src={vector1}
      alt="Class Quiz Picture"
      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  {/* Bottom-left image */}
  <div className="absolute bottom-0 left-12 z-30 h-48 w-[55%] overflow-hidden rounded-2xl border-4 border-[#eeece7] shadow-xl">
    <img
      src={vector2}
      alt="Students In a seminar"
      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
</div>
      </div>
    </motion.section>
  );
};

export default CultivatingMinds;
