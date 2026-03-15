import Image from "next/image";
import { Sun, Zap, Leaf, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Sun,
    title: "Solar Powered",
    description: "Charging stations powered entirely by photovoltaic solar panels.",
  },
  {
    icon: Zap,
    title: "Smart Charging",
    description: "Intelligent energy distribution for maximum efficiency.",
  },
  {
    icon: Leaf,
    title: "Carbon Neutral",
    description: "Every charge session produces zero carbon emissions.",
  },
  {
    icon: TrendingUp,
    title: "Cost Effective",
    description: "Solar energy reduces operational costs significantly.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              Bridging solar energy and electric mobility.
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              PV Charge Me combines decades of renewable energy expertise with cutting-edge EV charging technology to build truly sustainable transportation infrastructure.
            </p>
          </div>

          {/* Stacked image composition with hover effects */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden img-hover-zoom img-shine shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80"
                alt="Solar panels in a field"
                width={800}
                height={533}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">100% Clean</div>
                  <div className="text-xs text-muted">Zero emissions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 hover:bg-surface transition-colors"
            >
              <item.icon className="w-6 h-6 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
