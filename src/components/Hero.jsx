import { Cpu, Shield, TrendingUp, Bot } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/20 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 mb-8">
          <Bot className="w-4 h-4" />
          <span className="text-sm">
            Automated FICO Decisioning for Lenders
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Instant FICO Score
          <br />
          <span className="text-emerald-400">Generation & Decisioning</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          Our automation bot retrieves and analyzes credit data to deliver
          predictive FICO scores that power instant, data-driven lending
          decisions—streamlining your entire loan origination process.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition">
            Start Free Trial →
          </button>
          <button className="px-8 py-4 rounded-lg border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition">
            View Documentation
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Hero;
