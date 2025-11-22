import { Target, TrendingUp, Users, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Precyzyjne targetowanie",
      description:
        "Twoje reklamy docierają do kobiet z Twojego regionu, które aktywnie szukają usług beauty. Ustawiamy parametry tak, aby każda złotówka trafiała do właściwej osoby – nie marnujemy Twojego budżetu.",
    },
    {
      icon: TrendingUp,
      title: "Optymalizacja kampanii",
      description:
        "Codziennie analizujemy wyniki i dostosowujemy strategię. Testujemy różne podejścia i skalujemy to, co działa najlepiej – dzięki temu obniżamy koszty i zwiększamy efekty.",
    },
    {
      icon: Sparkles,
      title: "Profesjonalne kreacje",
      description:
        "Tworzymy reklamy, które zatrzymują wzrok. Estetyczne grafiki i teksty pisane językiem korzyści, które przekonują do umówienia wizyty właśnie w Twoim salonie.",
    },
    {
      icon: Users,
      title: "Przejrzyste raportowanie",
      description:
        "Co tydzień otrzymujesz zrozumiały raport pokazujący najważniejsze dane – wyświetlenia, kliknięcia, zapytania i koszt pozyskania klientki. Zawsze wiesz, jak przebiega kampania.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Co dla Ciebie
            <br className="sm:hidden" />
            <span className="text-gradient-pink"> zrobimy</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Zajmujemy się wszystkim, co potrzebne – Ty skupiasz się na tym, co robisz najlepiej
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(328,100%,54%/0.2)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
