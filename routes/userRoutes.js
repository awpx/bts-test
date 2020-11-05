import express from 'express'
import {
  registerUser,
  authUser,
}  from '../controllers/userController.js'
const router = express.Router()

//signup
router.route('/signup').post(registerUser)

//signin
router.route('/signin').post(authUser)

export default router