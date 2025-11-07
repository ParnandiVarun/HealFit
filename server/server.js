require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const scheduler = require("./utils/scheduler");

// Import routes
const authroutes = require("./routes/authRoutes");
const Habitroutes = require("./routes/habitRoutes");
const habitlog = require("./routes/logRoutes");
const goalroutes = require("./routes/goalRoutes");
const soulroutes = require("./routes/soulFuelRoutes");
const notificationroutes = require("./routes/notificationRoutes");
const analytics = require("./routes/analyticsRoutes");

const app = express();

// ✅ Middlewares
app.use(express.json());

// ✅ Updated CORS Configuration (important for production)
const allowedOrigins = [
  "http://localhost:5173", // For local frontend
  process.env.FRONTEND_URL, // For deployed frontend (Vercel)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Static file serving (if you store uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Connect MongoDB before starting server
connectDB();

// ✅ Initialize background scheduler (for cron-like jobs)
scheduler.init();

// ✅ Routes
app.use("/soulfuel", soulroutes);
app.use("/notifications", notificationroutes);
app.use("/analytics", analytics);
app.use("/Goal", goalroutes);
app.use("/habitLog", habitlog);
app.use("/users", authroutes);
app.use("/habit", Habitroutes);

// ✅ Default route (for testing)
app.get("/", (req, res) => {
  res.send("✅ HealFit Backend is running successfully!");
});

// ✅ PORT setup
const PORT = process.env.PORT || 4000;

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
