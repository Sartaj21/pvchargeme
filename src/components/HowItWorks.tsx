import Image from "next/image";
import { Sun, Battery, PlugZap, Car } from "lucide-react";

const steps = [
  {
    icon: Sun,
    num: "01",
    title: "Capture",
    description: "High-efficiency photovoltaic panels convert sunlight into clean electricity.",
  },
  {
    icon: Battery,
    num: "02",
    title: "Store",
    description: "Advanced battery systems ensure charging availability around the clock.",
  },
  {
    icon: PlugZap,
    num: "03",
    title: "Distribute",
    description: "Intelligent power management across multiple charging stations.",
  },
  {
    icon: Car,
    num: "04",
    title: "Charge",
    description: "Your EV charges with 100% clean, solar-generated electricity.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
            From sunlight to full charge.
          </h2>
        </div>

        {/* Full-width image with shine + hover zoom */}
        <div className="rounded-2xl overflow-hidden mb-16 img-hover-zoom img-shine shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=1200&q=80"
            alt="Electric vehicle charging station"
            width={1200}
            height={500}
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-2 block">
                Step {step.num}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
