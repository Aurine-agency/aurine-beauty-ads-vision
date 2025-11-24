import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Powrót do strony głównej
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          <span className="text-gradient-pink">Regulamin</span> świadczenia usług
        </h1>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§1. Postanowienia ogólne</h2>
            <p>
              Niniejszy Regulamin określa zasady świadczenia usług marketingowych przez Aurine, 
              zwaną dalej "Wykonawcą", na rzecz klientów prowadzących salony beauty, zwanych dalej "Zleceniodawcą".
            </p>
            <p className="mt-4">
              Akceptacja niniejszego Regulaminu jest dobrowolna, ale konieczna do rozpoczęcia współpracy 
              i korzystania z usług oferowanych przez Wykonawcę.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§2. Definicje</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Wykonawca</strong> - Aurine, świadczący usługi marketingowe</li>
              <li><strong>Zleceniodawca</strong> - osoba fizyczna lub prawna korzystająca z usług Wykonawcy</li>
              <li><strong>Kampania</strong> - działania reklamowe prowadzone na platformach Facebook i Instagram</li>
              <li><strong>Umowa</strong> - umowa o świadczenie usług zawarta między Wykonawcą a Zleceniodawcą</li>
              <li><strong>Budżet reklamowy</strong> - środki przeznaczone przez Zleceniodawcę na reklamy w Meta</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§3. Zakres usług</h2>
            <p>Wykonawca świadczy następujące usługi:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Konsultacja i opracowanie strategii kampanii reklamowych</li>
              <li>Projektowanie kreacji reklamowych (grafiki, teksty)</li>
              <li>Konfiguracja i uruchomienie kampanii na Facebook Ads</li>
              <li>Bieżące zarządzanie i optymalizacja kampanii</li>
              <li>Analiza wyników i regularne raportowanie</li>
              <li>Konsultacje i wsparcie techniczne</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§4. Warunki współpracy</h2>
            <p>
              <strong>4.1.</strong> Zleceniodawca zobowiązuje się do przekazania Wykonawcy niezbędnych informacji 
              o swojej działalności, grupie docelowej oraz materiałów reklamowych (zdjęcia, grafiki).
            </p>
            <p className="mt-4">
              <strong>4.2.</strong> Zleceniodawca udziela Wykonawcy dostępu do konta Business Manager w Meta 
              w zakresie niezbędnym do prowadzenia kampanii reklamowych.
            </p>
            <p className="mt-4">
              <strong>4.3.</strong> Budżet reklamowy jest ustalany indywidualnie i jest płatny bezpośrednio 
              przez Zleceniodawcę na platformie Meta. Wykonawca nie pośredniczy w płatnościach za reklamy.
            </p>
            <p className="mt-4">
              <strong>4.4.</strong> Wynagrodzenie Wykonawcy za obsługę kampanii jest ustalane indywidualnie 
              i fakturowane miesięcznie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§5. Obowiązki Wykonawcy</h2>
            <p>Wykonawca zobowiązuje się do:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Profesjonalnego i terminowego wykonywania usług</li>
              <li>Bieżącego monitorowania i optymalizacji kampanii</li>
              <li>Regularnego raportowania wyników kampanii</li>
              <li>Zachowania poufności otrzymanych informacji</li>
              <li>Stosowania się do wytycznych i regulaminów platform reklamowych</li>
              <li>Informowania o wszelkich istotnych zmianach w kampaniach</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§6. Obowiązki Zleceniodawcy</h2>
            <p>Zleceniodawca zobowiązuje się do:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Terminowego przekazywania wymaganych materiałów i informacji</li>
              <li>Udzielenia niezbędnych dostępów do kont reklamowych</li>
              <li>Terminowego regulowania płatności za usługi Wykonawcy</li>
              <li>Zapewnienia, że przekazane materiały nie naruszają praw osób trzecich</li>
              <li>Współpracy w zakresie optymalizacji kampanii</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§7. Wynagrodzenie i płatności</h2>
            <p>
              <strong>7.1.</strong> Wysokość wynagrodzenia za usługi jest ustalana indywidualnie 
              i określona w umowie lub ofercie.
            </p>
            <p className="mt-4">
              <strong>7.2.</strong> Rozliczenia następują miesięcznie, z dołu za miesiąc poprzedni.
            </p>
            <p className="mt-4">
              <strong>7.3.</strong> Termin płatności faktury wynosi 7 dni od daty wystawienia.
            </p>
            <p className="mt-4">
              <strong>7.4.</strong> W przypadku opóźnienia w płatności, Wykonawca ma prawo wstrzymać 
              świadczenie usług do czasu uregulowania zaległości.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§8. Czas trwania i rozwiązanie umowy</h2>
            <p>
              <strong>8.1.</strong> Umowa jest zawierana na czas nieokreślony z miesięcznym okresem rozliczeniowym.
            </p>
            <p className="mt-4">
              <strong>8.2.</strong> Każda ze stron może wypowiedzieć umowę z 14-dniowym okresem wypowiedzenia, 
              ze skutkiem na koniec miesiąca kalendarzowego.
            </p>
            <p className="mt-4">
              <strong>8.3.</strong> Wykonawca może rozwiązać umowę ze skutkiem natychmiastowym w przypadku:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Opóźnienia w płatności przekraczającego 14 dni</li>
              <li>Naruszenia regulaminu platform reklamowych przez Zleceniodawcę</li>
              <li>Nieprzedstawienia wymaganych materiałów mimo wielokrotnych monitów</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§9. Odpowiedzialność</h2>
            <p>
              <strong>9.1.</strong> Wykonawca nie gwarantuje konkretnych wyników kampanii reklamowych, 
              takich jak liczba klientów, sprzedaż czy zwrot z inwestycji (ROI). Efekty zależą od wielu 
              czynników pozostających poza kontrolą Wykonawcy.
            </p>
            <p className="mt-4">
              <strong>9.2.</strong> Wykonawca nie ponosi odpowiedzialności za:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Decyzje platform reklamowych dotyczące odrzucenia lub zawieszenia reklam</li>
              <li>Zmiany w algorytmach i politykach platform reklamowych</li>
              <li>Przerwy techniczne w działaniu platform Meta</li>
              <li>Jakość usług świadczonych przez Zleceniodawcę swoim klientom</li>
            </ul>
            <p className="mt-4">
              <strong>9.3.</strong> Zleceniodawca ponosi pełną odpowiedzialność za treści, grafiki i materiały 
              przekazane Wykonawcy oraz zapewnia, że nie naruszają one praw osób trzecich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§10. Poufność</h2>
            <p>
              Strony zobowiązują się do zachowania poufności wszelkich informacji otrzymanych w trakcie 
              współpracy, w szczególności danych biznesowych, finansowych i strategicznych. Obowiązek ten 
              obowiązuje również po zakończeniu współpracy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§11. Własność intelektualna</h2>
            <p>
              <strong>11.1.</strong> Prawa autorskie do kreacji reklamowych (grafiki, teksty) stworzonych 
              przez Wykonawcę przysługują Wykonawcy.
            </p>
            <p className="mt-4">
              <strong>11.2.</strong> Zleceniodawca nabywa niewyłączną licencję na użytkowanie stworzonych 
              materiałów wyłącznie w celach określonych w umowie.
            </p>
            <p className="mt-4">
              <strong>11.3.</strong> Po zakończeniu współpracy Zleceniodawca może dalej korzystać 
              z materiałów stworzonych w ramach kampanii.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§12. Reklamacje</h2>
            <p>
              <strong>12.1.</strong> Zleceniodawca ma prawo zgłosić reklamację w przypadku niewłaściwego 
              wykonania usługi w ciągu 7 dni od zaistnienia zdarzenia będącego podstawą reklamacji.
            </p>
            <p className="mt-4">
              <strong>12.2.</strong> Reklamacja powinna zostać zgłoszona na adres email: biuro@aurine.pl 
              z opisem problemu.
            </p>
            <p className="mt-4">
              <strong>12.3.</strong> Wykonawca rozpatrzy reklamację w ciągu 14 dni roboczych 
              i poinformuje Zleceniodawcę o sposobie jej rozpatrzenia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">§13. Postanowienia końcowe</h2>
            <p>
              <strong>13.1.</strong> W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie 
              mają przepisy Kodeksu cywilnego.
            </p>
            <p className="mt-4">
              <strong>13.2.</strong> Wykonawca zastrzega sobie prawo do zmiany Regulaminu. 
              O zmianach Zleceniodawca zostanie poinformowany z 14-dniowym wyprzedzeniem.
            </p>
            <p className="mt-4">
              <strong>13.3.</strong> Wszelkie spory wynikłe z realizacji umowy będą rozstrzygane 
              przez sąd właściwy dla siedziby Wykonawcy.
            </p>
            <p className="mt-4">
              <strong>13.4.</strong> Regulamin wchodzi w życie z dniem jego publikacji na stronie internetowej.
            </p>
            <p className="mt-4 text-white/50 text-sm">
              Data wejścia w życie: {new Date().toLocaleDateString('pl-PL')}
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-semibold text-white mb-3">Kontakt</h3>
            <p>
              W przypadku pytań dotyczących Regulaminu prosimy o kontakt:
            </p>
            <p className="mt-4">
              Email: <a href="mailto:biuro@aurine.pl" className="text-primary hover:text-primary/80 transition-colors">biuro@aurine.pl</a>
              <br />
              Telefon: <a href="tel:+48731856524" className="text-primary hover:text-primary/80 transition-colors">+48 731 856 524</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do strony głównej
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
