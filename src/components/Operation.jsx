import React, { useState } from "react";
import {
  Activity,
  ShieldCheck,
  Download,
  CheckCircle,
  Clock,
  Server,
  Zap,
  Cpu,
} from "lucide-react";

const OperationalUtility = () => {
  const [reportType, setReportType] = useState("Standard");

  const systemMetrics = [
    {
      region: "US-East (Virginia)",
      status: "Operational",
      latency: "42ms",
      load: 34,
      desc: "Primary Processing Node",
    },
    {
      region: "US-West (Oregon)",
      status: "Operational",
      latency: "51ms",
      load: 28,
      desc: "Disaster Recovery Unit",
    },
    {
      region: "EU-Central (Frankfurt)",
      status: "Operational",
      latency: "89ms",
      load: 19,
      desc: "GDPR Compliant Edge",
    },
  ];

  const reportTypes = [
    {
      type: "Standard",
      desc: "Core FICO scores & attributes",
      features: ["Score + Factors", "Multi-bureau", "Instant"],
      color: "emerald",
    },
    {
      type: "Enhanced",
      desc: "Predictive underwriting logic",
      features: ["Trended Data", "Risk Tiers", "Custom Rules"],
      color: "blue",
    },
    {
      type: "Risk-Only",
      desc: "KYC & Fraud prevention focus",
      features: ["Identity Flags", "Lien Search", "Compliance"],
      color: "amber",
    },
  ];

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-[#060d0a]"
      id="operation"
    >
      {/* Dynamic Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #060d0a 0%, #0a1a12 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 mb-4 border border-emerald-500/20">
                <Cpu className="w-4 h-4" />
                <span className="text-sm font-bold tracking-tight">
                  INFRASTRUCTURE VIRTUALIZATION
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Real-Time <span className="text-emerald-400">Operational</span>{" "}
                Health
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                Unlike traditional bureaus, our distributed edge infrastructure
                ensures sub-200ms decisioning for every credit request.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-400 font-mono">
                GLOBAL_UPTIME: 99.99%
              </span>
            </div>
          </div>

          {/* Infrastructure Metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            {systemMetrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#0b1511]/80 backdrop-blur-sm border border-emerald-500/10 p-6 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">
                      {metric.region}
                    </div>
                    <div className="text-3xl font-black text-white">
                      {metric.latency}
                    </div>
                  </div>
                  <Server className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-xs text-gray-400 mb-4 italic">
                  {metric.desc}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-tighter">
                    <span className="text-gray-500">
                      API Throughput Capacity
                    </span>
                    <span className="text-emerald-400">{metric.load}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${metric.load}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Preview */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-emerald-500/10 bg-[#0b1511]/50 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="p-8 border-r border-emerald-500/10 bg-[#0b1511]">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                    API Call Simulation
                  </h3>
                </div>

                <div className="space-y-3 mb-8">
                  {reportTypes.map((item) => (
                    <button
                      key={item.type}
                      onClick={() => setReportType(item.type)}
                      className={`w-full text-left p-4 rounded-xl transition-all border ${
                        reportType === item.type
                          ? `bg-${item.color}-500/10 border-${item.color}-500 text-white`
                          : "bg-gray-900/50 border-gray-800 text-gray-400 hover:border-gray-700 hover:bg-gray-800/50"
                      }`}
                    >
                      <div className="font-bold mb-1">{item.type} Decision</div>
                      <div className="text-xs opacity-70 mb-3">{item.desc}</div>
                      <div className="flex flex-wrap gap-1">
                        {item.features.map((f, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded bg-gray-800/80 text-gray-300 font-mono border border-gray-700"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-emerald-500 text-black font-black text-sm uppercase tracking-widest hover:bg-emerald-400 hover:scale-[1.02] transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                  <Download className="w-4 h-4" />
                  Request API Documentation
                </button>
              </div>

              <div className="md:col-span-2 p-8 bg-gradient-to-br from-gray-900 to-[#060d0a]">
                <div className="flex justify-between items-start mb-10 border-b border-gray-800 pb-6">
                  <div>
                    <div className="text-xs text-emerald-400 font-mono font-bold mb-2">
                      SYSTEM_RESPONSE_TOKEN: FICO_
                      {Date.now().toString().slice(-6)}
                    </div>
                    <h3 className="text-3xl font-black text-white">
                      Decision Intelligence Payload
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-[10px] font-black text-emerald-400 animate-pulse">
                    LIVE_FEED
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-gray-800 relative group overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-xs text-gray-500 font-bold uppercase mb-4 tracking-widest">
                        FICO® Score 8 Payload
                      </div>
                      <div className="text-6xl font-black text-white mb-4">
                        {reportType === "Risk-Only" ? "ENCR" : "742"}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500"
                            style={{ width: "84%" }}
                          />
                        </div>
                        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                          A+ Tier
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-xl p-6 border border-gray-800">
                    <div className="text-xs text-gray-500 font-bold uppercase mb-4 tracking-widest">
                      Automated Decisioning
                    </div>
                    <div className="text-6xl font-black text-white mb-4">
                      APPROVED
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-[10px] px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-black border border-emerald-500/30 uppercase">
                        Instant-Decision
                      </div>
                      <div className="text-[10px] text-gray-500 font-bold">
                        Confidence Interval: 98.4%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: <Clock className="text-emerald-400" />,
                      label: "Response Time",
                      val: "142ms",
                    },
                    {
                      icon: <ShieldCheck className="text-blue-400" />,
                      label: "Compliance",
                      val: "FCRA Certified",
                    },
                    {
                      icon: <CheckCircle className="text-emerald-400" />,
                      label: "Audit Log",
                      val: "Persistent",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/30 border border-gray-800 hover:border-gray-700 transition-colors"
                    >
                      {stat.icon}
                      <div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase">
                          {stat.label}
                        </div>
                        <div className="text-sm font-black text-white">
                          {stat.val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalUtility;
