// routes/switchRoutes.js
const express = require("express");
const {
  createSwitch,
  getAllSwitches,
  getSwitchById,
  updateSwitch,
  deleteSwitch,
} = require("../controller/switchController");

const router = express.Router();

// Route to create a new switch
router.post("/", createSwitch);

// Route to get all switches
router.get("/", getAllSwitches);

// Route to get a switch by ID
router.get("/:id", getSwitchById);

// Route to update a switch by ID
router.put("/:id", updateSwitch);

// Route to delete a switch by ID
router.delete("/:id", deleteSwitch);

module.exports = router;
