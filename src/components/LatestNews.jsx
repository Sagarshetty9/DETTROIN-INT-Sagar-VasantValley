import Button from "../ui/Button";
import NewsCard from "../ui/NewsCard";
import TennisChampion from "../assets/images/Under-17-Girls-Table-Tennis-.jpeg";
import Robotics from "../assets/images/roboticsAndBiollogy.jpeg";
import synapse from "../assets/images/synapse_2026_5.jpeg";
import {motion} from "motion/react"

const NEWS = [
  {
    image: TennisChampion,
    date: "JULY 2026",
    title: "Under-17 Girls Crowned Table Tennis Champions",
    excerpt:
      "Our Under-17 girls secured the championship title with an outstanding display of teamwork, discipline, and determination.",
  },
  {
    image: Robotics,
    date: "JULY 2026",
    title: "Robotics Team Showcases Innovation at Tech Expo",
    excerpt:
      "Students presented autonomous robots and AI-powered projects, earning praise for their creativity and engineering skills.",
  },
  {
    image: synapse,
    date: "JUNE 2026",
    title: "Synapse 2026 Inspires Young Innovators",
    excerpt:
      "The annual Synapse event brought together students for workshops, competitions, and collaborative learning across science and technology.",
  },
];

const LatestNews = () => {
  return (
    <motion.section className="bg-[#f7f3ea] px-6 py-24 md:px-14"
    initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}>
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-serif text-4xl font-bold text-[#1e1a17] md:text-5xl">
            Latest from the Valley
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6b6560]">
            Stay updated with our community achievements, upcoming events, and
            school announcements.
          </p>
        </div>
        <Button variant="outline-dark" className="shrink-0">
          View All News
        </Button>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {NEWS.map((n) => (
          <NewsCard key={n.title} {...n} />
        ))}
      </div>
    </motion.section>
  );
};

export default LatestNews;
