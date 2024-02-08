import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: String,
    productImage: String,
    price: Number,
    category: String,
    featured: Boolean,
  },
  {
    timestamps: true,
  }
);

const ProductSchema =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductSchema;
