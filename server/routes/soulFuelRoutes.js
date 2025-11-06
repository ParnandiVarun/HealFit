const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authmiddleware");
const soul = require("../controllers/soulFuelController");

router.get("/daily", protect, soul.getDailySoulFuel);
router.post("/", protect, soul.addSoulFuel);

router.post("/trigger-now", protect, soul.triggerSoulFuelNow);

module.exports = router;
