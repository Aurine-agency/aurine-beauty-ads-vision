import { Heart, Target, Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 blur-3xl rounded-full animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in px-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm sm:text-base">O Aurine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Agencja dla salonów
            <br />
            w <span className="text-gradient-pink">małych miastach</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Wiemy, jak to jest prowadzić salon poza dużym miastem. Pomagamy właścicielkom salonów kosmetycznych przyciągnąć klientki z okolicy – szczerze, bez obietnic bez pokrycia.
          </p>
        </div>

        {/* Story cards */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {/* Mission card */}
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-primary/30 transition-all duration-300 animate-fade-in-up group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Nasza misja</h3>
            <p className="text-white/80 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Wierzymy, że każdy salon – niezależnie od tego, czy jest w dużym mieście, czy w małej miejscowości – zasługuje na pełen terminarz.
            </p>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              Skupiamy się na salonach w mniejszych miejscowościach, ponieważ wiemy, że tam reklamy online mogą zdziałać cuda. Lokalna konkurencja często nie prowadzi kampanii albo robi to nieskutecznie – a my pomagamy Ci to wykorzystać.
            </p>
          </div>

          {/* Experience card */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-primary/40 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/30 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Jak pracujemy</h3>
            <p className="text-white/80 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Znamy specyfikę branży beauty i wiemy, jak dotrzeć do kobiet szukających usług kosmetycznych. Rozumiemy, czego potrzebują właścicielki salonów w małych miastach.
            </p>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              Każda kampania jest dopasowana indywidualnie – nie ma u nas szablonów. Twój salon, Twoje miasto i Twoja sytuacja są unikalne, więc tak właśnie traktujemy każdą współpracę.
            </p>
          </div>
        </div>

        {/* Values section */}
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12 animate-fade-in">
            Nasze wartości
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Szczerość",
                description: "Mówimy wprost, bez ściemy. Zawsze wiesz, co się dzieje z Twoją kampanią i na co idą pieniądze.",
              },
              {
                title: "Efekty",
                description: "Liczy się to, co faktycznie widzisz – więcej telefonów, pełniejszy terminarz, zadowolone klientki.",
              },
              {
                title: "Wsparcie",
                description: "Nie zostawiamy Cię samej. Jesteśmy na telefon, pomagamy i szybko reagujemy na Twoje potrzeby.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {value.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
