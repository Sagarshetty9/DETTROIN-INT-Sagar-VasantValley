import React from "react";
import StatItem from "../ui/StatItem";
import { motion } from "motion/react";

const STATS = [
  { value: "1990", label: "FOUNDED" },
  { value: "2000+", label: "STUDENTS" },
  { value: "200+", label: "FACULTY" },
  { value: "35", label: "YEARS OF EXCELLENCE" },
];
const StatsBar = () => {
  return (
    <motion.div
      className="relative z-20 mx-4 -mt-10 md:mx-14 md:-mt-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col rounded-xl bg-[#141210] sm:flex-row">
        {STATS.map((stat, i) => (
          <StatItem
            key={stat.label}
            {...stat}
            isLast={i === STATS.length - 1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default StatsBar;
