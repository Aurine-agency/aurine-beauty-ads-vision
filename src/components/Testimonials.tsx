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
      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
    ));
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">

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
                <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-black via-black to-black px-10 py-12 md:px-16 md:py-14 overflow-hidden shadow-[0_0_40px_hsl(var(--primary)/0.18)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_transparent_55%)] opacity-80" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-1 mb-8">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="text-white text-center mb-12 text-lg md:text-xl leading-relaxed font-light">
                      "{testimonial.text}"
                    </p>

                    <div className="pt-6 border-t border-white/10 text-center">
                      <p className="text-white font-semibold text-lg mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.business}
                      </p>
                    </div>
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
