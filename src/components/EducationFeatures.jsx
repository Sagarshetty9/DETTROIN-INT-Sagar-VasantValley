import React from "react";
import FeatureCard from "../ui/FeatureCard";

const EducationFeatures = () => {
  const ICON_PROPS = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const FEATURES = [
    {
      title: "Academic Excellence",
      description:
        "A rigorous curriculum that challenges students to think critically and creatively.",
      icon: (
        <svg {...ICON_PROPS}>
          <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2H9a3 3 0 0 1 3 3v15a2.5 2.5 0 0 0-2.5-2.5H2z" />
          <path d="M22 4.5A2.5 2.5 0 0 0 19.5 2H15a3 3 0 0 0-3 3v15a2.5 2.5 0 0 1 2.5-2.5H22z" />
        </svg>
      ),
    },
    {
      title: "Co-curricular Life",
      description:
        "Vibrant programs in arts, debate, and leadership that build well-rounded individuals.",
      icon: (
        <svg {...ICON_PROPS}>
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      ),
    },
    {
      title: "International Curriculum",
      description:
        "Integrating global perspectives with IB and Cambridge methodologies.",
      icon: (
        <svg {...ICON_PROPS}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
        </svg>
      ),
    },
    {
      title: "Sports & Wellness",
      description:
        "State-of-the-art facilities fostering teamwork, discipline, and physical health.",
      icon: (
        <svg {...ICON_PROPS}>
          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
          <path d="M7 5H4a1 1 0 0 0-1 1 5 5 0 0 0 4 4.9M17 5h3a1 1 0 0 1 1 1 5 5 0 0 1-4 4.9" />
        </svg>
      ),
    },
  ];
  return (
    <section className="bg-[#f7f3ea] px-6 pb-24 pt-20 md:px-14">
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
    </section>
  );
};

export default EducationFeatures;
