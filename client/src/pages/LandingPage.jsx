import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaHeartbeat,
  FaLeaf,
  FaRunning,
  FaSmileBeam,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

export default function LandingPage() {
  const accent = "#38B69A";
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-tight"
          >
            Build powerful habits.
            <span style={{ color: accent }}> Transform your life.</span>
          </motion.h1>

          <p className="mt-6 text-gray-600 max-w-lg">
            HealFit helps you track daily habits, monitor progress, and stay
            consistent with beautiful insights and real-time feedback.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
              style={{ backgroundColor: accent }}
            >
              Get Started Free
            </button>

            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              Login
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white border border-gray-200 shadow-2xl rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaHeartbeat style={{ color: accent }} /> Smart Dashboard
          </h3>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg flex items-center gap-2">
              <FaRunning style={{ color: accent }} /> Exercise
            </div>
            <div className="p-4 bg-gray-100 rounded-lg flex items-center gap-2">
              <FaSmileBeam style={{ color: accent }} /> Mindfulness
            </div>
            <div className="p-4 bg-gray-100 rounded-lg flex items-center gap-2">
              <FaLeaf style={{ color: accent }} /> Nutrition
            </div>
            <div className="p-4 bg-gray-100 rounded-lg flex items-center gap-2">
              <FaChartLine style={{ color: accent }} /> Analytics
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-20 text-white" style={{ backgroundColor: accent }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Why HealFit?</h2>
          <p className="mt-4 opacity-90 max-w-2xl mx-auto">
            Designed to help you stay consistent, motivated, and in control of
            your wellness journey.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRunning />,
                title: "Habit Tracking",
                desc: "Track daily routines with ease and clarity.",
              },
              {
                icon: <FaChartLine />,
                title: "Visual Analytics",
                desc: "Understand your growth with progress insights.",
              },
              {
                icon: <FaUsers />,
                title: "Community Support",
                desc: "Stay motivated with like-minded individuals.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl bg-white/20 backdrop-blur-md"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 opacity-90">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">What Users Say</h2>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white shadow-xl rounded-2xl p-10"
          >
            <p className="text-lg text-gray-700 italic">
              “HealFit helped me stay consistent for 60 days straight. The
              analytics make progress visible and motivating.”
            </p>
            <p className="mt-4 font-semibold" style={{ color: accent }}>
              — A Happy User
            </p>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-20 text-center text-white"
        style={{ backgroundColor: accent }}
      >
        <h2 className="text-3xl font-bold">Ready to build better habits?</h2>
        <p className="mt-4 opacity-90">
          Start your journey today and take control of your wellness.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="mt-8 px-8 py-3 rounded-full bg-white text-gray-900 font-semibold hover:scale-105 transition"
        >
          Start Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-600 border-t">
        <p className="font-semibold text-gray-800">
          © {new Date().getFullYear()} HealFit — Nurture your mind & body 🌿
        </p>
        <p className="mt-2">Made with ❤️ for healthier living</p>
      </footer>
    </div>
  );
}
