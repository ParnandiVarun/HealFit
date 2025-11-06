const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middlewares/authmiddleware");

const multer = require("multer");
const path = require("path");
const fs = require("fs");

const User = require("../models/userModel");
const Goal = require("../models/goal");
const Habit = require("../models/habit");

// Create uploads folder if doesn't exist
const uploadsDir = path.join(__dirname, "../uploads/profile-pictures");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log("✅ Created uploads directory:", uploadsDir);
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `profile-${req.user.id}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    if (ext && mime) return cb(null, true);
    cb(new Error("Only images allowed (JPEG, PNG, GIF, WebP)"));
  },
});

// ✅ Upload Profile Picture
router.post(
  "/:id/upload",
  auth,
  upload.single("profilePicture"),
  async (req, res) => {
    try {
      if (req.user.id !== req.params.id) {
        return res
          .status(403)
          .json({ success: false, message: "Unauthorized action" });
      }

      if (!req.file)
        return res
          .status(400)
          .json({ success: false, message: "No file uploaded" });

      const filePath = "/uploads/profile-pictures/" + req.file.filename;

      const user = await User.findByIdAndUpdate(
        req.user.id,
        { profilePicture: filePath },
        { new: true }
      );

      res.json({
        success: true,
        message: "Profile picture updated successfully",
        profilePicture: user.profilePicture,
      });
    } catch (err) {
      console.error("❌ Upload Error:", err);
      res.status(500).json({ success: false, message: err.message });
    }
  }
);

// ✅ Get User Stats
router.get("/:id/stats", auth, async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const userId = req.user.id;

    const totalGoals = await Goal.countDocuments({ userId });
    const completedGoals = await Goal.countDocuments({
      userId,
      completed: true,
    });

    const stats = {
      totalHabits: 12,
      completedHabits: 8,
      currentStreak: 7,
      longestStreak: 21,
      totalGoals,
      completedGoals,
    };

    res.json({ success: true, stats });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Update Profile
router.put("/:id", auth, async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    });
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Get User Profile
router.get("/:id", auth, async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const user = await User.findById(req.user.id).select("-password");

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Auth Routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);

module.exports = router;
