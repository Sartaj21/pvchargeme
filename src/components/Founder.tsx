import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Founder photo with modern effects */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden img-hover-zoom img-shine shadow-2xl shadow-black/10 w-full max-w-sm">
                <Image
                  src="https://m2pvcapital.com/ver/m2.jpeg"
                  alt="Martin - Founder & CEO"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-lg font-semibold">Martin</div>
                  <div className="text-sm text-white/70">Founder & CEO</div>
                </div>
              </div>

              {/* Floating glass badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-5 py-3 shadow-lg">
                <div className="text-2xl font-bold text-foreground">30+</div>
                <div className="text-xs text-muted">Years in Energy</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              Leadership
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-8">
              30 years of renewable energy experience.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Martin brings unmatched expertise to PV Charge Me. His engineering background and entrepreneurial vision have driven innovation across the clean energy landscape.
              </p>
              <p>
                Having founded three companies and served as CEO of two, he combines deep technical knowledge with proven business acumen as both an operator and fund manager in the energy sector.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-foreground">3</div>
                <div className="text-xs text-muted mt-1">Companies founded</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">2</div>
                <div className="text-xs text-muted mt-1">CEO positions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">30+</div>
                <div className="text-xs text-muted mt-1">Years experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
