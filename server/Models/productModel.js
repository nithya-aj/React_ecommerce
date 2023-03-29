import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        img: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }, { timestamps: true }
)

const ProductModel = mongoose.model("products", ProductSchema)
export default ProductModel