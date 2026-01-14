import React from "react";
import { useState } from "react";
import {
  User,
  Database,
  Cpu,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
const steps = [
  {
    id: 1,
    title: "Borrower Data Input",
    description:
      "Lender system submits borrower profile, income, bureau data, and transaction history.",
    icon: Database,
  },
  {
    id: 2,
    title: "fico.bot Analysis",
    description:
      "fico.bot analyzes credit signals, behavioral risk, and fraud indicators in real time.",
    icon: Cpu,
  },
  {
    id: 3,
    title: "Instant Decision",
    description:
      "Automated decision returned to lender system within milliseconds.",
    icon: CheckCircle,
  },
];

const Flow = () => {
  const [activeStep, setActiveStep] = useState(1);

  const current = steps.find((s) => s.id === activeStep);

  return (
    <section className="py-28 bg-black text-white" id="flow">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Automated <span className="text-green-400">Decisioning</span> Flow
          </h2>
          <p className="text-gray-400">
            See how fico.bot seamlessly integrates into your lending workflow —
            from borrower data intake to instant credit decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT – FLOW STEPS */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = step.id === activeStep;
              const isCompleted = step.id < activeStep;

              return (
                <div key={step.id} className="relative">
                  <div
                    className={`flex gap-5 p-6 border rounded-xl transition ${
                      isActive
                        ? "border-green-400 bg-green-400/5"
                        : "border-white/10 bg-black/40"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-lg ${
                        isCompleted
                          ? "bg-green-400 text-black"
                          : "bg-green-500/10 text-green-400"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">
                        Step {step.id}: {step.title}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-full h-6 w-px bg-white/10" />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT – INTERACTIVE PANEL */}
          <div className="border border-white/10 rounded-2xl bg-black/40 p-8 min-h-[360px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <current.icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">{current.title}</h3>
              </div>

              <p className="text-gray-400 mb-8">{current.description}</p>

              {/* Dynamic content */}
              {activeStep === 1 && (
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <Info label="Borrower" value="Individual / SME" />
                  <Info label="Credit History" value="Bureau + Alt Data" />
                  <Info label="Income" value="Verified" />
                  <Info label="KYC Status" value="Completed" />
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-3 text-sm">
                  <Signal label="Risk Scoring" />
                  <Signal label="Behavioral Analysis" />
                  <Signal label="Fraud Detection" />
                  <Signal label="Policy Rules Engine" />
                </div>
              )}

              {activeStep === 3 && (
                <div className="flex items-center gap-4 p-4 border border-green-400/30 rounded-xl bg-green-400/5">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <div>
                    <div className="font-semibold text-green-400">Approved</div>
                    <div className="text-sm text-gray-400">
                      Decision delivered instantly to lender system
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex gap-4 mt-10">
              {activeStep < 3 ? (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-400 text-black font-medium hover:opacity-90 transition"
                >
                  Next Step
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setActiveStep(1)}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition"
                >
                  <RotateCcw className="w-4 h-4" />
                  Restart Demo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Info({ label, value }) {
  return (
    <div className="border border-white/10 rounded-lg p-3 bg-black/30">
      <div className="text-gray-500 text-xs mb-1">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

function Signal({ label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span>{label}</span>
    </div>
  );
}

export default Flow;
