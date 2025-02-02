import mongoose from "mongoose";

import {
  requiredStringMaxLength,
  optionalString,
  requiredNumberMinMax,
  requireRef,
} from "../utils/validation/validationConstants.js";

const vehicleSchema = new mongoose.Schema(
  {
    // Vehicle Information
    make: requiredStringMaxLength("Make", 255),
    model: requiredStringMaxLength("Model", 255),
    year: requiredStringMaxLength("Year", 4),
    vin: requiredStringMaxLength("VIN", 17),
    mileage: requiredNumberMinMax("Mileage", 0, 999999),
    serial_number: optionalString(),
    engine_number: optionalString(),
    license_plate: requiredStringMaxLength("License Plate", 10),
    color: requiredStringMaxLength("Color", 255),
    // Vehicle Status
    is_active: {
      type: Boolean,
      default: true,
    },
    // Customer Relationship
    customer: requireRef("Customer"),
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vehicle", vehicleSchema);
