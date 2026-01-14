import React from "react";
import { DollarSign, TrendingUp, Clock, PiggyBank } from "lucide-react";
import { useState, useMemo } from "react";

const Calculator = () => {
  const [monthlyVolume, setMonthlyVolume] = useState(50000);
  const [currentCost, setCurrentCost] = useState(0.75);
  const [manualReviewRate, setManualReviewRate] = useState(15);

  const data = useMemo(() => {
    let ourCost = 0.35;
    if (monthlyVolume > 100000) ourCost = 0.25;
    if (monthlyVolume > 500000) ourCost = 0.18;
    if (monthlyVolume > 1000000) ourCost = 0.12;

    const monthlySavings = (currentCost - ourCost) * monthlyVolume;
    const annualSavings = monthlySavings * 12;

    const reviews = monthlyVolume * (manualReviewRate / 100);
    const eliminated = Math.round(reviews * 0.6);
    const reviewSavings = eliminated * 8 * 12;
    return {
      ourCost,
      monthlySavings,
      annualSavings: annualSavings + reviewSavings,
      perScoreSavings: currentCost - ourCost,
      eliminated,
      reviewSavings,
      savingsPercent: ((currentCost - ourCost) / currentCost) * 100,
    };
  }, [monthlyVolume, currentCost, manualReviewRate]);

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-black via-[#08140e] to-black py-24 text-white"
      id="roi"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold">
            Calculate Your <span className="text-green-400">ROI</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            See exactly how much you could save by switching to our automated
            scoring platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT – INPUTS */}
          <div className="border border-white/10 rounded-lg p-8 bg-black/40">
            <h3 className="text-lg font-medium mb-8">Your Current Situation</h3>

            {/* Slider */}
            <SliderBlock
              label="Monthly Score Requests"
              value={monthlyVolume.toLocaleString()}
              minLabel="1K"
              maxLabel="2M"
            >
              <input
                type="range"
                min={1000}
                max={2000000}
                step={1000}
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(+e.target.value)}
                className="w-full accent-green-400"
              />
            </SliderBlock>

            <SliderBlock
              label="Current Cost Per Score"
              value={`$${currentCost.toFixed(2)}`}
              minLabel="$0.20"
              maxLabel="$2.00"
            >
              <input
                type="range"
                min={0.2}
                max={2}
                step={0.05}
                value={currentCost}
                onChange={(e) => setCurrentCost(+e.target.value)}
                className="w-full accent-green-400"
              />
            </SliderBlock>

            <SliderBlock
              label="Manual Review Rate"
              value={`${manualReviewRate}%`}
              minLabel="5%"
              maxLabel="40%"
            >
              <input
                type="range"
                min={5}
                max={40}
                value={manualReviewRate}
                onChange={(e) => setManualReviewRate(+e.target.value)}
                className="w-full accent-green-400"
              />
            </SliderBlock>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between">
              <span className="text-gray-400 text-sm">Our price per score</span>
              <span className="text-green-400 font-semibold">
                ${data.ourCost.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Volume-based pricing • No setup fees
            </p>
          </div>

          {/* RIGHT – RESULTS */}
          <div className="space-y-4">
            {/* HERO CARD */}
            <div className="rounded-lg border border-green-400/30 bg-gradient-to-br from-green-900/40 to-black p-10 text-center">
              <p className="text-sm text-gray-400">Total Annual Savings</p>
              <p className="text-5xl font-semibold text-green-400 mt-2">
                ${Math.round(data.annualSavings).toLocaleString()}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                {data.savingsPercent.toFixed(0)}% reduction in scoring costs
              </p>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard icon={DollarSign} label="Monthly Savings">
                ${Math.round(data.monthlySavings).toLocaleString()}
              </StatCard>

              <StatCard icon={TrendingUp} label="Per-Score Savings">
                ${data.perScoreSavings.toFixed(2)}
              </StatCard>

              <StatCard icon={Clock} label="Reviews Eliminated">
                {data.eliminated.toLocaleString()}/mo
              </StatCard>

              <StatCard icon={PiggyBank} label="Review Savings">
                ${Math.round(data.reviewSavings).toLocaleString()}/yr
              </StatCard>
            </div>

            <button className="w-full py-4 mt-4 rounded-md bg-green-500 hover:bg-green-400 text-black font-medium transition">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- components ---------------- */

function SliderBlock({ label, value, minLabel, maxLabel, children }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-3">
        <span className="text-sm text-gray-300">{label}</span>
        <span className="text-green-400 font-medium">{value}</span>
      </div>
      {children}
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, children }) {
  return (
    <div className="border border-white/10 rounded-lg p-5 bg-black/40">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-md bg-green-500/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-green-400" />
        </div>
        <span className="text-sm text-gray-400">{label}</span>
      </div>
      <p className="text-xl font-semibold">{children}</p>
    </div>
  );
}

export default Calculator;
