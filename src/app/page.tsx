"use client";

import { useState } from "react";
import {
  Zap,
  MapPin,
  Battery,
  Sun,
  Cpu,
  ArrowRight,
  ChevronRight,
  Mail,
  ExternalLink,
} from "lucide-react";

const CONTACT_EMAIL = "M2@chargingplaza.com";

/* ─── CHARGER SPECS ─── */
const CHARGERS = [
  {
    name: "Tesla V4 Supercharger",
    badge: "PRIMARY",
    specs: [
      ["Max Power", "500 kW"],
      ["Voltage", "0–1,000 VDC"],
      ["Current", "615 A"],
      ["Connectors", "NACS + CCS1"],
      ["Protocol", "OCPP 2.0.1"],
      ["Power Cabinet", "V3.5 — 575 kW DC bus, 1–4 posts"],
      ["Flood Rating", "1,015 mm"],
      ["Op Temp", "-30°C to 50°C"],
      ["Payment", "Contactless / NFC"],
      ["Rating", "IP54 / NEMA 3R, ADA compliant"],
    ],
  },
  {
    name: "Alpitronic Hypercharger 400",
    badge: null,
    specs: [
      ["Max Power", "400 kW"],
      ["Voltage", "150–1,000 VDC"],
      ["Current", "2× 600 A simultaneous"],
      ["Connectors", "CCS1, NACS, CHAdeMO"],
      ["Protocol", "OCPP 1.6 & 2.0.1"],
      ["Efficiency", "97.5%"],
      ["Outputs", "Up to 4 simultaneous"],
      ["Power Factor", "> 0.99"],
      ["AC Input", "480V ±10%, 3-phase"],
      ["THDi / SCCR", "< 5% / 65 kA"],
      ["Rating", "IP54, ADA compliant"],
    ],
  },
  {
    name: "Kempower Station C800 V2",
    badge: null,
    specs: [
      ["Max Power", "800 kW (distributed)"],
      ["Satellites", "Liquid-cooled V2"],
      ["Connectors", "CCS1, NACS"],
      ["Load Mgmt", "Dynamic per-port"],
      ["Architecture", "Modular / scalable stacks"],
      ["Fleet-Ready", "Yes"],
      ["Rating", "IP54, ADA compliant"],
    ],
  },
];

/* ─── BESS SPECS ─── */
const BESS_SPECS = [
  ["Configuration", "3× ELM MG 1500 (4,170 kWh LFP each)"],
  ["Total Power", "4.5 MW"],
  ["Total Capacity", "12.5 MWh"],
  ["Chemistry", "LFP (lithium iron phosphate)"],
  ["Inverter", "1,500 kW per unit, 3-phase, Cab 1000"],
  ["Output", "AC ±10% — 690 VRMS"],
  ["Enclosures", "5× ELM per unit — NEMA 3R outdoor"],
  ["Cooling", "Closed-loop liquid"],
  ["Controller", "FieldSight Microgrid Site Controller"],
  ["Fire Suppression", "Integrated per container"],
  ["Certifications", "UL 9540, UL 1973, UL 9540A, UL 1741 SB"],
  ["Salt Spray", "1,000-hour rated"],
  ["Warranty", "2-yr material + 5-yr parts (extendable)"],
  ["Lead Time", "34 weeks"],
];

/* ─── SOLAR SPECS ─── */
const SOLAR_SPECS = [
  ["DC Nameplate", "2.36 MW"],
  ["Modules", "6,288× Meyer Burger HJT Bifacial 375W"],
  ["AC Nameplate", "1.90 MW (79× SMA Tripower 24000TL-US)"],
  ["DC:AC Ratio", "1.24"],
  ["Annual Production", "4,472 MWh"],
  ["Specific Yield", "1,896 kWh/kWp"],
  ["GHI / POA", "2,071 / 2,232 kWh/m²"],
  ["Performance Ratio", "~85%"],
  ["Racking", "Carport, 10° tilt, 180° azimuth"],
  ["Key Losses", "Soiling 2.0%, mismatch 4.1%, clipping 1.6%"],
];

/* ─── GRIDLINK SPECS ─── */
const GRIDLINK_SPECS = [
  ["Max Charging Output", "194 kW (44 kW grid + 150 kW ESS)"],
  ["Battery Modules", "22 kW bidirectional AC/DC × 2"],
  ["PV Integration", "Up to 30 kW (DC/DC with MPPT)"],
  ["V2G Ready", "Battery-to-grid, peak shaving, ancillary"],
  ["Off-Grid", "Capable during blackouts/brownouts"],
  ["Footprint", "Compact parking lot deployment"],
  ["EMS", "Local + remote with charge scheduling"],
];

const TABS = ["Chargers", "BESS", "Solar", "GridLink"] as const;
type Tab = (typeof TABS)[number];

function SpecTable({ rows }: { rows: string[][] }) {
  return (
    <div className="divide-y divide-border">
      {rows.map(([label, value]) => (
        <div key={label} className="spec-row">
          <span className="spec-label">{label}</span>
          <span className="spec-value">{value}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("Chargers");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
              <Zap className="h-3.5 w-3.5 text-black" />
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
              Site
            </a>
            <a
              href="#infrastructure"
              className="hover:text-foreground transition-colors"
            >
              Infrastructure
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href="https://chargingplaza.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs hover:border-accent hover:text-accent transition-colors"
            >
              Main Site <ExternalLink className="h-3 w-3" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-grid">
          <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                M2PV Capital
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
                Solar-Powered EV
                <br />
                <span className="gradient-text">Charging Infrastructure</span>
              </h1>

              <p className="text-lg text-muted leading-relaxed mb-10 max-w-xl">
                Investor-grade technical overview of our flagship charging plaza
                at I-40 Exit 25, Yucca, Arizona. Multi-vendor DC fast charging,
                battery storage, and solar generation.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#infrastructure"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-black font-medium text-sm hover:bg-accent/90 transition-colors"
                >
                  View Specs
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Investor%20Inquiry`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm hover:border-muted transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Investor Inquiry
                </a>
              </div>
            </div>
          </div>

          {/* Hero stat cards */}
          <div className="max-w-6xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "4.5 MW", label: "Battery Storage", icon: Battery },
                { value: "2.36 MW", label: "Solar Canopy (DC)", icon: Sun },
                {
                  value: "12.5 MWh",
                  label: "Total Energy Capacity",
                  icon: Zap,
                },
                {
                  value: "4.47 GWh",
                  label: "Annual Solar Production",
                  icon: Cpu,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl border border-border bg-card glow-green"
                >
                  <stat.icon className="h-4 w-4 text-accent mb-3" />
                  <div className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Site Overview */}
        <section id="site" className="py-20 md:py-28 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
                  Site Overview
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Yucca, Arizona
                </h2>
                <p className="text-muted mb-8 leading-relaxed">
                  Strategically located at the I-40 / US-93 intersection
                  connecting Las Vegas, Flagstaff, and Albuquerque — adjacent to
                  the future I-11 corridor. The nearest DC fast-charging is 90+
                  miles in either direction on I-40.
                </p>

                <div className="space-y-4">
                  {[
                    [
                      "Coordinates",
                      "34.86166°N, 114.144°W",
                    ],
                    ["Location", "I-40 Exit 25, Mohave County"],
                    [
                      "Corridor",
                      "I-40 / US-93 (LV–Flagstaff–ABQ)",
                    ],
                    ["AADT", "12,700+ vehicles"],
                    [
                      "Nearest DCFC",
                      "90+ mi in either direction",
                    ],
                    [
                      "NEVI Eligible",
                      "ADOT EVII Phase 2 (IIJA/BIL)",
                    ],
                  ].map(([label, value]) => (
                    <div key={label} className="spec-row">
                      <span className="spec-label">{label}</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map / location visual */}
              <div className="flex items-center justify-center">
                <div className="w-full aspect-square max-w-md rounded-3xl border border-border bg-card relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <MapPin className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-2">I-40 Exit 25</h3>
                    <p className="text-sm text-muted mb-4">
                      Mohave County, Arizona
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs w-full max-w-xs">
                      <div className="p-3 rounded-xl bg-surface border border-border">
                        <div className="text-accent font-semibold mb-0.5">West</div>
                        <div className="text-muted">Las Vegas — 160 mi</div>
                      </div>
                      <div className="p-3 rounded-xl bg-surface border border-border">
                        <div className="text-accent font-semibold mb-0.5">East</div>
                        <div className="text-muted">Flagstaff — 170 mi</div>
                      </div>
                      <div className="p-3 rounded-xl bg-surface border border-border">
                        <div className="text-accent font-semibold mb-0.5">South</div>
                        <div className="text-muted">Phoenix — 200 mi</div>
                      </div>
                      <div className="p-3 rounded-xl bg-surface border border-border">
                        <div className="text-accent font-semibold mb-0.5">Future</div>
                        <div className="text-muted">I-11 Adjacent</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Infrastructure */}
        <section
          id="infrastructure"
          className="py-20 md:py-28 border-t border-border bg-surface"
        >
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
              Technical Infrastructure
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
              System Architecture
            </h2>

            {/* Tabs */}
            <div className="flex gap-6 mb-10 border-b border-border overflow-x-auto">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-1 text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab ? "tab-active" : "tab-inactive"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Chargers Tab */}
            {activeTab === "Chargers" && (
              <div className="grid md:grid-cols-3 gap-6">
                {CHARGERS.map((charger) => (
                  <div
                    key={charger.name}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-sm leading-snug">
                        {charger.name}
                      </h3>
                      {charger.badge && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                          {charger.badge}
                        </span>
                      )}
                    </div>
                    <SpecTable rows={charger.specs} />
                  </div>
                ))}
              </div>
            )}

            {/* BESS Tab */}
            {activeTab === "BESS" && (
              <div className="max-w-2xl">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Battery className="h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-semibold text-sm">
                        ELM Microgrid MG2 Series
                      </h3>
                      <p className="text-xs text-muted">
                        3× MG 1500 — 12.5 MWh Total
                      </p>
                    </div>
                  </div>
                  <SpecTable rows={BESS_SPECS} />
                </div>
              </div>
            )}

            {/* Solar Tab */}
            {activeTab === "Solar" && (
              <div className="max-w-2xl">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Sun className="h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-semibold text-sm">
                        Solar Canopy Array
                      </h3>
                      <p className="text-xs text-muted">
                        2.36 MW DC — 6,288 Bifacial HJT Modules
                      </p>
                    </div>
                  </div>
                  <SpecTable rows={SOLAR_SPECS} />
                </div>
              </div>
            )}

            {/* GridLink Tab */}
            {activeTab === "GridLink" && (
              <div className="max-w-2xl">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Cpu className="h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-semibold text-sm">
                        GridLink H2 by XCharge
                      </h3>
                      <p className="text-xs text-muted">
                        V2G-Ready Integrated Charging + Storage
                      </p>
                    </div>
                  </div>
                  <SpecTable rows={GRIDLINK_SPECS} />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact / Investor Inquiry */}
        <section id="contact" className="py-20 md:py-28 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Investor Inquiries
              </h2>
              <p className="text-muted mb-10 leading-relaxed">
                For detailed financials, project documentation, or partnership
                opportunities, reach out to the M2PV Capital team directly.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Investor%20Inquiry%20—%20Charging%20Plaza`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-black font-medium text-sm hover:bg-accent/90 transition-all"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <p className="text-xs text-muted mt-6">
                No dollar figures disclosed publicly — capacity and scale only.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-accent flex items-center justify-center">
              <Zap className="h-3 w-3 text-black" />
            </div>
            <span className="text-xs font-semibold">Charging Plaza</span>
            <span className="text-xs text-muted">· M2PV Capital</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-muted">
            <a
              href="https://chargingplaza.vercel.app"
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
