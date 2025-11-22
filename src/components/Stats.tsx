import { useEffect, useRef, useState } from "react";
import { TrendingUp, Award, Users, Calendar } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    salons: 0,
    campaigns: 0,
    growth: 0,
    years: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalValues = {
    salons: 47,
    campaigns: 156,
    growth: 285,
    years: 5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map((key) => {
      const finalValue = finalValues[key as keyof typeof finalValues];
      const increment = finalValue / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= finalValue) {
          setCounts((prev) => ({ ...prev, [key]: finalValue }));
          clearInterval(intervals.find((i) => i));
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: counts.salons,
      suffix: "+",
      label: "Obsługiwanych salonów",
      description: "Salony beauty z całej Polski",
    },
    {
      icon: Award,
      value: counts.campaigns,
      suffix: "+",
      label: "Przeprowadzonych kampanii",
      description: "Skuteczne kampanie reklamowe",
    },
    {
      icon: TrendingUp,
      value: counts.growth,
      suffix: "%",
      label: "Średni wzrost sprzedaży",
      description: "U naszych klientów",
    },
    {
      icon: Calendar,
      value: counts.years,
      suffix: " lat",
      label: "Doświadczenia",
      description: "W branży beauty marketing",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nasze <span className="text-primary">Osiągnięcia</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Liczby, które mówią same za siebie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-5xl font-bold text-white mb-2 font-mono">
                    {stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
