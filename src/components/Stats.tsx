import { BatteryCharging, Sun, Zap, TreePine } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "50kW+",
    label: "Charging Speed",
    detail: "DC fast charging capability",
  },
  {
    icon: Sun,
    value: "6.5hrs",
    label: "Avg. Solar Generation",
    detail: "Annual average daily sun hours in AZ",
  },
  {
    icon: BatteryCharging,
    value: "150mi",
    label: "Range per Session",
    detail: "Typical 30-min charge",
  },
  {
    icon: TreePine,
    value: "2.4t",
    label: "CO₂ Saved per Station",
    detail: "Annually vs. grid power",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            The impact of solar charging.
          </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white/80" strokeWidth={1.5} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/70 font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-white/40">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
