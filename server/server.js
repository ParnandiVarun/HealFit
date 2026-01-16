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

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.CLIENT_URL],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// REQUIRED: handle preflight requests
app.options(/.*/, cors());

// =====================

//Static file serving (uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect MongoDB
connectDB();

scheduler.init();

app.use("/soulfuel", soulroutes);
app.use("/notifications", notificationroutes);
app.use("/analytics", analytics);
app.use("/Goal", goalroutes);
app.use("/habitLog", habitlog);
app.use("/users", authroutes);
app.use("/habit", Habitroutes);

app.get("/", (req, res) => {
  res.send("✅ HealFit Backend is running successfully!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
