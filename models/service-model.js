// import { Document, Schema, model } from 'mongoose';
// import { IPayment_cycle } from './product.model';

// // 1. Create an interface representing a document in MongoDB.
// export interface IService extends Document {
//     productId: Schema.Types.ObjectId;
//     order_id: string;
//     payment_Id?: Schema.Types.ObjectId;
//     domain?: Schema.Types.ObjectId;
//     fish?: Schema.Types.ObjectId;
//     payment_cycle: IPayment_cycle;
//     active_at: Date | null;
//     payment_status?: string | null;
//     system_status: string;
//     status: string;
//     trash: boolean;
//     createdBy: Schema.Types.ObjectId;
// }

// // 2. Create a Schema corresponding to the document interface.
// const serviceSchema = new Schema<IService>({
//     productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
//     order_id: { type: String, required: true },
//     domain: { type: Schema.Types.ObjectId, ref: 'Domain', default: null },
//     fish: { type: Schema.Types.ObjectId, ref: 'Fish', default: null },
//     payment_Id: { type: Schema.Types.ObjectId, ref: 'Payment', default: null },
//     payment_cycle: { type: String, enum: ['monthly', 'yearly', 'none'], default: 'none' },
//     payment_status: { type: String, default: null },
//     active_at: { type: Date, default: null },
//     system_status: { type: String, enum: ['running', 'stopped', 'maintenance', 'processing', 'failed'], default: 'stopped' },
//     status: { type: String, enum: ['active', 'expired', 'suspended', 'pending'], default: 'pending' },
//     trash: { type: Boolean, default: false },
//     createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
// }, { timestamps: true });

// // 3. Create and export Model.
// export default model<IService>('Service', serviceSchema, 'services');

// 63aa96bbf8c7885944e885e9

const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    email: { type: String },
    password: { type: String },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    order_id: { type: String, required: true },
    domain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Domain",
      default: null,
    },
    fish: { type: mongoose.Schema.Types.ObjectId, ref: "Fish", default: null },
    payment_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      default: null,
    },
    payment_cycle: {
      type: String,
      enum: ["monthly", "yearly", "none"],
      default: "none",
    },
    payment_status: { type: String, default: null },
    active_at: { type: Date, default: null },
    system_status: {
      type: String,
      enum: ["running", "stopped", "maintenance", "processing", "failed"],
      default: "stopped",
    },
    status: {
      type: String,
      enum: ["active", "expired", "suspended", "pending"],
      default: "pending",
    },
    trash: { type: Boolean, default: false },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("serviceModel", serviceSchema, "Service");
