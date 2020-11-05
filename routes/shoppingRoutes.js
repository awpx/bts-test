import express from 'express'
import { createShopping, getShoppings, getShoppingById, deleteShopping }  from '../controllers/shoppingControllers.js'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'

//post new shopping
router.route('/').post(protect, createShopping)

//get all shopping
router.route('/').get(protect, getShoppings)

//get & delete shopping by id
router.route('/:id').get(protect, getShoppingById).delete(protect, deleteShopping)

export default router