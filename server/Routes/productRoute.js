import express from 'express'
import { addProduct, getProducts } from '../Controllers/productController.js'

const router = express.Router()

router.post('/', addProduct)
router.get('/', getProducts)

export default router