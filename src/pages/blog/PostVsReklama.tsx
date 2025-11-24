import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PostVsReklama = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <article className="pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to="/porady"
            className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do porad
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">
                Facebook Marketing
              </span>
              <span className="flex items-center gap-2 text-sm text-white/50">
                <Clock className="w-4 h-4" />
                5 min czytania
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Post na Facebooku <span className="text-gradient-pink">≠</span> Reklama
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed">
              Większość właścicielek salonów myśli, że publikując post na swojej stronie na Facebooku, 
              automatycznie dociera do wszystkich obserwatorów. Niestety, to mit.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-white/80 text-lg leading-relaxed">
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Organiczny zasięg prawie nie istnieje</h2>
                <p>
                  Kiedy publikujesz zwykły post na stronie swojego salonu, Facebook pokazuje go średnio tylko 
                  <strong className="text-primary"> 2-5% Twoich obserwatorów</strong>. To znaczy, że jeśli masz 1000 
                  obserwujących, Twój post zobaczy zaledwie 20-50 osób.
                </p>
                <p className="mt-4">
                  Dlaczego? Bo Facebook jest biznesem. Jego celem jest zarabianie na reklamach, więc algorytm 
                  świadomie ogranicza zasięg organiczny, żebyś płacił za dotarcie do większej liczby osób.
                </p>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Co to znaczy w praktyce?</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Publikujesz zdjęcie nowej usługi → widzi to kilkadziesiąt osób, które już Cię znają</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Ogłaszasz promocję → dociera do ułamka Twoich obserwatorów</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Osoby, które NIE obserwują Twojej strony, w ogóle nie zobaczą Twoich postów</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Czym różni się reklama?</h2>
                <p>
                  Reklama na Facebooku to płatny sposób dotarcia do ludzi. Możesz precyzyjnie wybrać, 
                  kto zobaczy Twój komunikat:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong className="text-white">Lokalizacja:</strong> np. kobiety w promieniu 15 km od Twojego salonu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong className="text-white">Zainteresowania:</strong> osoby interesujące się urodą, kosmetyką, pielęgnacją</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong className="text-white">Wiek i płeć:</strong> dostosuj komunikat do grupy docelowej</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong className="text-white">Zasięg:</strong> dotrzesz do setek lub tysięcy osób, nie tylko do obserwatorów</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Czy to znaczy, że posty nie mają sensu?</h2>
                <p>
                  Nie! Posty organiczne nadal pełnią ważną funkcję:
                </p>
                <ul className="mt-4 space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>Budują wizerunek salonu dla osób, które już Cię znają</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>Pokazują aktualności, promocje, efekty pracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>Odpowiadają na pytania klientek w komentarzach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>Tworzą spójny profil, który ogląda ktoś, kto trafi na Twoją stronę</span>
                  </li>
                </ul>
                <p className="mt-6">
                  Jednak jeśli chcesz <strong className="text-white">dotrzeć do nowych osób, które jeszcze nie znają Twojego salonu</strong>, 
                  potrzebujesz reklam. Inaczej zostaniesz niewidoczna dla potencjalnych klientek.
                </p>
              </section>

              <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Podsumowanie</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    <strong className="text-white">Post organiczny</strong> = widzą go głównie osoby, które już obserwują Twoją stronę (2-5% z nich)
                  </p>
                  <p>
                    <strong className="text-white">Płatna reklama</strong> = widzą ją setki/tysiące osób z Twojego regionu, 
                    które dopasowujesz pod kątem zainteresowań i demografii
                  </p>
                  <p className="mt-6 text-primary font-semibold">
                    Jeśli chcesz, żeby nowe osoby dowiedziały się o Twoim salonie, posty organiczne nie wystarczą.
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
            <Link
              to="/porady"
              className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Wszystkie porady
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
            >
              Porozmawiajmy o kampanii
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default PostVsReklama;
