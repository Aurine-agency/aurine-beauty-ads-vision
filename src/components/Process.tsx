import { MessageSquare, LineChart, Palette, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Rozmowa bez zobowiązań",
      description:
        "Rozmawiamy o Twoim salonie, co chcesz osiągnąć i jaki masz budżet. Wszystko jest jasne i proste – bez ukrytych kosztów czy niejasności. Po prostu szczera rozmowa.",
    },
    {
      icon: Palette,
      number: "02",
      title: "Przygotowanie reklam",
      description:
        "Projektujemy grafiki i teksty do reklam. Przygotowujemy kilka wersji, żeby przetestować, co zadziała najlepiej. Możesz być spokojna – wszystko będzie wyglądało profesjonalnie.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Uruchomienie",
      description:
        "Ustawiamy kampanię tak, żeby dotrzeć do właściwych osób w Twojej okolicy. Od tego momentu Twoje reklamy zaczynają działać – kobiety z Twojego miasta i okolic zobaczą Twoją ofertę.",
    },
    {
      icon: LineChart,
      number: "04",
      title: "Dbamy o wyniki",
      description:
        "Codziennie sprawdzamy, co działa i wprowadzamy poprawki. Co tydzień dostajesz prosty raport – bez skomplikowanych liczb, tylko najważniejsze informacje i to, co faktycznie się wydarzyło.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Jak to <span className="text-gradient-pink">wygląda</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Proste kroki – bez zbędnych komplikacji i branżowego bełkotu
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative mb-12 last:mb-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[2.75rem] top-24 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
              )}

              <div className="flex gap-6 md:gap-8 items-start">
                {/* Number and icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
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
