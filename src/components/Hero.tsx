import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
          alt="Solar panels under blue sky"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <div className="animate-fade-in-up">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-6">
            Solar-Powered EV Charging
          </p>
        </div>

        <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 text-foreground">
          We charge your EV
          <br />
          with the sun.
        </h1>

        <p className="animate-fade-in-up-delay-2 max-w-xl mx-auto text-lg sm:text-xl text-muted leading-relaxed mb-12">
          Clean energy meets electric mobility. The future of sustainable transportation starts here.
        </p>

        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-white text-sm font-medium rounded-full hover:bg-foreground/85 transition-all"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-primary text-sm font-medium hover:underline underline-offset-4 transition-all"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Bottom showcase image with hover zoom + shine effect */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 img-reveal">
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10 img-hover-zoom img-shine">
          <Image
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80"
            alt="Electric vehicle charging"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
