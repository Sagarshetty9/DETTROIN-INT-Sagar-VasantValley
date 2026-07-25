import React from "react";
import Button from "../ui/Button";
import NewsCard from "../ui/NewsCard";
 
const NEWS = [
  {
    gradient: "bg-gradient-to-br from-gray-200 to-white",
    date: "JULY 2026",
    title: "Annual Science Fair Winners Announced",
    excerpt: "Students showcased groundbreaking projects across robotics, biology, and climate science.",
  },
  {
    gradient: "bg-gradient-to-br from-amber-300 to-amber-100",
    date: "JULY 2026",
    title: "Admissions Open for 2027 Academic Year",
    excerpt: "Applications are now being accepted for nursery through grade 12.",
  },
  {
    gradient: "bg-gradient-to-br from-gray-200 to-white",
    date: "JUNE 2026",
    title: "Inter-School Debate Championship Win",
    excerpt: "Our senior team brought home the trophy for the third year running.",
  },
];

const LatestNews = () => {
  return (
    <section className="bg-[#f7f3ea] px-6 py-24 md:px-14">
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
    </section>
  )
}

export default LatestNews