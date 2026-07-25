import React from "react";
import Logo from "../assets/logo-vasant-valley.svg";

const Navbar = () => {
  const NAV_LINKS = [
    { label: "HOME", active: true },
    { label: "ABOUT" },
    { label: "ACADEMICS" },
    { label: "ADMISSIONS" },
    { label: "NEWS & EVENTS" },
    { label: "CONTACT" },
  ];
  return (
    <>
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-14 py-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 -rotate-45 items-center justify-center border border-amber-400/80">
            <img
              src={Logo}
              alt="Background image"
              className="h-10 w-10 rotate-45"
            />
          </div>
          <span className="font-serif text-lg tracking-wide text-white">
            VASANT VALLEY
          </span>
        </div>

        {/* Links */}
        <ul className="hidden items-center gap-8 text-[13px] font-medium tracking-wider text-white/90 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className={
                link.active
                  ? "cursor-pointer text-amber-400"
                  : "cursor-pointer transition-colors hover:text-amber-400"
              }
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* CTA outline button */}
        <button className="hidden h-10 w-28 rounded-sm border border-white/70 text-sm text-white/90 transition-colors hover:border-amber-400 hover:text-amber-400 md:block">
          Enroll
        </button>
      </nav>
    </>
  );
};

export default Navbar;
