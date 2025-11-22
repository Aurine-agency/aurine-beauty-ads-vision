import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    "Cześć! Chciałabym dowiedzieć się więcej o kampaniach reklamowych dla mojego salonu.",
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=48731856524&text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-elegant hover:scale-110 hover:shadow-[var(--shadow-pink-glow)] transition-all duration-300"
      aria-label="Kontakt WhatsApp"
      onClick={() => console.log("WhatsApp button clicked", whatsappUrl)}
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
