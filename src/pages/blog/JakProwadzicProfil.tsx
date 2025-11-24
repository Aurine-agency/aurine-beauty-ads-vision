import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const JakProwadzicProfil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <article className="pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs 
            items={[
              { label: "Porady", href: "/porady" },
              { label: "Jak prowadzić profil salonu na Facebooku", href: "/porady/jak-prowadzic-profil-salonu" }
            ]}
          />

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
                Social Media
              </span>
              <span className="flex items-center gap-2 text-sm text-white/50">
                <Clock className="w-4 h-4" />
                7 min czytania
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Jak prowadzić profil <span className="text-gradient-pink">salonu na Facebooku</span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed">
              Tworzenie wartościowych treści i budowanie społeczności wokół salonu nie wymaga dużego budżetu. 
              Wystarczy plan i konsekwencja.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-white/80 text-lg leading-relaxed">
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Co publikować na profilu salonu?</h2>
                <p>
                  Wiele właścicielek salonów nie wie, co publikować na Facebooku. Efekt? Albo nie publikują nic, 
                  albo wrzucają tylko zdjęcia prac i promocje. To za mało, żeby budować zaangażowaną społeczność.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">1. Efekty pracy (before & after)</h3>
                <p>
                  To najważniejszy typ treści. Ludzie chcą widzieć, co potrafisz. Publikuj zdjęcia przed i po:
                </p>
                <ul className="mt-4 space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Paznokcie, makijaż, brwi - pokaż różnicę</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Dodaj krótki opis: jaka technika, jak długo trwało</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Nie przesadzaj z filtrem - niech zdjęcia będą naturalne</span>
                  </li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">Jak często?</strong> Minimum 2-3 razy w tygodniu.
                </p>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">2. Edukacja i porady</h3>
                <p className="mb-4">
                  Dziel się wiedzą! To buduje zaufanie i pozycjonuje Cię jako eksperta:
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>"Jak przygotować paznokcie przed stylizacją"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>"3 błędy, które niszczą Twoje brwi"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>"Dlaczego manicure hybrydowy trwa krócej latem?"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    <span>"Jak rozpoznać dobrej jakości kosmetyki do pielęgnacji"</span>
                  </li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">Jak często?</strong> 1-2 razy w tygodniu.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">3. Kulisy pracy w salonie</h3>
                <p>
                  Ludzie lubią zaglądać "za kulisy". Pokaż, jak wygląda Twoja praca:
                </p>
                <ul className="mt-4 space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Krótkie nagranie z wykonywania stylizacji</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Zdjęcie miejsca pracy, nowych kosmetyków</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Opowiedz o nowej technice, którą się uczysz</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-white mb-4">4. Promocje i aktualności</h3>
                <p>
                  Komunikaty związane z działalnością salonu - ale nie tylko o tym:
                </p>
                <ul className="mt-4 space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Wolne terminy na najbliższy tydzień</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Nowa usługa w ofercie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Zmiany w godzinach otwarcia, urlop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Okolicznościowe promocje (np. Dzień Kobiet, Walentynki)</span>
                  </li>
                </ul>
                <p className="mt-4 text-white/60 text-base">
                  <strong className="text-white">Ważne:</strong> Nie publikuj wyłącznie promocji. 80% treści 
                  powinno dawać wartość (edukacja, porady, efekty), a tylko 20% to promocja.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Jak często publikować?</h2>
                <p>
                  Nie musisz publikować codziennie. Lepiej rzadziej, ale regularnie:
                </p>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 mt-6">
                  <p className="text-white font-semibold mb-3">Optymalny harmonogram:</p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-3">
                      <span className="text-primary">✓</span>
                      <span><strong>Minimum:</strong> 2-3 posty w tygodniu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary">✓</span>
                      <span><strong>Idealnie:</strong> 4-5 postów w tygodniu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary">✓</span>
                      <span><strong>Najlepsze dni:</strong> Wtorek-Czwartek, 10:00-14:00 i 18:00-20:00</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Jak angażować obserwatorów?</h2>
                <p>
                  Publikowanie to jedno, ale ważne jest też budowanie interakcji:
                </p>
                <ul className="mt-6 space-y-4 text-white/70">
                  <li>
                    <strong className="text-white block mb-2">Zadawaj pytania</strong>
                    "Jaki kolor paznokci najbardziej lubicie na jesień?" lub "Manicure klasyczny czy hybrydowy?"
                  </li>
                  <li>
                    <strong className="text-white block mb-2">Odpowiadaj na komentarze</strong>
                    Każdy komentarz to szansa na interakcję. Odpowiadaj szybko i przyjaźnie.
                  </li>
                  <li>
                    <strong className="text-white block mb-2">Użyj Stories</strong>
                    Krótkie relacje z dnia w salonie, ankiety, pytania - to wszystko buduje relację z obserwatorami.
                  </li>
                  <li>
                    <strong className="text-white block mb-2">Zachęcaj do oznaczania</strong>
                    "Oznacz koleżankę, która potrzebuje wizyty w salonie 💅"
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Czego unikać?</h2>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">✗</span>
                      <span><strong className="text-white">Tylko promocje</strong> - ludzie przestaną obserwować</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">✗</span>
                      <span><strong className="text-white">Treści niezwiązane z salonem</strong> - memy, polityka, prywatne sprawy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">✗</span>
                      <span><strong className="text-white">Niskiej jakości zdjęcia</strong> - rozmazane, ciemne, nieestetyczne</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">✗</span>
                      <span><strong className="text-white">Brak regularności</strong> - publikowanie raz na miesiąc nie przyniesie efektów</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Podsumowanie</h2>
                <p className="mb-4">
                  Prowadzenie profilu salonu na Facebooku nie jest skomplikowane. Potrzebujesz:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>Wartościowych treści (efekty, porady, kulisy)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>Regularności (minimum 2-3 posty w tygodniu)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>Angażowania obserwatorów (pytania, odpowiedzi, Stories)</span>
                  </li>
                </ul>
                <p className="mt-6 text-white/90">
                  Pamiętaj: profil na Facebooku to Twoja wizytówka. Jeśli chcesz jednak dotrzeć do nowych osób, 
                  które jeszcze Cię nie znają, będziesz potrzebować płatnych reklam.
                </p>
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

export default JakProwadzicProfil;
