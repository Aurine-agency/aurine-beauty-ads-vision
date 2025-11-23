import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Katarzyna Nowak",
      business: "Studio Urody - Mława",
      text: "Współpraca z Aurine to była najlepsza decyzja. Pierwszy miesiąc przyniósł 18 nowych klientek przez Facebook. Teraz mój kalendarz jest pełny, a ja mogę skupić się na tym, co kocham. Zespół zawsze jest dostępny i wszystko tłumaczy prostym językiem.",
      rating: 5,
    },
    {
      name: "Magdalena Kowalska",
      business: "Gabinet Kosmetyczny - Ostrów Mazowiecka",
      text: "Miałam wątpliwości, czy reklamy na Facebooku sprawdzą się w małym mieście. Po trzech miesiącach współpracy to była najlepsza inwestycja w biznes. Telefon nie przestaje dzwonić, a większość nowych klientek zostaje na stałe.",
      rating: 5,
    },
    {
      name: "Anna Wiśniewska",
      business: "Salon Beauty - Płońsk",
      text: "Mogę skupić się na tym, co robię najlepiej – pracy z klientkami. Aurine zajmuje się wszystkim: reklamami, grafikami, tekstami. Regularnie dostaję raporty i wiem dokładnie, za co płacę.",
      rating: 5,
    },
    {
      name: "Joanna Lewandowska",
      business: "Salon Piękności - Ciechanów",
      text: "Kampanie przyniosły nie tylko nowe klientki, ale pomogły zbudować rozpoznawalność salonu w okolicy. Po pół roku współpracy mogę powiedzieć, że to najlepsza decyzja biznesowa, jaką podjęłam.",
      rating: 5,
    },
    {
      name: "Monika Zielińska",
      business: "Gabinet Kosmetologii - Przasnysz",
      text: "Aurine rozumie potrzeby małych salonów. Nie wciskają drogich pakietów, tylko dostosowują się do budżetu. Efekty przeszły oczekiwania – salon jest pełny, a ja planuję zatrudnić drugą osobę.",
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
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Opinie <span className="text-gradient-pink">klientek</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Właścicielki salonów, które nam zaufały
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative px-0 sm:px-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-0 sm:px-4 flex justify-center"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-none sm:rounded-2xl p-4 sm:p-6 md:p-8 w-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-3 sm:mb-4 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-sm sm:text-base md:text-lg text-white/90 mb-5 sm:mb-6 leading-relaxed text-center">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="text-center border-t border-white/10 pt-3 sm:pt-4">
                      <div className="font-semibold text-white text-sm sm:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-white/60">{testimonial.business}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-full flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 sm:w-8 bg-primary"
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
