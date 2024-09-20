// models/switchModel.js
const mongoose = require("mongoose");

// Define the schema for a Switch
const switchSchema = new mongoose.Schema(
  {
    WifiName: {
      type: String,
      required: true,
    },
    SwitchLocation: {
      type: String,
      required: true,
    },
    SwitchName: {
      type: String,
      required: true,
    },
    SwitchPort: {
      type: String,
    },
    SwitchIPAddress: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          // Basic regex to validate IPv4 addresses
          return /^(\d{1,3}\.){3}\d{1,3}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid IP address!`,
      },
    },
  },
  { timestamps: true }
);

// Create a model based on the schema
const Switch = mongoose.model("Switch", switchSchema);

module.exports = Switch;
