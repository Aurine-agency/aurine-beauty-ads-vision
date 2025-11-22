import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kasia",
      business: "Studio Urody - Mława",
      text: "Przez pierwszy miesiąc przyszło do mnie 15 nowych klientek z Facebooka! W małym mieście to naprawdę dużo. Dziewczyny z Aurine wiedziały co robią.",
      rating: 5,
    },
    {
      name: "Magda",
      business: "Gabinet Kosmetyczny - Ostrów Mazowiecka",
      text: "Myślałam, że reklamy na Facebooku to ściema, ale postanowiłam spróbować. Po 3 miesiącach mój kalendarz był pełny! Szczerze polecam.",
      rating: 5,
    },
    {
      name: "Ania",
      business: "Salon Beauty - Płońsk",
      text: "Najlepsze to, że mogę się skupić na pracy z klientkami, a reklamy idą same. Dzwonią, pytają, zapisują się. Dokładnie o to mi chodziło!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Co mówią nasze <span className="text-gradient-pink">klientki?</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Właścicielki salonów, które nam zaufały
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-white/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-white/60">{testimonial.business}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
