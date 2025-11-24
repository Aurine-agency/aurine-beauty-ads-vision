import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const BlogPreview = () => {
  const { ref, isVisible } = useScrollAnimation();

  const articles = [
    {
      slug: "post-vs-reklama",
      title: "Post na Facebooku ≠ Reklama",
      description: "Większość właścicielek salonów myśli, że publikując post na Facebooku, dociera do swoich obserwatorów. Niestety, to mit. Zobacz, jaka jest różnica.",
      readTime: "5 min",
    },
    {
      slug: "jak-prowadzic-profil-salonu",
      title: "Jak prowadzić profil salonu na Facebooku",
      description: "Praktyczny poradnik - co publikować, jak często i jak budować zaangażowanie bez wydawania pieniędzy na reklamy.",
      readTime: "7 min",
    },
    {
      slug: "kiedy-warto-reklamowac",
      title: "Kiedy warto inwestować w reklamy",
      description: "Nie każdy salon potrzebuje kampanii reklamowych. Sprawdź, czy Twój biznes jest gotowy na płatne reklamy i co powinieneś wcześniej przygotować.",
      readTime: "6 min",
    },
  ];

  return (
    <section
      ref={ref}
      id="blog"
      className={`section-padding bg-[#0a0a0a] relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-0 sm:px-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Bezpłatne porady</span>
          </div>
          <h2 className="text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-4">
            Wiedza, którą <span className="text-gradient-pink">możesz wykorzystać</span>
          </h2>
          <p className="text-base leading-relaxed sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Praktyczne wskazówki dla właścicielek salonów beauty - bez wody, konkretnie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-0 sm:px-4 mb-12">
          {articles.map((article, index) => (
            <Link
              key={index}
              to={`/porady/${article.slug}`}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(328,100%,54%/0.3)] animate-fade-in-up hover:scale-[1.02] hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs text-white/50">{article.readTime} czytania</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">{article.description}</p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                Czytaj więcej
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/porady"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            Zobacz wszystkie porady
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
