import { ArrowRight, Code2, Layers, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Platform = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const codeBlockVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const workflowItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7 + i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="platform"
      className="relative py-24 md:py-32 overflow-hidden bg-[#060d0a]"
    >
      {/* Static background - no animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.15),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-14 items-center"
        >
          {/* LEFT CONTENT */}
          <div>
            <motion.div
              variants={slideUpVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 mb-6"
            >
              <Layers className="w-4 h-4" />
              <span className="text-sm">Platform Overview</span>
            </motion.div>

            <motion.h2
              variants={slideUpVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              One API for <span className="text-emerald-400">Complete</span>{" "}
              Credit Intelligence
            </motion.h2>

            <motion.p
              variants={slideUpVariants}
              className="text-lg text-gray-400 mb-8 max-w-xl"
            >
              Our API-driven service automates the retrieval and analysis of
              credit data to deliver predictive FICO scores that power instant,
              data-driven lending decisions.
            </motion.p>

            <div className="space-y-4 mb-10">
              {[
                "Multi-bureau data aggregation in a single request",
                "ML-powered risk scoring with explainable AI",
                "Real-time fraud detection and identity verification",
                "Configurable decisioning rules engine",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              variants={slideUpVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgb(52 211 153)",
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold transition-all duration-300"
            >
              Explore API Docs
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* RIGHT CODE BLOCK */}
          <motion.div variants={codeBlockVariants} className="relative">
            <div className="rounded-2xl bg-[#0b1511] border border-emerald-500/10 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-emerald-500/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 flex items-center gap-2 text-sm text-gray-400">
                  <Code2 className="w-4 h-4" />
                  API Request
                </span>
              </div>

              {/* Code */}
              <pre className="p-6 text-sm overflow-x-auto text-gray-300">
                <code>
                  {`const response = await ficoPulse.score({
  applicant: {
    ssn: "xxx-xx-1234",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1985-03-15"
  },
  options: {
    bureaus: ["equifax", "experian", "transunion"],
    scoreModel: "fico9",
    includeFactors: true
  }
});

// Response in < 50ms
{
  "score": 742,
  "rating": "Very Good",
  "factors": [
    { "code": "01", "reason": "On-time payment history" },
    { "code": "14", "reason": "Low credit utilization" }
  ],
  "confidence": 0.94,
  "requestId": "req_8f7d6e5c4b3a"
}`}
                </code>
              </pre>
            </div>
          </motion.div>
        </motion.div>

        {/* WORKFLOW SECTION */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="mt-24"
        >
          <motion.div
            variants={slideUpVariants}
            className="flex items-center gap-2 justify-center mb-10 text-emerald-400"
          >
            <Workflow className="w-5 h-5" />
            <span className="text-sm">How It Works</span>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              [
                "01",
                "API Request",
                "Submit applicant data via secure REST API",
              ],
              [
                "02",
                "Data Retrieval",
                "Fetch credit data from multiple bureaus",
              ],
              [
                "03",
                "ML Processing",
                "Run predictive models and risk analysis",
              ],
              ["04", "Instant Decision", "Receive score and factors instantly"],
            ].map(([step, title, desc], i) => (
              <motion.div
                key={i}
                custom={i}
                variants={workflowItemVariants}
                className="relative"
              >
                <div className="h-full rounded-xl bg-[#0b1511] border border-emerald-500/10 p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-3">
                    {step}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{title}</h4>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
                {i < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-emerald-500 w-5 h-5" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Platform;
