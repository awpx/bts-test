import express from 'express'
import { createShopping }  from '../controllers/shoppingControllers.js'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createShopping)

export default router