import React from "react";
 
const QUICK_LINKS = ["About Us", "Academics", "Admissions", "News & Events", "Careers"];
const RESOURCES = [
  "Parent Portal",
  "Alumni Network",
  "Academic Calendar",
  "School Policies",
  "Photo Gallery",
];
 
const SOCIALS = [
  { label: "Facebook", path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" },
  { label: "Instagram", path: "M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.4.5.6.3 1.2.6 1.7 1.2.5.5.9 1.1 1.2 1.7.2.6.4 1.3.5 2.4.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.4-.3.6-.6 1.2-1.2 1.7-.5.5-1.1.9-1.7 1.2-.6.2-1.3.4-2.4.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5-.6-.3-1.2-.6-1.7-1.2-.5-.5-.9-1.1-1.2-1.7-.2-.6-.4-1.3-.5-2.4C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.4.3-.6.6-1.2 1.2-1.7.5-.5 1.1-.9 1.7-1.2.6-.2 1.3-.4 2.4-.5C8.9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" },
  { label: "LinkedIn", path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z" },
  { label: "YouTube", path: "M23 12s0-3.6-.5-5.3a3 3 0 0 0-2.1-2.1C18.7 4 12 4 12 4s-6.7 0-8.4.6a3 3 0 0 0-2.1 2.1C1 8.4 1 12 1 12s0 3.6.5 5.3a3 3 0 0 0 2.1 2.1C5.3 20 12 20 12 20s6.7 0 8.4-.6a3 3 0 0 0 2.1-2.1C23 15.6 23 12 23 12zM9.7 15.5V8.5l6 3.5z" },
];

const Footer = () => {
  return (
    <footer className="bg-[#141210] px-8 pt-16 pb-6 md:px-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo + blurb + socials */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 rotate-45 items-center justify-center border border-white/60">
              <span className="-rotate-45 font-serif text-sm italic text-white">v</span>
            </div>
            <span className="font-serif text-base tracking-wide text-white">
              VASANT VALLEY
            </span>
          </div>
          <p className="mb-5 text-sm leading-relaxed text-white/50">
            Where Excellence Meets Possibility. Nurturing minds, building
            character, and shaping the leaders of tomorrow since 1990.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-amber-400 hover:text-[#141210]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
 
        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-white">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm text-white/50 transition-colors hover:text-amber-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Resources */}
        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-white">
            Resources
          </h4>
          <ul className="space-y-3">
            {RESOURCES.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm text-white/50 transition-colors hover:text-amber-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Contact */}
        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-white">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="flex gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Sector C, Vasant Kunj, New Delhi 110070, India</span>
            </li>
            <li className="flex gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>+91 11 41767940</span>
            </li>
            <li className="flex gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="m22 6-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>info@vasantvalley.edu.in</span>
            </li>
          </ul>
        </div>
      </div>
 
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
        <p>© 2026 Vasant Valley School. All rights reserved.</p>
        <p>Sector C, Vasant Kunj, New Delhi 110070</p>
      </div>
    </footer>
  )
}

export default Footer