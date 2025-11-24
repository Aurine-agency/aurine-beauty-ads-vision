import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const KiedyWartoReklamowac = () => {
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
              { label: "Kiedy warto inwestować w reklamy", href: "/porady/kiedy-warto-reklamowac" }
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
                Strategie
              </span>
              <span className="flex items-center gap-2 text-sm text-white/50">
                <Clock className="w-4 h-4" />
                6 min czytania
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Kiedy warto <span className="text-gradient-pink">inwestować w reklamy</span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed">
              Płatne reklamy to nie jest rozwiązanie dla każdego salonu i na każdym etapie. 
              Sprawdź, czy Twój biznes jest gotowy.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-white/80 text-lg leading-relaxed">
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Kiedy NIE warto jeszcze reklamować się?</h2>
                <p>
                  Zanim zaczniesz inwestować w reklamy, upewnij się, że Twój salon spełnia podstawowe warunki. 
                  W przeciwnym razie zmarnujesz budżet.
                </p>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">1. Brak wolnych terminów</h3>
                <p className="mb-4">
                  Jeśli Twój kalendarz jest pełny na najbliższe 2-3 tygodnie, reklamy nie mają sensu. 
                  Po co płacić za dotarcie do nowych osób, skoro nie możesz ich przyjąć?
                </p>
                <p className="text-white/70">
                  <strong className="text-white">Co zrobić zamiast tego?</strong><br/>
                  Skup się na obsłudze obecnych klientek, buduj lojalność i pracuj nad rekomendacjami. 
                  Gdy pojawią się wolne terminy, wtedy warto uruchomić kampanię.
                </p>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">2. Słabe opinie lub ich brak</h3>
                <p className="mb-4">
                  Nowe osoby, które zobaczą Twoją reklamę, sprawdzą opinie na Facebooku lub Google. 
                  Jeśli nie masz pozytywnych recenzji, trudno będzie je przekonać.
                </p>
                <p className="text-white/70">
                  <strong className="text-white">Co zrobić zamiast tego?</strong><br/>
                  Poproś zadowolone klientki o wystawienie opinii. Zanim uruchomisz kampanię, 
                  postaraj się zebrać minimum 10-15 pozytywnych recenzji.
                </p>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">3. Brak zdjęć efektów pracy</h3>
                <p className="mb-4">
                  Jeśli nie masz profesjonalnych zdjęć swoich prac (paznokcie, makijaż, brwi), 
                  reklamy będą mniej skuteczne. Ludzie chcą widzieć, co oferujesz.
                </p>
                <p className="text-white/70">
                  <strong className="text-white">Co zrobić zamiast tego?</strong><br/>
                  Zacznij robić zdjęcia każdej stylizacji. Nie muszą być perfekcyjne, ale powinny 
                  dobrze pokazywać efekt. Zbierz minimum 15-20 zdjęć przed uruchomieniem kampanii.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Kiedy warto zacząć reklamować się?</h2>
                <p>
                  Reklamy mają sens, gdy spełniasz te warunki:
                </p>
              </section>

              <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">✓ Masz wolne terminy</h3>
                <p className="text-white/80">
                  Twój kalendarz nie jest zapełniony. Możesz przyjąć nowe klientki w ciągu najbliższych 7-14 dni.
                </p>
              </section>

              <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">✓ Masz pozytywne opinie</h3>
                <p className="text-white/80">
                  Minimum 10 recenzji na Facebooku lub Google z oceną co najmniej 4.5/5. 
                  Nowe osoby będą sprawdzać opinie, zanim umówią wizytę.
                </p>
              </section>

              <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">✓ Masz materiały do reklam</h3>
                <p className="text-white/80">
                  Zdjęcia efektów pracy, które można wykorzystać w reklamach. 
                  Im więcej, tym lepiej - różnorodność przyciąga uwagę.
                </p>
              </section>

              <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">✓ Masz stabilną jakość usług</h3>
                <p className="text-white/80">
                  Jesteś pewna swoich umiejętności i jakości pracy. Nowe klientki z reklam 
                  będą bardziej wymagające niż te z rekomendacji.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Na jakie efekty możesz liczyć?</h2>
                <p className="mb-4">
                  Realistyczne oczekiwania w małych miastach (dobrze prowadzona kampania):
                </p>
                <ul className="mt-4 space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong className="text-white">Pierwszy miesiąc:</strong> 10-20 nowych zapytań, z czego 60-70% umówi wizytę</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong className="text-white">Drugi-trzeci miesiąc:</strong> 15-30 nowych zapytań miesięcznie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong className="text-white">Po trzech miesiącach:</strong> Stabilny napływ nowych klientek + część z nich wraca regularnie</span>
                  </li>
                </ul>
                <p className="mt-6 text-white/60">
                  <strong className="text-white">Pamiętaj:</strong> To średnie wyniki. Rzeczywiste efekty zależą od wielu czynników: 
                  jakości kampanii, Twojej oferty, lokalizacji, konkurencji i pory roku.
                </p>
              </section>

              <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Podsumowanie</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    <strong className="text-white">Zacznij reklamować się, gdy:</strong>
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center gap-3">
                      <span className="text-primary">✓</span>
                      <span>Masz wolne terminy w kalendarzu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary">✓</span>
                      <span>Posiadasz minimum 10-15 pozytywnych opinii</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary">✓</span>
                      <span>Masz zdjęcia efektów swojej pracy</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary">✓</span>
                      <span>Jesteś gotowa na regularną inwestycję w marketing</span>
                    </li>
                  </ul>
                  <p className="mt-6">
                    Jeśli któryś z tych punktów nie jest spełniony, najpierw popracuj nad fundamentami. 
                    Reklamy są skuteczne tylko wtedy, gdy masz solidne podstawy.
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

export default KiedyWartoReklamowac;
