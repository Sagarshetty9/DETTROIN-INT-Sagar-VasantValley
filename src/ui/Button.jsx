import React from "react";

const VARIANTS = {
  gold: "bg-amber-400 text-[#3a0d0d] hover:bg-amber-300",
  white: "bg-white text-[#7a1f1f] hover:bg-white/90",
  maroon: "bg-[#7a1f1f] text-white hover:bg-[#6a1a1a]",
  "outline-dark":
    "border border-[#7a1f1f]/40 text-[#7a1f1f] hover:border-[#7a1f1f]",
  "outline-light":
    "border border-white/70 text-white hover:border-amber-400 hover:text-amber-400",
};

const Button = ({ children, variant = "gold", className = "", ...props }) => {
  return (
    <button
      className={`rounded-sm px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
