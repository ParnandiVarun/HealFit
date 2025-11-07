import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import "./index.css"; // ✅ Tailwind styles imported here

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />
      <Navbar />
      <AllRoutes />

      {/* 👇 Tailwind visual test area */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Tailwind is Working! 🎉
        </h1>
        <p className="text-lg text-white/90 mb-6">
          If you see a colorful gradient and styled text, your setup is correct.
        </p>
        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-100 transition duration-300">
          Test Tailwind Button
        </button>
      </div>
    </>
  );
}

export default App;
