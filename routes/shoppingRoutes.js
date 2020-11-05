import express from 'express'
import { createShopping, getShoppings, getShoppingById }  from '../controllers/shoppingControllers.js'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'

//post new shopping
router.route('/').post(protect, createShopping)

//get all shopping
router.route('/').get(protect, getShoppings)

//get shopping by id
router.route('/:id').get(protect, getShoppingById)

export default router