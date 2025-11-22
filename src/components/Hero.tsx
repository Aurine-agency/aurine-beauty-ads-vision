import analyticsVisual from "@/assets/analytics-visual.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-[#0a0a0a]"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(328,100%,54%/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(328,100%,70%/0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Więcej klientek
              <br />
              do Twojego
              <br />
              <span className="text-gradient-pink glow-pink">salonu</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Z pasją wspieramy salony kosmetyczne w przyciąganiu nowych klientek przez Facebook i Instagram. Profesjonalnie, przejrzyście i z sercem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img
              src={analyticsVisual}
              alt="Facebook Ads Analytics"
              className="relative w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
