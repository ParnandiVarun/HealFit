import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Habits from "../pages/Habits";
import ResetPasswordPage from "../pages/Change";
import Profile from "../pages/Profile";
import GoalsPage from "../pages/Goal";
import SoulFuel from "../pages/SoulFuel";
import Notification from "../pages/Notification";
import AnalyticsDashboard from "../pages/Analytics";
import AiChat from "../pages/Chatboat";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/soulfuel" element={<SoulFuel />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/chatboat" element={<AiChat />} />
      </Routes>
    </>
  );
}
