import { useState, useEffect } from "react";
import { Menu, X, Bot } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();

    // Close mobile menu if open
    setIsOpen(false);

    // Remove # from href to get the ID
    const targetId = href.replace("#", "");

    if (targetId === "") {
      // Scroll to top if href is just #
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate position with offset for fixed header
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without jumping
      window.history.pushState(null, "", href);
    }
  };

  const navLinks = [
    { label: "Platform", href: "#platform" },
    { label: "Decision Flow", href: "#flow" },
    { label: "Features", href: "#features" },
    { label: "ROI Calculator", href: "#roi" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur border-b border-emerald-500/20 py-2"
          : "bg-slate-950/50 backdrop-blur py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => handleSmoothScroll(e, "#")}
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-lg md:text-xl font-bold text-white">
              FICO<span className="text-emerald-400">.bot</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-slate-300 hover:text-emerald-400 transition font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-all hover:after:w-full cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-slate-800 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="border-t border-emerald-500/20 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block py-3 px-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-900 rounded-lg transition cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-2 pt-4">
              <button
                className="w-full px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </button>
              <button
                className="w-full px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
