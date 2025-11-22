import { Heart, Target, Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 blur-3xl rounded-full animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold">O Aurine</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Agencja stworzona
            <br />
            dla <span className="text-gradient-pink">branży beauty</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Nie jesteśmy kolejną agencją oferującą wszystko. Specjalizujemy się w jednym, ale robimy to z pasją i doskonałością – kampanie Facebook Ads dla salonów kosmetycznych.
          </p>
        </div>

        {/* Story cards */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-16">
          {/* Mission card */}
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all duration-300 animate-fade-in-up group">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nasza misja</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Większość agencji tworzy kampanie, które wyglądają atrakcyjnie wizualnie, ale nie przekładają się na realne zapisy na wizyty. My podeszliśmy do tego inaczej.
            </p>
            <p className="text-white/80 leading-relaxed">
              Skupiamy się wyłącznie na branży beauty, dzięki czemu dogłębnie rozumiemy specyfikę Waszego biznesu. Wiemy, co przemawia do klientek i jak skutecznie przekształcić ich zainteresowanie w konkretne rezerwacje.
            </p>
          </div>

          {/* Experience card */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-10 hover:border-primary/40 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nasze doświadczenie</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Przez ostatnie lata z zaangażowaniem współpracowaliśmy z dziesiątkami salonów w całej Polsce – od niewielkich miejscowości po większe miasta.
            </p>
            <p className="text-white/80 leading-relaxed">
              Każda kampania jest projektowana indywidualnie, bo rozumiemy, że każdy salon ma swoją unikalną ofertę i grupę docelową. Nie stosujemy gotowych schematów – tworzymy przemyślane rozwiązania dopasowane do Twoich potrzeb.
            </p>
          </div>
        </div>

        {/* Values section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12 animate-fade-in">
            Nasze wartości
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Autentyczność",
                description: "Mówimy wprost i szczerze. Jeśli coś wymaga korekty, informujemy o tym od razu, bez zbędnego opóźniania.",
              },
              {
                title: "Efektywność",
                description: "Każda złotówka z Twojego budżetu musi pracować. Prowadzimy kampanie przemyślanie, bez niepotrzebnych eksperymentów.",
              },
              {
                title: "Partnerstwo",
                description: "Z zaangażowaniem traktujemy Twój biznes jak własny. Twój sukces to nasz wspólny cel i satysfakcja.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed">
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
