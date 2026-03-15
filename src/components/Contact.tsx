import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
          Contact
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
          Ready to go solar?
        </h2>
        <p className="text-lg text-muted leading-relaxed mb-12 max-w-lg mx-auto">
          Get in touch to discuss how solar EV charging can work for you.
        </p>

        <div className="inline-flex items-center gap-3 bg-surface border border-border rounded-2xl px-8 py-6 mb-8">
          <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <span className="text-lg font-medium text-foreground">
            M2@chargingplaza.com
          </span>
        </div>

        <div className="block">
          <a
            href="mailto:M2@chargingplaza.com"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-white text-sm font-medium rounded-full hover:bg-foreground/85 transition-all"
          >
            <Mail className="w-4 h-4" />
            Send us an email
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
