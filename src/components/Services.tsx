import { Target, TrendingUp, Users, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Trafiamy do prawdziwych klientek",
      description:
        "Pokazujemy Twoje reklamy kobietom z Twojego miasta, które szukają takich usług jak Ty oferujesz.",
    },
    {
      icon: TrendingUp,
      title: "Pilnujemy Twojego budżetu",
      description:
        "Na bieżąco sprawdzamy co działa najlepiej i dbamy, żebyś płaciła tylko za to, co przynosi efekty.",
    },
    {
      icon: Sparkles,
      title: "Ładne reklamy",
      description:
        "Robimy takie grafiki i teksty, żeby klientki chciały zatrzymać się i kliknąć. Bez zbędnego kombinowania.",
    },
    {
      icon: Users,
      title: "Wiesz co się dzieje",
      description:
        "Co miesiąc dostaniesz jasny raport - ile osób widziało reklamy, ile dzwoniło, ile przyszło. Wszystko na prostą.",
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
