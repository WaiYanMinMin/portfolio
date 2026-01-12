// Navigation bar component - fixed at top with smooth scroll
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

// Navigation menu items - customize these links
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Change navbar style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Fixed: was window.screenY
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup: restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center">
          {/* Logo/Brand name - left */}
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Wai Yan's</span>{" "}
              Portfolio
            </span>
          </a>

          {/* Desktop navigation menu - centered */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side: theme toggle and mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-foreground z-[60] relative"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu - Sibling to nav, covers entire viewport */}
      <div
        className={cn(
          "fixed inset-0 z-[50] flex flex-col items-center justify-center md:hidden",
          "transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{
          backgroundColor: "hsl(var(--background) / 0.4)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
