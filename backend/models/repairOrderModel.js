import mongoose from "mongoose";

import {
  requiredString,
  optionalString,
  requiredDate,
  optionalDate,
  requiredEnum,
  requiredYesNo,
  requireRef,
  requiredNumberMinMax,
} from "../utils/validation/validationConstants.js";

const repairOrderSchema = new mongoose.Schema(
  {
    // Repair Order Information
    repair_order_number: requiredString("Repair Order Number"), // RO-YEAR-MONTH-DAY-0001 (e.g. RO-2021-09-01-0001)
    repair_order_date: requiredDate("Order Date"),
    repair_order_promised_date: requiredDate("Promised Date"),
    repair_order_status: requiredEnum("Order Status", [
      "Open",
      "On Hold",
      "Completed-Ready",
      "Completed-Picked Up",
      "Cancelled-Declined by Customer",
      "Cancelled-Declined by Shop",
      "Cancelled-Other",
    ]),
    repair_order_retain_parts: requiredYesNo("Retain Parts"),
    // Parts used in the repair
    parts_used: [
      {
        part_number: requiredString("Part Number"),
        part_description: requiredString("Part Description"),
        part_quantity: requiredNumberMinMax("Part Quantity", 1, 999),
        part_unit_price: requiredNumberMinMax("Unit Price", 0.01, 999999.99),
      },
    ],
    // Service performed in the repair
    services_performed: [
      {
        service_description: requiredString("Service Description"),
        service_quantity: requiredNumberMinMax("Service Quantity", 1, 999),
        service_unit_price: requiredNumberMinMax("Unit Price", 0.01, 999999.99),
      },
    ],
    // Mechanic Recommendations
    mechanic_recommendations: optionalString(),
    // Vehicle Relationship
    vehicle: requireRef("Vehicle"),
    // Mechanic Relationship
    mechanic: requireRef("User"),
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("RepairOrder", repairOrderSchema);
