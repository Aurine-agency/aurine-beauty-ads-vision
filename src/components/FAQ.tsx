import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "Ile to kosztuje?",
      answer:
        "Każdą współpracę ustalamy indywidualnie. Koszt zależy od budżetu reklamowego i zakresu prac. Nie mamy sztywnych pakietów – dostosowujemy ofertę do możliwości konkretnego salonu. Zachęcam do rozmowy, wtedy wszystko omówimy szczegółowo.",
    },
    {
      question: "Jak długo trzeba czekać na efekty?",
      answer:
        "Pierwsze zapytania zazwyczaj przychodzą już w pierwszym tygodniu. Pełny obraz efektów kampanii widać po około miesiącu – wtedy można ocenić, co działa najlepiej i wprowadzać usprawnienia.",
    },
    {
      question: "Czy to działa w małych miastach?",
      answer:
        "Tak, reklamy na Facebooku sprawdzają się również w małych miastach. Facebook pozwala precyzyjnie targetować osoby z konkretnego regionu. W mniejszych miejscowościach często jest mniejsza konkurencja reklamowa, co może być dodatkowym atutem.",
    },
    {
      question: "Czy muszę dać dostęp do mojego Facebooka?",
      answer:
        "Tak, ale spokojnie – dostęp dotyczy tylko części reklamowej (Business Manager). Nie mamy wglądu w Twój prywatny profil ani wiadomości. Wszystko jest bezpieczne i zgodne z regulaminem Facebooka.",
    },
    {
      question: "Co jeśli nie będę zadowolona?",
      answer:
        "Rozliczamy się miesięcznie, bez długoterminowych zobowiązań. Jeśli współpraca Ci nie odpowiada, możemy ją zakończyć. Większość właścicielek zostaje z nami na dłużej, ale zawsze można podjąć inną decyzję.",
    },
    {
      question: "Czy potrzebuję profesjonalnych zdjęć?",
      answer:
        "Niekoniecznie. Możemy wykorzystać zdjęcia, które już masz, lub pomożemy Ci wykonać dobre zdjęcia samodzielnie. W razie potrzeby podpowiemy też, jak znaleźć fotografa w Twojej okolicy.",
    },
  ];

  return (
    <section ref={ref} id="faq" className={`section-padding bg-[#0a0a0a] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-0 sm:px-4">
          <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-4">
            Najczęstsze <span className="text-gradient-pink">pytania</span>
          </h2>
          <p className="text-base leading-relaxed sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Odpowiadamy na to, co Cię może nurtować
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 px-0 sm:px-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="text-[1.0625rem] leading-tight sm:text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[0.9375rem] leading-[1.6] sm:text-base text-white/70 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center px-0 sm:px-4">
          <p className="text-white/60 mb-4 text-sm sm:text-base">Masz inne pytanie?</p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Napisz do nas →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
