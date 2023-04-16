
import express from 'express'; 
import cors from 'cors'; 
import connectDB from './config/connectdb.js';
import dotenv from 'dotenv'

import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import excelRoute from './routes/excelRoutes.js'
import cookie from 'cookie-parser'
import bodyParser from 'body-parser';
dotenv.config()
const port = process.env.PORT
const app = express()
app.use(cors({credentials:true, origin:process.env.FRONTEND_URL,  methods: "GET,POST,PUT,DELETE"}))
app.use( express.json({limit: '14kb'}))
app.use(bodyParser.urlencoded({ extended: true}));
app.use("/upload", express.static("./upload"))
app.use(cookie());
connectDB()
//Load Routes
app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/order", orderRoutes)
app.use("/api/finalStep", excelRoute)

app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`)
})