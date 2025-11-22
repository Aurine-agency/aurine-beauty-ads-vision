import { ArrowRight, BookOpen, Camera, TrendingUp, Instagram } from "lucide-react";
import blogPreparation from "@/assets/blog-preparation.jpg";
import blogPhotos from "@/assets/blog-photos.jpg";
import blogAnalytics from "@/assets/blog-analytics.jpg";
import blogSocialMedia from "@/assets/blog-social-media.jpg";

const Blog = () => {
  const articles = [
    {
      id: 1,
      icon: BookOpen,
      title: "Jak przygotować salon do kampanii reklamowej?",
      excerpt: "Dowiedz się, co zrobić przed uruchomieniem kampanii, aby zmaksymalizować jej efektywność i być gotową na napływ nowych klientek.",
      image: blogPreparation,
      readTime: "5 min",
    },
    {
      id: 2,
      icon: Camera,
      title: "Jakie zdjęcia najlepiej działają w reklamach?",
      excerpt: "Poznaj sekrety profesjonalnych zdjęć, które przyciągają uwagę i przekonują potencjalne klientki do umówienia wizyty w Twoim salonie.",
      image: blogPhotos,
      readTime: "4 min",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Jak mierzyć efekty kampanii reklamowej?",
      excerpt: "Praktyczny poradnik, jak śledzić wyniki kampanii i rozumieć, czy Twoje pieniądze są dobrze wydane. Bez skomplikowanego żargonu.",
      image: blogAnalytics,
      readTime: "6 min",
    },
    {
      id: 4,
      icon: Instagram,
      title: "Content w social mediach - co publikować?",
      excerpt: "Sprawdzone pomysły na posty, które angażują Twoich obserwatorów i budują zaufanie do Twojego salonu jeszcze przed pierwszą wizytą.",
      image: blogSocialMedia,
      readTime: "5 min",
    },
  ];

  return (
    <section id="blog" className="section-padding bg-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Poradnik dla właścicielek
            <br />
            <span className="text-gradient-pink">salonów</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Praktyczne porady, które pomogą Ci osiągnąć lepsze rezultaty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(328,100%,54%/0.2)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.readTime}
                </div>
                <div className="absolute bottom-4 left-4 bg-primary/20 backdrop-blur-sm p-2 rounded-lg">
                  <article.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Czytaj więcej
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
