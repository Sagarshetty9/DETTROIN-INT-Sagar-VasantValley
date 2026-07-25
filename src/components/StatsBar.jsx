import React from 'react'
import StatItem from "../ui/StatItem";

const StatsBar = () => {

    const STATS = [
  { value: "1990", label: "FOUNDED" },
  { value: "2000+", label: "STUDENTS" },
  { value: "200+", label: "FACULTY" },
  { value: "35", label: "YEARS OF EXCELLENCE" },
];
  return (
     <div className="relative z-20 mx-4 -mt-10 md:mx-14 md:-mt-12">
      <div className="mx-auto flex max-w-6xl flex-col rounded-xl bg-[#141210] sm:flex-row">
        {STATS.map((stat, i) => (
          <StatItem key={stat.label} {...stat} isLast={i === STATS.length - 1} />
        ))}
      </div>
    </div>
  )
}

export default StatsBar