import React from "react";
import FeatureCard from "../ui/FeatureCard";
import {motion} from "motion/react"
import {
  BookOpen,
  Heart,
  Globe,
  Trophy,
} from "lucide-react";



    const FEATURES = [
    {
      title: "Academic Excellence",
      description:
        "A rigorous curriculum that challenges students to think critically and creatively.",
      icon: BookOpen,
    },
    {
      title: "Co-curricular Life",
      description:
        "Vibrant programs in arts, debate, and leadership that build well-rounded individuals.",
      icon: Heart
    },
    {
      title: "International Curriculum",
      description:
        "Integrating global perspectives with IB and Cambridge methodologies.",
      icon: Globe
    },
    {
      title: "Sports & Wellness",
      description:
        "State-of-the-art facilities fostering teamwork, discipline, and physical health.",
      icon: Trophy
    },
  ];

const EducationFeatures = () => {
 

  return (
    <motion.section className="bg-[#f7f3ea] px-6 pb-24 pt-20 md:px-14"
     initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl font-bold text-[#1e1a17] md:text-5xl">
          An Education Beyond Boundaries
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6b6560] md:text-base">
          Our comprehensive approach ensures every student finds their path to
          success, whether in the classroom, on the field, or in the community.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </motion.section>
  );
};

export default EducationFeatures;
