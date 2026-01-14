import React from "react";
import { useState } from "react";
import { Check, Zap, Rocket, Building2 } from "lucide-react";
const tiers = [
  {
    name: "Starter",
    icon: Zap,
    volume: "Up to 10K scores/mo",
    price: 0.45,
    features: [
      "Standard API access",
      "Email support",
      "Basic analytics dashboard",
      "99.5% uptime SLA",
    ],
  },
  {
    name: "Growth",
    icon: Rocket,
    volume: "10K – 100K scores/mo",
    price: 0.35,
    features: [
      "Priority API access",
      "Dedicated support",
      "Advanced analytics",
      "99.9% uptime SLA",
      "Custom webhooks",
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    volume: "100K+ scores/mo",
    price: 0.18,
    features: [
      "Dedicated infrastructure",
      "24/7 phone support",
      "Custom integrations",
      "99.99% uptime SLA",
      "On-premise option",
    ],
  },
];

const volumes = [
  { label: "5K/mo", value: 5000 },
  { label: "25K/mo", value: 25000 },
  { label: "50K/mo", value: 50000 },
  { label: "100K/mo", value: 100000 },
  { label: "500K/mo", value: 500000 },
  { label: "1M+/mo", value: 1000000 },
];

const Pricing = () => {
  const [selectedVolume, setSelectedVolume] = useState(5000);

  const recommendedTier =
    selectedVolume <= 10000
      ? "Starter"
      : selectedVolume <= 100000
      ? "Growth"
      : "Enterprise";

  const formatPrice = (value) => {
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
    return `$${value.toFixed(0)}`;
  };
  return (
    <section
      className="py-24 bg-gradient-to-b from-black via-[#08140e] to-black text-white"
      id="pricing"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold">
            Transparent <span className="text-green-400">Volume Pricing</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Simple, predictable pricing that scales with your business. No
            hidden fees.
          </p>

          {/* Volume selector */}
          <div className="inline-flex mt-8 p-1 rounded-full border border-white/10 bg-black/40">
            {volumes.map((v) => (
              <button
                key={v.value}
                onClick={() => setSelectedVolume(v.value)}
                className={`px-4 py-2 text-sm rounded-full transition
              ${
                selectedVolume === v.value
                  ? "bg-green-500 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const isRecommended = tier.name === recommendedTier;
            const monthlyCost = selectedVolume * tier.price;

            return (
              <div
                key={tier.name}
                className={`relative border rounded-xl p-8 bg-black/40 transition
              ${isRecommended ? "border-green-400/50" : "border-white/10"}`}
              >
                {isRecommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs rounded-full bg-green-500 text-black font-medium">
                    Recommended
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <tier.icon className="w-6 h-6 text-green-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-center mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-gray-400 text-center mb-6">
                  {tier.volume}
                </p>

                {/* Price */}
                <div className="text-center pb-6 mb-6 border-b border-white/10">
                  <div className="flex justify-center items-baseline gap-1">
                    <span className="text-4xl font-semibold">
                      ${tier.price.toFixed(2)}
                    </span>
                    <span className="text-gray-400">/score</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Est. {formatPrice(monthlyCost)}/mo at{" "}
                    {selectedVolume.toLocaleString()} scores
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className="w-4 h-4 text-green-400 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-md font-medium transition
                ${
                  isRecommended
                    ? "bg-green-500 text-black hover:bg-green-400"
                    : "border border-white/15 text-white hover:border-green-400/50"
                }`}
                >
                  {tier.name === "Enterprise"
                    ? "Contact Sales"
                    : "Start Free Trial"}
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          All plans include 14-day free trial • No credit card required • Cancel
          anytime
        </p>
      </div>
    </section>
  );
};

export default Pricing;
