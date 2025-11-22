import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Katarzyna Nowak",
      business: "Studio Urody - Mława",
      text: "Współpraca z Aurine to był strzał w dziesiątkę. Pierwszy miesiąc przyniósł 18 nowych klientek, które znalazły mnie przez Facebook. Teraz mój kalendarz jest pełny, a ja mogę się skupić na pracy, którą kocham. Dziewczyny z Aurine zawsze są dostępne i wszystko tłumaczą w prosty sposób.",
      rating: 5,
    },
    {
      name: "Magdalena Kowalska",
      business: "Gabinet Kosmetyczny - Ostrów Mazowiecka",
      text: "Na początku miałam wątpliwości, czy reklamy na Facebooku sprawdzą się w małym mieście. Po trzech miesiącach współpracy muszę przyznać, że to była najlepsza inwestycja w mój biznes. Telefon nie przestaje dzwonić, a większość nowych klientek zostaje ze mną na stałe.",
      rating: 5,
    },
    {
      name: "Anna Wiśniewska",
      business: "Salon Beauty - Płońsk",
      text: "Wreszcie mogę się skupić na tym, co robię najlepiej – pracy z klientkami. Aurine zajmuje się wszystkim: reklamami, grafikami, tekstami. Regularnie dostaję raporty i wiem dokładnie, za co płacę. Profesjonalizm na najwyższym poziomie.",
      rating: 5,
    },
    {
      name: "Joanna Lewandowska",
      business: "Salon Piękności - Ciechanów",
      text: "Kampanie prowadzone przez Aurine przyniosły mi nie tylko nowe klientki, ale także pomogły zbudować rozpoznawalność salonu w okolicy. Po pół roku współpracy mogę śmiało powiedzieć, że to najlepsza decyzja biznesowa, jaką podjęłam.",
      rating: 5,
    },
    {
      name: "Monika Zielińska",
      business: "Gabinet Kosmetologii - Przasnysz",
      text: "Aurine naprawdę rozumie potrzeby małych salonów. Nie próbują wciskać drogich pakietów, tylko dostosowują się do mojego budżetu. Efekty przeszły moje oczekiwania – salon jest pełny, a ja planuję zatrudnić drugą osobę do pomocy.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Opinie <span className="text-gradient-pink">klientek</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Właścicielki salonów, które nam zaufały
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-xl text-white/90 mb-8 leading-relaxed text-center">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="text-center border-t border-white/10 pt-6">
                      <div className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-white/60">{testimonial.business}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
