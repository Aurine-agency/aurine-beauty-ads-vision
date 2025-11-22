import { Target, TrendingUp, Users, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Precyzyjne targetowanie",
      description:
        "Z dbałością o detale docieramy do potencjalnych klientek z Twojego regionu, które aktywnie poszukują usług beauty. Precyzyjnie trafiamy w odpowiedni wiek, lokalizację i zainteresowania.",
    },
    {
      icon: TrendingUp,
      title: "Optymalizacja kampanii",
      description:
        "Z zaangażowaniem monitorujemy wyniki i wprowadzamy ulepszenia, aby maksymalizować wartość każdej wydanej złotówki. Dbamy o to, by każdy krok był przemyślany i skuteczny.",
    },
    {
      icon: Sparkles,
      title: "Profesjonalne kreacje",
      description:
        "Z pasją projektujemy atrakcyjne wizualnie reklamy z dopracowanymi tekstami, które naturalnie wyróżniają się w feedzie i ciepło przyciągają uwagę Twoich przyszłych klientek.",
    },
    {
      icon: Users,
      title: "Przejrzyste raportowanie",
      description:
        "Regularnie otrzymujesz szczegółowy, przejrzysty raport z wynikami kampanii oraz naszymi rekomendacjami. Zawsze wiesz dokładnie, za co płacisz i jakie efekty wspólnie osiągamy.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Co dla Ciebie
            <br />
            <span className="text-gradient-pink">zrobimy?</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Zajmujemy się wszystkim od A do Z
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
