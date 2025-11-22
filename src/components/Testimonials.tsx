import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Anna Kowalska",
      business: "Salon Piękności 'Metamorfoza' - Kielce",
      text: "Współpraca z Aurine to strzał w dziesiątkę! W miesiąc mieliśmy 23 nowe klientki z Facebooka. Dziewczyny są super kontaktowe i zawsze wiedzą co robią. Polecam z całego serca!",
      rating: 5,
    },
    {
      name: "Magdalena Wiśniewska",
      business: "Studio Urody 'Bella' - Radom",
      text: "Nigdy nie myślałam, że reklamy mogą tak działać. Po 3 miesiącach współpracy mój kalendarz jest pełny na 2 tygodnie do przodu. To najlepsza inwestycja w mój biznes!",
      rating: 5,
    },
    {
      name: "Katarzyna Nowak",
      business: "Beauty Room 'Glow' - Siedlce",
      text: "Profesjonalizm na najwyższym poziomie. Dokładnie wiedzą co robią, reklamy są przepiękne, a efekty przeszły moje oczekiwania. W końcu mam stabilny przepływ nowych klientek!",
      rating: 5,
    },
    {
      name: "Joanna Lewandowska",
      business: "Salon 'Beauty Lab' - Tarnów",
      text: "Po 2 miesiącach współpracy miałam problem... zbyt dużo rezerwacji! Musiałam zatrudnić dodatkową osobę. Dzięki Aurine mój salon wreszcie działa na pełnych obrotach.",
      rating: 5,
    },
    {
      name: "Paulina Dąbrowska",
      business: "Gabinet 'Perła' - Płock",
      text: "Mega konkretna ekipa! Wszystko jest przejrzyste, wiem ile wydaję i co z tego mam. Kampanie przynoszą efekty, a kontakt jest świetny. Najlepsza decyzja dla mojego salonu!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Co mówią nasze <span className="text-primary">klientki</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Prawdziwe historie salonów, które rozwinęły swój biznes dzięki naszym kampaniom
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary/20 shadow-xl shadow-primary/10">
                  <div className="flex items-center justify-center gap-1 mb-8">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="text-white text-center mb-10 text-lg md:text-xl leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="pt-8 border-t border-gray-700/30 text-center">
                    <p className="text-white font-semibold text-xl mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
