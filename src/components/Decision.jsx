import React, { useState } from "react";

const DecisionSimulator = () => {
  const [score, setScore] = useState(700);

  const getDecision = (s) => {
    if (s > 740)
      return {
        status: "Auto-Approve",
        rate: "3.2%",
        color: "text-emerald-400",
        bgColor: "bg-gradient-to-br from-emerald-900/30 to-emerald-800/10",
        borderColor: "border-emerald-700/30",
        icon: "✓",
        description: "High confidence applicant. Eligible for best rates.",
        confidence: "95%",
        glow: "shadow-[0_0_40px_rgba(34,197,94,0.15)]",
        confidenceWidth: "95%",
      };
    if (s > 680)
      return {
        status: "Conditional Approve",
        rate: "4.8%",
        color: "text-amber-400",
        bgColor: "bg-gradient-to-br from-amber-900/30 to-amber-800/10",
        borderColor: "border-amber-700/30",
        icon: "⚠",
        description:
          "Standard risk profile. May require additional verification.",
        confidence: "75%",
        glow: "shadow-[0_0_30px_rgba(251,191,36,0.1)]",
        confidenceWidth: "75%",
      };
    if (s > 640)
      return {
        status: "Manual Review",
        rate: "6.5%",
        color: "text-orange-400",
        bgColor: "bg-gradient-to-br from-orange-900/30 to-orange-800/10",
        borderColor: "border-orange-700/30",
        icon: "↻",
        description:
          "Requires underwriter review. Additional documentation needed.",
        confidence: "45%",
        glow: "shadow-[0_0_30px_rgba(251,146,60,0.1)]",
        confidenceWidth: "45%",
      };
    return {
      status: "Decline",
      rate: "N/A",
      color: "text-red-400",
      bgColor: "bg-gradient-to-br from-red-900/30 to-red-800/10",
      borderColor: "border-red-700/30",
      icon: "✗",
      description: "Does not meet minimum credit requirements.",
      confidence: "15%",
      glow: "shadow-[0_0_30px_rgba(248,113,113,0.1)]",
      confidenceWidth: "15%",
    };
  };

  const decision = getDecision(score);

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-[#060d0a]"
      id="roi"
    >
      {/* Static background - emerald at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #060d0a 0%, #060d0a 50%, #0a1a12 80%, #0a2418 100%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(34,197,94,0.1) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(34,197,94,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-sm">Decision Intelligence</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Instant Lending Decision{" "}
            <span className="text-emerald-400">Simulator</span>
          </h2>

          <p className="text-lg text-gray-400">
            See how our API translates FICO scores into real-time lending
            decisions with automated risk assessment and pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Controls */}
          <div className="space-y-6">
            {/* Score Slider Card */}
            <div className="rounded-2xl bg-[#0b1511]/80 backdrop-blur-sm border border-emerald-500/10 p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Adjust FICO® Score
                  </h3>
                  <p className="text-sm text-gray-400">
                    Drag to simulate different credit profiles
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-emerald-400">Current Score</div>
                  <div className="text-5xl font-bold text-white">{score}</div>
                </div>
              </div>

              <div className="relative mb-2">
                <input
                  type="range"
                  min="300"
                  max="850"
                  value={score}
                  onChange={(e) => setScore(parseInt(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-emerald-900 [&::-webkit-slider-thumb]:shadow-lg"
                />
              </div>

              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span className="text-red-400 font-medium">300</span>
                <span className="text-orange-400 font-medium">580</span>
                <span className="text-amber-400 font-medium">670</span>
                <span className="text-emerald-400 font-medium">740</span>
                <span className="text-emerald-300 font-medium">850</span>
              </div>

              {/* Risk Indicators */}
              <div className="grid grid-cols-4 gap-2 mt-8">
                <div className="text-center">
                  <div className="text-red-400 font-semibold text-sm">Poor</div>
                  <div className="text-xs text-gray-500">High Risk</div>
                </div>
                <div className="text-center">
                  <div className="text-orange-400 font-semibold text-sm">
                    Fair
                  </div>
                  <div className="text-xs text-gray-500">Medium Risk</div>
                </div>
                <div className="text-center">
                  <div className="text-amber-400 font-semibold text-sm">
                    Good
                  </div>
                  <div className="text-xs text-gray-500">Low Risk</div>
                </div>
                <div className="text-center">
                  <div className="text-emerald-400 font-semibold text-sm">
                    Excellent
                  </div>
                  <div className="text-xs text-gray-500">Prime</div>
                </div>
              </div>
            </div>

            {/* Risk Factors Card */}
            <div className="rounded-2xl bg-[#0b1511]/80 backdrop-blur-sm border border-emerald-500/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Credit Risk Assessment
              </h3>

              <div className="space-y-6">
                {[
                  {
                    label: "Payment History",
                    value: score > 700 ? 95 : score > 600 ? 75 : 40,
                    color:
                      score > 700
                        ? "bg-emerald-500"
                        : score > 600
                        ? "bg-amber-500"
                        : "bg-red-500",
                  },
                  {
                    label: "Credit Utilization",
                    value: score > 720 ? 90 : score > 650 ? 65 : 35,
                    color:
                      score > 720
                        ? "bg-emerald-500"
                        : score > 650
                        ? "bg-amber-500"
                        : "bg-red-500",
                  },
                  {
                    label: "Credit Age",
                    value: score > 750 ? 88 : 60,
                    color: score > 750 ? "bg-emerald-500" : "bg-amber-500",
                  },
                  {
                    label: "Recent Inquiries",
                    value: score > 700 ? 92 : 55,
                    color: score > 700 ? "bg-emerald-500" : "bg-amber-500",
                  },
                ].map((factor, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{factor.label}</span>
                      <span className="text-white font-semibold">
                        {factor.value}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${factor.color} transition-all duration-700 ease-out rounded-full`}
                        style={{ width: `${factor.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Decision Output */}
          <div className="space-y-6">
            {/* Main Decision Card */}
            <div
              className={`${decision.bgColor} ${decision.borderColor} ${decision.glow} rounded-2xl border p-8 transition-all duration-500`}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-sm text-emerald-400 font-medium mb-1">
                    API Decision Output
                  </div>
                  <div className="text-2xl font-bold text-white">
                    Instant Lending Response
                  </div>
                </div>
                <div className={`text-5xl font-bold ${decision.color}`}>
                  {decision.icon}
                </div>
              </div>

              {/* Decision Stats */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-black/20 p-4 rounded-xl border border-gray-800">
                  <div className="text-sm text-gray-400 mb-1">
                    Decision Status
                  </div>
                  <div className={`text-2xl font-bold ${decision.color}`}>
                    {decision.status}
                  </div>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-gray-800">
                  <div className="text-sm text-gray-400 mb-1">Offered APR</div>
                  <div className="text-2xl font-bold text-white">
                    {decision.rate}
                  </div>
                </div>
              </div>

              {/* Confidence Meter */}
              <div className="bg-black/20 p-4 rounded-xl border border-gray-800 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm text-gray-400">
                    Approval Confidence
                  </div>
                  <div className="text-lg font-bold text-white">
                    {decision.confidence}
                  </div>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      score > 740
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                        : score > 680
                        ? "bg-gradient-to-r from-amber-500 to-amber-600"
                        : score > 640
                        ? "bg-gradient-to-r from-orange-500 to-orange-600"
                        : "bg-gradient-to-r from-red-500 to-red-600"
                    } transition-all duration-700 rounded-full`}
                    style={{ width: decision.confidenceWidth }}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="bg-black/20 p-4 rounded-xl border border-gray-800">
                <div className="text-sm text-emerald-400 mb-2">
                  Decision Rationale
                </div>
                <div className="text-gray-300">{decision.description}</div>
              </div>
            </div>

            {/* Processing Info */}
            <div className="rounded-2xl bg-[#0b1511]/80 backdrop-blur-sm border border-emerald-500/10 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm text-gray-400">Processing Time</div>
                    <div className="text-xl font-bold text-white">188ms</div>
                  </div>
                </div>
                <div className="text-sm text-emerald-400">Real-time API</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision Thresholds */}
        <div className="mt-16 pt-8 border-t border-emerald-500/10">
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            FICO® Decision Thresholds
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-b from-emerald-900/20 to-emerald-950/30 rounded-xl border border-emerald-500/20 p-6 text-center">
              <div className="text-sm text-emerald-400 mb-2">Auto-Approval</div>
              <div className="text-3xl font-bold text-emerald-300 mb-2">
                740+
              </div>
              <div className="text-xs text-emerald-400/70">
                Best Rates • Instant
              </div>
            </div>

            <div className="bg-gradient-to-b from-amber-900/15 to-amber-950/20 rounded-xl border border-amber-500/15 p-6 text-center">
              <div className="text-sm text-amber-400 mb-2">Conditional</div>
              <div className="text-3xl font-bold text-amber-300 mb-2">
                680-739
              </div>
              <div className="text-xs text-amber-400/70">
                Standard Rates • Fast
              </div>
            </div>

            <div className="bg-gradient-to-b from-orange-900/15 to-orange-950/20 rounded-xl border border-orange-500/15 p-6 text-center">
              <div className="text-sm text-orange-400 mb-2">Manual Review</div>
              <div className="text-3xl font-bold text-orange-300 mb-2">
                640-679
              </div>
              <div className="text-xs text-orange-400/70">
                Higher Rates • Review
              </div>
            </div>

            <div className="bg-gradient-to-b from-red-900/15 to-red-950/20 rounded-xl border border-red-500/15 p-6 text-center">
              <div className="text-sm text-red-400 mb-2">Decline</div>
              <div className="text-3xl font-bold text-red-300 mb-2">
                {"< 640"}
              </div>
              <div className="text-xs text-red-400/70">
                Not Eligible • Decline
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            This simulator demonstrates the instant decision intelligence our
            API provides.
            <span className="block mt-1 text-emerald-400/80">
              Actual lending decisions incorporate additional underwriting
              criteria.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DecisionSimulator;
