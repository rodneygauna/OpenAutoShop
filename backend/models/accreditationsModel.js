import mongoose from "mongoose";

import {
  requiredString,
  optionalString,
  optionalDate,
  requireRef,
} from "../utils/validation/validationConstants.js";

const accreditationsSchema = new mongoose.Schema(
  {
    // Accreditation Information
    name: requiredString("Name of accreditation"),
    organization: optionalString(),
    license_number: optionalString(),
    obtained_date: optionalDate(),
    expiration_date: optionalDate(),
    // User Relationship
    user: requireRef("User"),
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Accreditations", accreditationsSchema);
