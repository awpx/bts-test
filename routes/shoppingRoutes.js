import express from 'express'
import { createShopping, getShoppings }  from '../controllers/shoppingControllers.js'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'

//post new shopping
router.route('/').post(protect, createShopping)

//get all shopping
router.route('/').get(protect, getShoppings)

export default router