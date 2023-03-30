import express from 'express'
import { addProduct, getProducts } from '../Controllers/productController.js'
import multer from 'multer';
import path from 'path';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
const __dirname = path.resolve();

router.use(express.static('public'))


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // set the destination folder for uploaded images
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // generate a unique filename for the uploaded image
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('img'), addProduct)
router.get('/', getProducts)

export default router