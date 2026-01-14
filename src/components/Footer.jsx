import React from "react";
import { ShieldCheck, Lock, Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-semibold mb-4">
              fico<span className="text-green-400">.bot</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Automated credit decisioning infrastructure for modern lenders.
              Built for speed, compliance, and scale.
            </p>

            <div className="flex items-center gap-4 mt-6 text-gray-400">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <Lock className="w-5 h-5 text-green-400" />
              <Globe className="w-5 h-5 text-green-400" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-gray-300">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white transition">
                Decisioning Engine
              </li>
              <li className="hover:text-white transition">Risk Scoring</li>
              <li className="hover:text-white transition">Fraud Detection</li>
              <li className="hover:text-white transition">
                API & Integrations
              </li>
              <li className="hover:text-white transition">Pricing</li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-gray-300">
              Use Cases
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white transition">Digital Lending</li>
              <li className="hover:text-white transition">BNPL</li>
              <li className="hover:text-white transition">SME Credit</li>
              <li className="hover:text-white transition">Neo-banks</li>
              <li className="hover:text-white transition">Microfinance</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-gray-300">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white transition">About</li>
              <li className="hover:text-white transition">
                Security & Compliance
              </li>
              <li className="hover:text-white transition">Documentation</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>

            <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
              <Mail className="w-4 h-4 text-green-400" />
              <span>sales@fico.bot</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <div>© {new Date().getFullYear()} fico.bot. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition">Privacy Policy</span>
            <span className="hover:text-white transition">
              Terms of Service
            </span>
            <span className="hover:text-white transition">Responsible AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
