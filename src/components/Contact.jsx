import React from "react";
import { useState } from "react";
import { Mail, Building2, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-28 bg-gradient-to-b from-black via-[#08140e] to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 mb-6">
              <Mail className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">Get in Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Ready to <span className="text-green-400">Transform</span> <br />
              Your Lending?
            </h2>

            <p className="text-gray-400 max-w-lg mb-10">
              Reach out to explore how our automated FICO scoring can accelerate
              your lending workflow and improve portfolio performance.
            </p>

            {/* Enterprise */}
            <div className="flex gap-4 mb-10">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Enterprise Solutions</h4>
                <p className="text-sm text-gray-400">
                  Custom integrations, dedicated support, and volume pricing for
                  large lenders.
                </p>
              </div>
            </div>

            {/* Infrastructure Card */}
            <div className="border border-white/10 rounded-xl p-6 bg-black/40 max-w-lg">
              <h4 className="font-semibold mb-3">Our Infrastructure</h4>
              <p className="text-sm text-gray-400 mb-5">
                Our services are delivered through a distributed, cloud-native
                infrastructure ensuring high availability and low latency.
              </p>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="text-green-400 font-semibold">5 Regions</div>
                  <div className="text-gray-500">Global Coverage</div>
                </div>
                <div>
                  <div className="text-green-400 font-semibold">99.99%</div>
                  <div className="text-gray-500">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="border border-white/10 rounded-2xl bg-black/40 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[420px] text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                  Our team will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name" placeholder="John Smith" />
                  <Field
                    label="Work Email"
                    type="email"
                    placeholder="john@company.com"
                  />
                </div>

                <Field label="Company" placeholder="Your company name" />

                {/* Select */}
                <div>
                  <label className="block text-sm mb-2">
                    Monthly Score Volume
                  </label>
                  <select className="w-full rounded-lg bg-[#0e1a14] border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-green-400">
                    <option>Select volume range</option>
                    <option>Under 10,000</option>
                    <option>10,000 – 50,000</option>
                    <option>50,000 – 100,000</option>
                    <option>100,000 – 500,000</option>
                    <option>500,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your credit scoring needs..."
                    className="w-full rounded-lg bg-[#0e1a14] border border-white/10 px-4 py-3 text-sm resize-none focus:outline-none focus:border-green-400"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-gradient-to-r from-green-500 to-green-400 text-black font-medium hover:opacity-90 transition"
                >
                  {loading ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg bg-[#0e1a14] border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-green-400"
      />
    </div>
  );
}

export default Contact;
