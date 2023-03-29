import ProductModel from "../Models/productModel.js";

// Add product
export const addProduct = async (req, res) => {
    const newPdt = new ProductModel(req.body)
    try {
        await newPdt.save()
        res.status(200).json(newPdt)
    } catch (error) {
        res.status(500).json(error);
    }
}

// Get products
export const getProducts = async (req, res) => {
    try {
        let products = await ProductModel.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}