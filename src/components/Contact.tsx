import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Chcesz więcej <span className="text-gradient-pink">klientek?</span>
            </h2>
            <p className="text-xl text-white/60">
              Porozmawiajmy bez zobowiązań - chętnie odpowiemy na Twoje pytania
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 animate-scale-in">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "biuro@aurine.pl",
                  href: "mailto:biuro@aurine.pl",
                },
                {
                  icon: Phone,
                  title: "Telefon",
                  value: "+48 731 856 524",
                  href: "tel:+48731856524",
                },
                {
                  icon: MessageCircle,
                  title: "Messenger",
                  value: "m.me/aurine",
                  href: "https://m.me/aurine",
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group text-center hover:scale-105 transition-transform"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm text-white/60 mb-1">{contact.title}</div>
                  <div className="text-white font-medium group-hover:text-primary transition-colors">
                    {contact.value}
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="mailto:biuro@aurine.pl"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(328,100%,54%/0.6)]"
              >
                <Mail className="w-5 h-5" />
                Napisz do nas
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-white/40 text-sm">
            <p>© 2024 Aurine. Wszystkie prawa zastrzeżone.</p>
            <p className="mt-2">Z pasją wspieramy salony kosmetyczne w rozwoju</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
