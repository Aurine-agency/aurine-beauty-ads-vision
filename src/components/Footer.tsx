import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import aurineLogoImage from "@/assets/aurine-logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={aurineLogoImage} alt="Aurine" className="h-10 w-10" />
              <span className="text-2xl font-bold text-white">Aurine</span>
            </div>
            <p className="text-white/60 mb-4 max-w-md">
              Specjalizujemy się w profesjonalnym prowadzeniu kampanii reklamowych dla salonów kosmetycznych. Z pasją pomagamy Ci dotrzeć do idealnych klientek.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {[
                { label: "Usługi", id: "services" },
                { label: "Jak to działa", id: "process" },
                { label: "O nas", id: "about" },
                { label: "Opinie", id: "testimonials" },
                { label: "FAQ", id: "faq" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:biuro@aurine.pl"
                  className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  biuro@aurine.pl
                </a>
              </li>
              <li>
                <a
                  href="tel:+48731856524"
                  className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +48 731 856 524
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2024 Aurine. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-white/40 hover:text-white/60 transition-colors">
              Polityka prywatności
            </button>
            <button className="text-white/40 hover:text-white/60 transition-colors">
              Regulamin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
