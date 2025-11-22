import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "48123456789"; // Replace with actual phone number
  const message = "Cześć! Interesuje mnie współpraca z Aurine.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;
