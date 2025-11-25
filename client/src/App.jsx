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
    </>
  );
}

export default App;
