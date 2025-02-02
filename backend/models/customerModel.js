import mongoose from "mongoose";

import {
  requiredStringMaxLength,
  optionalStringMaxLength,
  requiredPhoneNumber,
} from "../utils/validation/validationConstants.js";

const customerSchema = new mongoose.Schema(
  {
    // Customer Demographics
    first_name: requiredStringMaxLength("First name", 255),
    middle_name: optionalStringMaxLength(255),
    last_name: requiredStringMaxLength("Last name", 255),
    suffix: optionalEnum(["Jr", "Sr", "I", "II", "III", "IV", "V"]),
    // Customer Contact Information
    phone_number: requiredPhoneNumber(),
    // Customer Email and Password Hash
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password_hash: requiredStringMaxLength("Password hash", 1024),
    // Customer Status
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Customer", customerSchema);
