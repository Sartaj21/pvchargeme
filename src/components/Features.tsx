import Image from "next/image";
import {
  Shield,
  Wifi,
  Clock,
  MapPin,
  Smartphone,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Battery-backed solar stations that operate around the clock.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Find stations, start charging, and monitor from your phone.",
  },
  {
    icon: Wifi,
    title: "Connected",
    description: "IoT-enabled with real-time monitoring and remote management.",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Enterprise-grade security with encrypted transactions.",
  },
  {
    icon: MapPin,
    title: "Strategic Locations",
    description: "High-demand placements for maximum convenience.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Comprehensive dashboards to track and optimize performance.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
            Built for the future.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Advanced technology meets sustainable energy for a seamless charging experience.
          </p>
        </div>

        {/* Feature image with modern split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="rounded-2xl overflow-hidden img-hover-zoom img-shine shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80&fit=crop&crop=left"
              alt="EV charging cable plugged in"
              width={800}
              height={600}
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden img-hover-zoom img-shine shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80&fit=crop&crop=bottom"
              alt="Solar panels and wind energy"
              width={800}
              height={600}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <feature.icon className="w-6 h-6 text-foreground mb-4" strokeWidth={1.5} />
              <h3 className="text-base font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
