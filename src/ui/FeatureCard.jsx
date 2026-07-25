import { ArrowRight } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group rounded-xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 text-primary">
        <Icon size={30} strokeWidth={1.8} />
      </div>

      <h3 className="mb-3 font-serif text-2xl font-semibold text-text">
        {title}
      </h3>

      <p className="mb-6 text-[15px] leading-relaxed text-stone-500">
        {description}
      </p>

      <button className="inline-flex items-center gap-2 font-medium text-primary transition-all group-hover:gap-3 text-blue-700">
        Explore
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default FeatureCard;