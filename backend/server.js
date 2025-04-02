const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

const userSchema = new mongoose.Schema({
  title: String,
  firstName: String,
  middleName: String,
  lastName: String,
  dateOfBirth: String,
  gender: String,
  phoneNumber: String,
  address: String,
  email: String,
  appliedBefore: String,
  department: String,
  procedure: String,
  appointmentDate: String,
  appointmentTime: String,
});

// Create Model
const User = mongoose.model("User", userSchema);

// API Route to Handle Form Submission
app.post("/api/register", async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    // Trim all string fields before saving
    const trimmedData = {};
    for (const key in req.body) {
      if (typeof req.body[key] === "string") {
        trimmedData[key] = req.body[key].trim();
      } else {
        trimmedData[key] = req.body[key];
      }
    }

    const newUser = new User(trimmedData);
    await newUser.save();

    console.log("Data saved to MongoDB:", newUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
