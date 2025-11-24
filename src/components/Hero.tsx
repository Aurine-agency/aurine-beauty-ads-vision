import analyticsVisual from "@/assets/analytics-dashboard.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-[#0a0a0a] pt-24 sm:pt-28 md:pt-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(328,100%,54%/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(328,100%,70%/0.1),transparent_50%)]" />

      <div className="container mx-auto px-0 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center px-0 sm:px-0">
          {/* Text content */}
          <div className="text-left animate-fade-in-up lg:order-1">
            <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 sm:leading-tight">
              Więcej klientek
              <br />
              do Twojego
              <br />
              <span className="text-gradient-pink glow-pink">salonu</span>
            </h1>
            <p className="text-[1.0625rem] leading-relaxed sm:text-xl text-white/70 mb-8 max-w-xl">
              Prowadzimy kampanie reklamowe na Facebooku dla salonów beauty w małych miastach. Pomagamy budować rozpoznawalność i dotrzeć do odpowiednich osób.
            </p>
          </div>

          {/* Visual */}
          <div className="relative animate-scale-in w-full lg:order-2">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img
              src={analyticsVisual}
              alt="Facebook Ads Analytics"
              className="relative w-full h-auto rounded-2xl"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:order-3 lg:col-span-2 justify-center lg:justify-start relative">
            <button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(328,100%,54%/0.6)]"
            >
              Porozmawiajmy
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-white/20 hover:border-primary text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/5"
            >
              Zobacz co robimy
            </button>
            
            {/* Scroll indicator - mobile below buttons */}
            <div className="flex justify-center mt-8 lg:hidden">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 animate-bounce">
                <div className="w-1.5 h-3 bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - desktop at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:flex">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
