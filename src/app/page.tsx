"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Battery,
  Sun,
  Plug,
  ArrowRight,
  ChevronRight,
  Mail,
  ExternalLink,
} from "lucide-react";

const CONTACT_EMAIL = "M2@chargingplaza.com";

/* ─── ANIMATIONS ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/* ─── ANIMATED COUNTER ─── */
function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
          const decimals = value.includes(".") ? (value.split(".")[1]?.replace(/[^0-9]/g, "").length || 0) : 0;
          const duration = 1200;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = numericPart * eased;
            setDisplayed(current.toFixed(decimals));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-2xl md:text-3xl font-bold tracking-tight mb-1 tabular-nums">
      {displayed}{suffix}
    </div>
  );
}

/* ─── INFRASTRUCTURE TABS ─── */
const TABS = ["EV Charging", "Battery Storage", "Solar Canopy"] as const;
type Tab = (typeof TABS)[number];

const EV_CHARGING_SPECS = [
  ["Max Single-Port Power", "Up to 800 kW"],
  ["Voltage Range", "0–1,000 VDC"],
  ["Connectors", "NACS, CCS1, CHAdeMO"],
  ["Protocol", "OCPP 2.0.1"],
  ["Simultaneous Outputs", "Up to 4 per unit"],
  ["Efficiency", "Up to 97.5%"],
  ["Power Factor", "> 0.99"],
  ["AC Input", "480V ±10%, 3-phase"],
  ["Dynamic Load Mgmt", "Per-port allocation"],
  ["Fleet-Ready", "Reservation system + dedicated bays"],
  ["Payment", "Contactless / NFC"],
  ["Rating", "IP54, ADA compliant"],
];

const BESS_SPECS = [
  ["Total Power", "4.5 MW"],
  ["Total Capacity", "12.5 MWh"],
  ["Chemistry", "LFP (lithium iron phosphate)"],
  ["Inverter", "1,500 kW per unit, 3-phase"],
  ["Output", "AC ±10% — 690 VRMS"],
  ["Cooling", "Closed-loop liquid"],
  ["Controller", "Integrated microgrid site controller"],
  ["Fire Suppression", "Integrated per container"],
  ["Enclosures", "NEMA 3R outdoor rated"],
  ["Certifications", "UL 9540, UL 1973, UL 9540A, UL 1741 SB"],
  ["Salt Spray", "1,000-hour rated"],
  ["Warranty", "2-yr material + 5-yr parts (extendable)"],
];

const SOLAR_SPECS = [
  ["DC Nameplate", "2.36 MW"],
  ["Module Count", "6,288 bifacial HJT panels (375W each)"],
  ["AC Nameplate", "1.90 MW"],
  ["DC:AC Ratio", "1.24"],
  ["Annual Production", "4,472 MWh"],
  ["Specific Yield", "1,896 kWh/kWp"],
  ["GHI / POA", "2,071 / 2,232 kWh/m²"],
  ["Performance Ratio", "~85%"],
  ["Racking", "Carport canopy, 10° tilt, 180° azimuth"],
  ["Key Losses", "Soiling 2.0%, mismatch 4.1%, clipping 1.6%"],
];

function SpecTable({ rows }: { rows: string[][] }) {
  return (
    <div>
      {rows.map(([label, value], i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.03, duration: 0.3 }}
          className="spec-row"
        >
          <span className="spec-label">{label}</span>
          <span className="spec-value">{value}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("EV Charging");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border"
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
              <Zap className="h-3.5 w-3.5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm leading-tight tracking-tight">
                Charging Plaza
              </span>
              <span className="text-[10px] text-muted leading-tight">
                Investor Overview
              </span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
            <a href="#site" className="hover:text-foreground transition-colors">
              Location
            </a>
            <a href="#infrastructure" className="hover:text-foreground transition-colors">
              Infrastructure
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
            <a
              href="https://chargingplaza.biz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs hover:border-accent hover:text-accent transition-all duration-300"
            >
              Main Site <ExternalLink className="h-3 w-3" />
            </a>
          </nav>
        </div>
      </motion.header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp} custom={0}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  M2PV Capital
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
              >
                Solar-Powered EV
                <br />
                <span className="gradient-text">Charging Infrastructure</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg text-muted leading-relaxed mb-10 max-w-xl"
              >
                Technical overview of our flagship charging plaza
                at I-40 Exit 25, Yucca, Arizona. DC fast charging,
                battery storage, and solar generation.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <a
                  href="#infrastructure"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
                >
                  View Specs
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Investor%20Inquiry`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm hover:border-foreground/30 hover:shadow-sm transition-all duration-300"
                >
                  <Mail className="h-4 w-4" />
                  Investor Inquiry
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero stat cards with animated counters */}
          <div className="max-w-6xl mx-auto px-6 pb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { value: "4.5", suffix: " MW", label: "Battery Storage", icon: Battery },
                { value: "2.36", suffix: " MW", label: "Solar Canopy (DC)", icon: Sun },
                { value: "12.5", suffix: " MWh", label: "Total Energy Capacity", icon: Zap },
                { value: "4.47", suffix: " GWh", label: "Annual Solar Production", icon: Sun },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl border border-border bg-surface hover:shadow-md hover:border-accent/20 transition-all duration-300"
                >
                  <stat.icon className="h-4 w-4 text-accent mb-3" />
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  <div className="text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/3 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Site Overview with Google Map */}
        <section id="site" className="py-20 md:py-28 border-t border-border bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
                Site Overview
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Yucca, Arizona
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted mb-12 max-w-2xl leading-relaxed">
                Strategically located at the I-40 / US-93 intersection
                connecting Las Vegas, Flagstaff, and Albuquerque — adjacent to
                the future I-11 corridor. The nearest DC fast-charging is 90+
                miles in either direction on I-40.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Map embed */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="rounded-2xl overflow-hidden border border-border aspect-[4/3] shadow-sm"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52000!2d-114.144!3d34.86166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDUxJzQyLjAiTiAxMTTCsDA4JzM4LjQiVw!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Charging Plaza location — Yucca, AZ"
                />
              </motion.div>

              {/* Site specs with staggered rows */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                {[
                  ["Coordinates", "34.86166°N, 114.144°W"],
                  ["Location", "I-40 Exit 25, Mohave County"],
                  ["Corridor", "I-40 / US-93 (LV–Flagstaff–ABQ)"],
                  ["Future Corridor", "Adjacent to planned I-11"],
                  ["AADT", "12,700+ vehicles"],
                  ["Nearest DCFC", "90+ mi in either direction on I-40"],
                  ["NEVI Eligible", "ADOT EVII Phase 2 (IIJA/BIL)"],
                ].map(([label, value]) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="spec-row group hover:bg-accent/3 hover:px-3 -mx-0 rounded-lg transition-all duration-200"
                  >
                    <span className="spec-label">{label}</span>
                    <span className="spec-value">{value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Infrastructure */}
        <section id="infrastructure" className="py-20 md:py-28 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
                Technical Infrastructure
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                System Overview
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted mb-10 max-w-2xl">
                Key specifications across all major subsystems. Vendor selection is ongoing — specs reflect target performance requirements.
              </motion.p>
            </motion.div>

            {/* Tabs */}
            <div className="flex gap-1 mb-10 border-b border-border overflow-x-auto">
              {TABS.map((tab) => {
                const icons: Record<string, typeof Plug> = {
                  "EV Charging": Plug,
                  "Battery Storage": Battery,
                  "Solar Canopy": Sun,
                };
                const Icon = icons[tab];
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative inline-flex items-center gap-2 pb-3 px-4 text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab
                        ? "text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab content with AnimatePresence */}
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                {activeTab === "EV Charging" && (
                  <motion.div
                    key="ev"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-border bg-surface p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Plug className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold">DC Fast Charging</h3>
                        <p className="text-xs text-muted">Multi-vendor, multi-standard</p>
                      </div>
                    </div>
                    <SpecTable rows={EV_CHARGING_SPECS} />
                  </motion.div>
                )}

                {activeTab === "Battery Storage" && (
                  <motion.div
                    key="bess"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-border bg-surface p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Battery className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Battery Energy Storage</h3>
                        <p className="text-xs text-muted">4.5 MW / 12.5 MWh LFP</p>
                      </div>
                    </div>
                    <SpecTable rows={BESS_SPECS} />
                  </motion.div>
                )}

                {activeTab === "Solar Canopy" && (
                  <motion.div
                    key="solar"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-border bg-surface p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Sun className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Solar Canopy Array</h3>
                        <p className="text-xs text-muted">2.36 MW DC — Bifacial HJT</p>
                      </div>
                    </div>
                    <SpecTable rows={SOLAR_SPECS} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 md:py-28 border-t border-border bg-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-emerald-500/3 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-xl mx-auto text-center"
            >
              <motion.p variants={fadeUp} className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
                Contact
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Investor Inquiries
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted mb-10 leading-relaxed">
                For project documentation or partnership
                opportunities, reach out to the M2PV Capital team directly.
              </motion.p>

              <motion.div variants={fadeUp} custom={3}>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Investor%20Inquiry%20—%20Charging%20Plaza`}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>

              <motion.p variants={fadeUp} custom={4} className="text-xs text-muted mt-6">
                No dollar figures disclosed publicly — capacity and scale only.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-accent flex items-center justify-center">
              <Zap className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-semibold">Charging Plaza</span>
            <span className="text-xs text-muted">· M2PV Capital</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-muted">
            <a
              href="https://chargingplaza.biz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Main Site
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} M2PV Capital. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
