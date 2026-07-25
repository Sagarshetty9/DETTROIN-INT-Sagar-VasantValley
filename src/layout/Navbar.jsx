import React from "react";
import Logo from "../assets/logo/logo-vasant-valley.svg";
import { motion } from "motion/react";

const NAV_LINKS = [
  { label: "HOME", active: true },
  { label: "ABOUT" },
  { label: "ACADEMICS" },
  { label: "ADMISSIONS" },
  { label: "NEWS & EVENTS" },
  { label: "CONTACT" },
];

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 flex items-center justify-between px-8 py-6 md:px-14"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className="flex items-center gap-3"
        >
          <div className="flex h-15 w-15 items-center justify-center rounded-full bg-white backdrop-blur-sm">
            <img
              src={Logo}
              alt="Vasant valley Logo"
              className="h-15 w-15 object-contain "
            />
          </div>
          <span className="font-serif text-lg tracking-wide text-white">
            VASANT VALLEY
          </span>
        </motion.div>

        {/* Links */}
    <motion.ul
  className="hidden items-center gap-8 lg:flex"
>
  {NAV_LINKS.map((link, index) => (
    <motion.li
      key={link.label}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.35 + index * 0.08,
        duration: 0.45,
        ease: "easeOut",
      }}
      whileHover={{
        y: -2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.96 }}
      className={`group relative cursor-pointer text-[13px] font-medium tracking-wider transition-colors duration-300 ${
        link.active
          ? "text-amber-400"
          : "text-white/90 hover:text-amber-400"
      }`}
    >
      {link.label}

      <span
        className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-amber-400 transition-all duration-300 ${
          link.active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </motion.li>
  ))}
</motion.ul>

        {/* CTA outline button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
          className="hidden h-10 w-28 rounded-sm border border-white/70 text-sm text-white/90 transition-colors hover:border-amber-400 hover:text-amber-400 md:block"
        >
          Enroll
        </motion.button>
      </motion.nav>
    </>
  );
};

export default Navbar;
