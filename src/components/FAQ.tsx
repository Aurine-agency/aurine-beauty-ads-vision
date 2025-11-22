import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Jak ustalamy cenę współpracy?",
      answer:
        "Każdy salon jest inny, dlatego podchodzimy do każdego klienta indywidualnie. Cena zależy od Twojego budżetu, celów i zakresu kampanii. Podczas pierwszej konsultacji omówimy Twoją sytuację i stworzymy ofertę dopasowaną do Twoich potrzeb i możliwości.",
    },
    {
      question: "Jak długo trzeba czekać na efekty?",
      answer:
        "Pierwsze zapytania i telefony od klientek przychodzą już w pierwszym tygodniu. Pełny obraz sytuacji masz po około miesiącu - wtedy widzimy co działa najlepiej i możemy to podkręcić.",
    },
    {
      question: "Czy to działa w małych miastach?",
      answer:
        "Działa super! Facebook pozwala nam pokazywać reklamy dokładnie osobom z Twojego miasta i okolic. Często w małych miejscowościach jest łatwiej, bo konkurencja nie robi reklam albo robi je źle.",
    },
    {
      question: "Czy muszę dać dostęp do mojego Facebooka?",
      answer:
        "Tak, ale spokojnie - dostęp będzie tylko do części reklamowej (Business Manager). Nie mamy dostępu do Twojego prywatnego profilu ani wiadomości. Wszystko jest bezpieczne i zgodne z zasadami Facebooka.",
    },
    {
      question: "Co jeśli nie będę zadowolona?",
      answer:
        "Rozliczamy się miesięcznie, więc nie ma długich umów. Jak coś Ci nie pasuje, po prostu kończymy współpracę. Ale zwykle po pierwszym miesiącu klientki są zadowolone i zostają z nami na dłużej :)",
    },
    {
      question: "Czy potrzebuję profesjonalnych zdjęć?",
      answer:
        "Pomożemy Ci z tym! Możemy wykorzystać zdjęcia, które już masz, albo podpowiemy jak zrobić dobre zdjęcia telefonem. Jeśli będzie potrzeba, znajdziemy fotografa w Twojej okolicy.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Najczęstsze <span className="text-gradient-pink">pytania</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Odpowiadamy na to, co Cię może nurtować
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-white/70 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">Masz inne pytanie?</p>
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
