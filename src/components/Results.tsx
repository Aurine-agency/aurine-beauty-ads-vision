import { ArrowUpRight, Users2, DollarSign, TrendingUp } from "lucide-react";
import beautyIcons from "@/assets/beauty-icons.png";

const Results = () => {
  const stats = [
    {
      icon: Users2,
      value: "3x więcej",
      label: "Nowych klientek",
      description: "Średnio u naszych klientek",
    },
    {
      icon: DollarSign,
      value: "15-30",
      label: "Nowych klientek",
      description: "Co miesiąc w małym mieście",
    },
    {
      icon: TrendingUp,
      value: "Od 1500 zł",
      label: "Miesięcznie",
      description: "Budżet + obsługa",
    },
  ];

  return (
    <section id="results" className="section-padding bg-black relative overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={beautyIcons}
          alt=""
          className="w-full h-full object-cover mix-blend-screen"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Co możesz <span className="text-gradient-pink">zyskać</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Realne efekty, które poczujesz w swoim salonie
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-6xl mx-auto px-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 glow-pink">{stat.value}</div>
              <div className="text-base sm:text-lg font-semibold text-white/90 mb-1">{stat.label}</div>
              <div className="text-xs sm:text-sm text-white/60">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Benefits list */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 animate-fade-in px-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Dlaczego warto z nami pracować?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              "Zajmujemy się tylko salonami kosmetycznymi – znamy tę branżę od podszewki",
              "Zawsze wiesz za co płacisz i jakie są efekty – zero ukrytych kosztów",
              "Możesz odejść w każdej chwili – rozliczamy się co miesiąc, bez wiązania na lata",
              "Możesz do nas napisać czy zadzwonić kiedy chcesz – nie jesteśmy duchem",
              "Dbamy o Twój budżet jak o własny – nie wyrzucamy pieniędzy w błoto",
              "Pomożemy Ci ze zdjęciami i tekstami – nie musisz być ekspertem od marketingu",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-fade-in text-sm sm:text-base"
                style={{ animationDelay: `${index * 0.05 + 0.3}s` }}
              >
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
