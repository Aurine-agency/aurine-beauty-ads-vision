import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogIndex = () => {
  const articles = [
    {
      slug: "post-vs-reklama",
      title: "Post na Facebooku ≠ Reklama",
      description: "Większość właścicielek salonów myśli, że publikując post na Facebooku, dociera do swoich obserwatorów. Niestety, to mit. Zobacz, jaka jest różnica i dlaczego organiczny zasięg prawie nie istnieje.",
      readTime: "5 min",
      category: "Facebook Marketing",
    },
    {
      slug: "jak-prowadzic-profil-salonu",
      title: "Jak prowadzić profil salonu na Facebooku",
      description: "Praktyczny poradnik - co publikować, jak często i jak budować zaangażowanie bez wydawania pieniędzy na reklamy. Dowiedz się, jak tworzyć wartościowe treści dla Twoich obserwatorów.",
      readTime: "7 min",
      category: "Social Media",
    },
    {
      slug: "kiedy-warto-reklamowac",
      title: "Kiedy warto inwestować w reklamy",
      description: "Nie każdy salon potrzebuje kampanii reklamowych od razu. Sprawdź, czy Twój biznes jest gotowy na płatne reklamy i co powinieneś wcześniej przygotować, żeby nie zmarnować budżetu.",
      readTime: "6 min",
      category: "Strategie",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do strony głównej
          </Link>

          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Bezpłatne porady</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-gradient-pink">Porady</span> dla salonów beauty
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              Praktyczna wiedza o marketingu w social media, która pomoże Ci rozwinąć salon - 
              bez pustych obietnic i skomplikowanego żargonu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link
                key={index}
                to={`/porady/${article.slug}`}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(328,100%,54%/0.3)] hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/50">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-white/70 leading-relaxed">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogIndex;
