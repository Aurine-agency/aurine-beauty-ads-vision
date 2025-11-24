import { ArrowLeft, Target, Heart, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Specjalizacja w beauty",
      description: "Rozumiemy branżę beauty i jej specyfikę. Wiemy, jak ważna jest atmosfera, estetyka i relacje z klientkami.",
    },
    {
      icon: Target,
      title: "Konkretne efekty",
      description: "Skupiamy się na wymiernych rezultatach. Każda kampania jest dokładnie monitorowana i regularnie optymalizowana.",
    },
    {
      icon: Lightbulb,
      title: "Transparentność",
      description: "Jasne zasady współpracy, przejrzyste rozliczenia i regularne raporty. Zawsze wiesz, co się dzieje z Twoją kampanią.",
    },
    {
      icon: Users,
      title: "Partnerskie podejście",
      description: "Traktujemy Cię jak partnera, nie jak numer. Jesteśmy dostępni, słuchamy Twoich potrzeb i dostosowujemy się do możliwości.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Powrót do strony głównej
        </Link>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          O <span className="text-gradient-pink">Aurine</span>
        </h1>
        <p className="text-xl text-white/70 mb-16 max-w-3xl">
          Zespół specjalistów, który pomaga salonom beauty dotrzeć do nowych klientek
        </p>

        {/* Nasza historia */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Nasza historia</h2>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              Aurine powstało z prostej obserwacji: salony beauty w małych miastach mają ogromny potencjał, 
              ale często brakuje im skutecznych narzędzi marketingowych. Właścicielki salonów są profesjonalistkami 
              w swojej branży, ale prowadzenie kampanii reklamowych to zupełnie inna dziedzina.
            </p>
            <p>
              Pomagamy salonom kosmetycznym dotrzeć do nowych klientek poprzez profesjonalne kampanie reklamowe. 
              Specjalizujemy się w pracy z małymi miastami, gdzie rozumiemy lokalny rynek i wiemy, 
              jak skutecznie wykorzystać budżet reklamowy.
            </p>
            <p>
              Współpracujemy z salonami w całej Polsce, tworząc kampanie dopasowane do specyfiki 
              mniejszych społeczności i charakteru każdego salonu.
            </p>
          </div>
        </section>

        {/* Nasza misja */}
        <section className="mb-20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Nasza misja</h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Wspieramy właścicielki salonów beauty w małych miastach, dając im dostęp do profesjonalnych 
            kampanii reklamowych, które wcześniej były zarezerwowane dla dużych marek. Wierzymy, że każdy 
            salon zasługuje na pełny kalendarz wizyt i stabilny rozwój biznesu.
          </p>
          <p className="text-xl text-white/80 leading-relaxed mt-6">
            Nasze podejście opiera się na partnerstwie, przejrzystości i wymiernych rezultatach. 
            Nie sprzedajemy pustych obietnic – dostarczamy konkretne narzędzia i wiedzę, 
            które pomagają salonom rozwijać się w sposób zrównoważony.
          </p>
        </section>

        {/* Nasze wartości */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Nasze wartości</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dlaczego małe miasta */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Dlaczego małe miasta?</h2>
          <div className="space-y-4 text-white/80 text-lg leading-relaxed">
            <p>
              <strong className="text-white">Znamy lokalny rynek.</strong> Rozumiemy specyfikę małych społeczności, 
              gdzie rekomendacje i relacje mają ogromne znaczenie.
            </p>
            <p>
              <strong className="text-white">Mniejsza konkurencja reklamowa.</strong> W mniejszych miejscowościach 
              łatwiej wyróżnić się profesjonalną kampanią i dotrzeć do właściwych osób.
            </p>
            <p>
              <strong className="text-white">Realny wpływ.</strong> Widzimy, jak nasza praca przekłada się 
              na konkretne rezultaty – pełniejszy kalendarz wizyt, większe przychody, możliwość rozwoju.
            </p>
            <p>
              <strong className="text-white">Osobiste podejście.</strong> W małych miastach biznes to nie tylko cyfry, 
              ale przede wszystkim ludzie. Cenimy sobie relacje i autentyczną współpracę.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Chcesz dołączyć do grona naszych klientek?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Umów bezpłatną konsultację i poznaj możliwości, jakie dają kampanie reklamowe dla Twojego salonu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(328,100%,54%/0.6)]"
            >
              Skontaktuj się z nami
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center border-2 border-white/20 hover:border-primary text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/5"
            >
              Powrót do strony głównej
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
