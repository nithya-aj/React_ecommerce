import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from './Routes/AuthRoute.js'
import productRoute from './Routes/productRoute.js'

const app = express();

//to save images for public
app.use(express.static('public'))
app.use('/images', express.static("images"))

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());
dotenv.config()

// Connect to MongoDB database
const dbUrl = process.env.MONGO_DB
const dbPort = process.env.PORT
mongoose.connect( dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(process.env.PORT, () => 
    console.log(`Listening at port ${dbPort}`)
  )
}).catch((error) => {
  console.log('Error connecting to MongoDB', error);
});

// Routes
app.use('/auth', authRoute)
app.use('/product', productRoute)