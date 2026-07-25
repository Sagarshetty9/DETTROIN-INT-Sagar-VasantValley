import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "../assets/logo/logo-vasant-valley.svg";

const QUICK_LINKS = [
  "About Us",
  "Academics",
  "Admissions",
  "News & Events",
  "Careers",
];
const RESOURCES = [
  "Parent Portal",
  "Alumni Network",
  "Academic Calendar",
  "School Policies",
  "Photo Gallery",
];

const SOCIALS = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "Instagram", icon: FaInstagram },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "YouTube", icon: FaYoutube },
];

const Footer = () => {
  return (
    <footer className="bg-[#141210] px-8 pt-16 pb-6 md:px-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 rotate-45 items-center justify-center  ">
             
                <img
                  src={Logo}
                  alt="Vasant valley Logo"
                  className="h-15 w-15 object-contain -rotate-40"
                />
            
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
            {SOCIALS.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-amber-400 hover:text-[#141210]"
              >
                <Icon size={16} />
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
    <li className="flex items-start gap-3">
      <MapPin
        size={18}
        className="mt-0.5 shrink-0 text-amber-400"
      />
      <span>Sector C, Vasant Kunj, New Delhi 110070, India</span>
    </li>

    <li className="flex items-center gap-3">
      <Phone
        size={18}
        className="shrink-0 text-amber-400"
      />
      <span>+91 11 41767940</span>
    </li>

    <li className="flex items-center gap-3">
      <Mail
        size={18}
        className="shrink-0 text-amber-400"
      />
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
  );
};

export default Footer;
