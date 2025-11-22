import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "48123456789"; // Replace with actual phone number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse hover:animate-none"
      aria-label="Kontakt WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
