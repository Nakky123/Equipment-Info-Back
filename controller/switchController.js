// controllers/switchController.js
const Switch = require("../models/switchModel");

// Create a new switch
const createSwitch = async (req, res) => {
  try {
    const newSwitch = await Switch.create(req.body);
    res.status(201).json(newSwitch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all switches
const getAllSwitches = async (req, res) => {
  try {
    const switches = await Switch.find({});
    res.status(200).json(switches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single switch by ID
const getSwitchById = async (req, res) => {
  const { id } = req.params;
  try {
    const singleSwitch = await Switch.findById(id);
    if (!singleSwitch) {
      return res.status(404).json({ error: "Switch not found" });
    }
    res.status(200).json(singleSwitch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a switch by ID
const updateSwitch = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSwitch = await Switch.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSwitch) {
      return res.status(404).json({ error: "Switch not found" });
    }
    res.status(200).json(updatedSwitch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a switch by ID
const deleteSwitch = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSwitch = await Switch.findByIdAndDelete(id);
    if (!deletedSwitch) {
      return res.status(404).json({ error: "Switch not found" });
    }
    res.status(200).json({ message: "Switch deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSwitch,
  getAllSwitches,
  getSwitchById,
  updateSwitch,
  deleteSwitch,
};
