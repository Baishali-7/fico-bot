import {
  Zap,
  Database,
  ShieldCheck,
  Globe,
  Lock,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Sub-50ms response times enable real-time decisioning in your loan origination workflow.",
  },
  {
    icon: Database,
    title: "Cloud-Native",
    desc: "Distributed infrastructure ensures high availability and automatic scaling during peak loads.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    desc: "SOC 2 Type II certified with end-to-end encryption and comprehensive audit logging.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    desc: "Access credit data from multiple bureaus worldwide through a single unified API.",
  },
  {
    icon: Lock,
    title: "Regulatory Compliant",
    desc: "Built-in FCRA, ECOA, and CCPA compliance with automated adverse action notices.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    desc: "Real-time dashboards and predictive insights to optimize your portfolio performance.",
  },
];

const Infrastructure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #060d0a 0%, #060d0a 40%, #0a1a12 70%, #0a2418 100%)",
      }}
    >
      {/* Static background glow at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 120%, rgba(34,197,94,0.25), transparent 70%)",
          opacity: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Enterprise-Grade{" "}
            <span className="text-emerald-400">Infrastructure</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-400">
            Built for scale, security, and speed. Our platform handles millions
            of requests daily with unwavering reliability.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(34, 197, 94, 0.3)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.2 },
                }}
                className="rounded-2xl bg-[#0b1511]/80 backdrop-blur-sm border border-emerald-500/10 p-8 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center mb-6"
                >
                  <Icon className="w-6 h-6 text-black" />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Infrastructure;
