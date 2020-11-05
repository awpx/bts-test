import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()

import userRoutes from './routes/userRoutes.js'
// import shoppingRoutes from './routes/shoppingRoutes.js'

const app = express()

//middleware
app.use(express.json())

//connectDB
connectDB()

//import routes
app.use('/api/users', userRoutes)
// app.use('/api/shoppping', shoppingRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`server running on port ${PORT}...`) })