import { useState } from "react";
import { TrendingUp, Users, DollarSign, ChevronRight } from "lucide-react";
import caseChart1 from "@/assets/case-study-chart-1.png";
import caseChart2 from "@/assets/case-study-chart-2.png";
import beforeAfter from "@/assets/case-study-before-after.png";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      salon: "Studio Urody - Mława",
      owner: "Katarzyna",
      challenge: "Nowy salon bez bazy klientek, potrzeba szybkiego rozruchu",
      solution: "Kampania z promocją otwarcia + targetowanie lokalnych kobiet 25-45 lat",
      results: {
        clients: "32 nowe klientki",
        revenue: "+18,000 zł",
        roi: "ROI 3.2x",
        period: "Pierwsze 2 miesiące",
      },
      testimonial: "Nie spodziewałam się tak szybkich efektów. Już w drugim tygodniu kalendarz zaczął się wypełniać. Zespół Aurine pomógł mi profesjonalnie wystartować z biznesem i czuję, że mogę na nich polegać.",
      image: caseChart1,
      stats: [
        { icon: Users, label: "Nowe klientki", value: "32" },
        { icon: DollarSign, label: "Przychód", value: "+18k zł" },
        { icon: TrendingUp, label: "ROI", value: "3.2x" },
      ],
    },
    {
      salon: "Gabinet Kosmetyczny - Ostrów Mazowiecka",
      owner: "Magdalena",
      challenge: "Sezonowość biznesu, puste terminy w miesiącach zimowych",
      solution: "Kampania edukacyjna + promocje na zabiegi zimowe + remarketing",
      results: {
        clients: "45 nowych klientek",
        revenue: "+27,000 zł",
        roi: "ROI 4.1x",
        period: "3 miesiące zimowe",
      },
      testimonial: "Zima zawsze była trudnym okresem. Dzięki kampanii prowadzonej przez Aurine pierwszy raz miałam pełen grafik również w styczniu i lutym. To całkowicie zmieniło sposób, w jaki postrzegam rozwój mojego biznesu.",
      image: caseChart2,
      stats: [
        { icon: Users, label: "Nowe klientki", value: "45" },
        { icon: DollarSign, label: "Przychód", value: "+27k zł" },
        { icon: TrendingUp, label: "ROI", value: "4.1x" },
      ],
    },
    {
      salon: "Salon Beauty - Płońsk",
      owner: "Anna",
      challenge: "Duża konkurencja w mieście, trudność w wyróżnieniu się",
      solution: "Kampania z unikalną ofertą + kreacje premium + A/B testing",
      results: {
        clients: "28 nowych klientek",
        revenue: "+22,000 zł",
        roi: "ROI 3.8x",
        period: "2 miesiące",
      },
      testimonial: "W małym mieście jest kilka salonów. Myślałam, że ciężko będzie się wyróżnić. Kampania prowadzona przez Aurine pokazała, że profesjonalne podejście naprawdę robi różnicę. Teraz jestem pierwszym wyborem moich klientek.",
      image: beforeAfter,
      stats: [
        { icon: Users, label: "Nowe klientki", value: "28" },
        { icon: DollarSign, label: "Przychód", value: "+22k zł" },
        { icon: TrendingUp, label: "ROI", value: "3.8x" },
      ],
    },
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section id="case-studies" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Prawdziwe <span className="text-gradient-pink">sukcesy</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Przykłady kampanii, które przeprowadziliśmy
          </p>
        </div>

        {/* Case study selector */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-sm sm:text-base ${
                activeCase === index
                  ? "bg-primary text-white shadow-[0_0_20px_hsl(328,100%,54%/0.4)]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {study.salon}
            </button>
          ))}
        </div>

        {/* Case study content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left column - Image and stats */}
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <img
                  src={currentCase.image}
                  alt={`Case study ${currentCase.salon}`}
                  className="w-full h-auto"
                />
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4">
                {currentCase.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Details */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {currentCase.salon}
                </h3>
                <p className="text-white/60">Właścicielka: {currentCase.owner}</p>
              </div>

              {/* Challenge */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Wyzwanie
                </h4>
                <p className="text-white/80">{currentCase.challenge}</p>
              </div>

              {/* Solution */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Nasze rozwiązanie
                </h4>
                <p className="text-white/80">{currentCase.solution}</p>
              </div>

              {/* Results box */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Wyniki kampanii:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="text-white">{currentCase.results.clients}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="text-white">{currentCase.results.revenue} przychodu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="text-white">{currentCase.results.roi}</span>
                  </div>
                  <div className="text-white/60 text-sm mt-3">
                    {currentCase.results.period}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 italic">
                <p className="text-white/90 leading-relaxed">
                  "{currentCase.testimonial}"
                </p>
                <p className="text-primary font-semibold mt-4">
                  – {currentCase.owner}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
