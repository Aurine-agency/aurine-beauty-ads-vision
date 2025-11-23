import { MessageSquare, LineChart, Palette, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Rozmowa i strategia",
      description:
        "Rozmawiamy o Twoim salonie, usługach i celach. Poznajemy Twoją historię i to, co jest dla Ciebie ważne. Ustalamy budżet reklamowy i określamy, jak będzie wyglądała nasza współpraca.",
    },
    {
      icon: Palette,
      number: "02",
      title: "Kreacje reklamowe",
      description:
        "Projektujemy profesjonalne grafiki i piszemy teksty reklamowe dopasowane do charakteru Twojego salonu. Przygotowujemy kilka wariantów, aby przetestować, co działa najlepiej w Twoim regionie.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Uruchomienie kampanii",
      description:
        "Konfigurujemy precyzyjne targetowanie i uruchamiamy kampanie. Od tego momentu Twoje reklamy zaczynają docierać do kobiet z Twojego miasta, które szukają usług beauty.",
    },
    {
      icon: LineChart,
      number: "04",
      title: "Optymalizacja i raportowanie",
      description:
        "Codziennie monitorujemy wyniki i wprowadzamy usprawnienia. Co tydzień wysyłamy raport z najważniejszymi danymi i rekomendacjami na kolejny okres – zawsze wiesz, jak przebiega kampania.",
    },
  ];

  return (
    <section ref={ref} id="process" className={`section-padding bg-[#0a0a0a] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-0 sm:px-4">
          <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-4">
            Jak to <span className="text-gradient-pink">wygląda</span>
          </h2>
          <p className="text-base leading-relaxed sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Prosty, przejrzysty proces – od pierwszej rozmowy do wymiernych efektów
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-0 sm:px-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative mb-8 sm:mb-12 last:mb-0 animate-fade-in-up px-0 sm:px-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[2.5rem] sm:left-[2.75rem] top-20 sm:top-24 w-0.5 h-8 sm:h-12 bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
              )}

              <div className="flex gap-4 sm:gap-6 md:gap-8 items-start">
                {/* Number and icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 sm:pt-2 min-w-0">
                  <h3 className="text-[1.125rem] leading-tight sm:text-2xl font-semibold text-white mb-3 sm:mb-3">{step.title}</h3>
                  <p className="text-[0.9375rem] leading-[1.6] sm:text-base text-white/70">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
