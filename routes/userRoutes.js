import express from 'express'
import {
  registerUser,
  authUser,
  getUsers,
}  from '../controllers/userController.js'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'

//signup
router.route('/signup').post(registerUser)

//signin
router.route('/signin').post(authUser)

//get all user
router.route('/').get(protect, getUsers)

export default router