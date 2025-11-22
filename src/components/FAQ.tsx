import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Ile to kosztuje?",
      answer:
        "Każda współpraca to inna historia, inne potrzeby, inny budżet. Dlatego nie mamy sztywnych pakietów – dostosowujemy się do Twojej sytuacji. Najlepiej po prostu porozmawiać, wtedy wszystko stanie się jasne i ustalimy warunki, które będą dobre dla Ciebie.",
    },
    {
      question: "Jak długo czekać na pierwsze efekty?",
      answer:
        "Pierwsze telefony od zainteresowanych klientek zazwyczaj przychodzą już w pierwszym tygodniu. Po miesiącu masz pełny obraz tego, jak idzie i co możemy jeszcze poprawić, żeby działało jeszcze lepiej.",
    },
    {
      question: "Czy to ma sens w małym mieście?",
      answer:
        "Tak! Facebook pozwala dotrzeć dokładnie do kobiet z Twojego miasta, które szukają usług kosmetycznych. W małych miejscowościach często działa to nawet lepiej niż w dużych miastach, bo konkurencja albo nie prowadzi reklam, albo robi je źle.",
    },
    {
      question: "Muszę dać Wam dostęp do mojego Facebooka?",
      answer:
        "Tak, ale spokojnie – dostęp tylko do części reklamowej (Business Manager). Nie widzimy Twojego prywatnego profilu ani wiadomości. Wszystko zgodne z zasadami i bezpieczne.",
    },
    {
      question: "Co jak mi się nie spodoba?",
      answer:
        "Możesz odejść w każdej chwili – rozliczamy się co miesiąc, bez wiązania. Jeśli coś Ci nie pasuje, możemy po prostu zakończyć. Ale zwykle po pierwszym miesiącu właścicielki zostają, bo widzą, że działa :)",
    },
    {
      question: "Nie mam profesjonalnych zdjęć, co teraz?",
      answer:
        "Spokojnie! Możemy wykorzystać zdjęcia, które już masz. Pokażemy Ci jak zrobić dobre zdjęcia telefonem. A jeśli będzie trzeba, znajdziemy dobrego fotografa w Twojej okolicy.",
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
