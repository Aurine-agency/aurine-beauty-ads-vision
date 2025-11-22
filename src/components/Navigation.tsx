import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import aurineLogoImage from "@/assets/aurine-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-lg border-b border-white/10"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity z-50"
          >
            <img
              src={aurineLogoImage}
              alt="Aurine"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="text-xl sm:text-2xl font-bold text-white">Aurine</span>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/80 hover:text-primary transition-colors"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-white/80 hover:text-primary transition-colors"
            >
              Jak to działa
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-primary transition-colors"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white/80 hover:text-primary transition-colors"
            >
              Opinie
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-white/80 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_hsl(328,100%,54%/0.5)]"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white z-50"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/98 backdrop-blur-lg pt-24 px-6 animate-fade-in">
          <div className="flex flex-col gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white text-xl hover:text-primary transition-colors text-left"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-white text-xl hover:text-primary transition-colors text-left"
            >
              Jak to działa
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white text-xl hover:text-primary transition-colors text-left"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white text-xl hover:text-primary transition-colors text-left"
            >
              Opinie
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-white text-xl hover:text-primary transition-colors text-left"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-6 py-3 rounded-full text-xl font-semibold mt-4"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
