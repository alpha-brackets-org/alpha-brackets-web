import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxLength: [50, "Name cannot be more than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    maxLength: [500, "Message cannot be more than 500 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  pending: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
