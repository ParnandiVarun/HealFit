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

// =====================
// ✅ FIXED CORS SETUP
// =====================
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL, // https://heal-fit-ys7g.vercel.app
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow Postman, curl, mobile apps
      if (!origin) return callback(null, true);

      // Allow exact known origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // ✅ Allow ALL Vercel preview deployments
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      // ❌ DO NOT throw error — just deny
      return callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ REQUIRED: handle preflight requests
app.options(/.*/, cors());

// =====================

// ✅ Static file serving (uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Connect MongoDB
connectDB();

// ✅ Initialize scheduler
scheduler.init();

// ✅ Routes
app.use("/soulfuel", soulroutes);
app.use("/notifications", notificationroutes);
app.use("/analytics", analytics);
app.use("/Goal", goalroutes);
app.use("/habitLog", habitlog);
app.use("/users", authroutes);
app.use("/habit", Habitroutes);

// ✅ Health check
app.get("/", (req, res) => {
  res.send("✅ HealFit Backend is running successfully!");
});

// ✅ PORT
const PORT = process.env.PORT || 4000;

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
