import User from '../models/userModel.js'
import { generateToken } from '../utils/generateToken.js'


//@desc       register new user
//@route      POST /api/users
//@access     public
export const registerUser = async (req, res) => {
  try {
    const { username, email, encrypted_password, phone, address, city, country, name, postcode } = req.body
 
    const userExist = await User.findOne({ email })

    if (userExist) {
      res.status(400)
      throw new Error('User already exist')
    }

    const user = await User.create({
      username, 
      email, 
      encrypted_password, 
      phone, 
      address, 
      city, 
      country, 
      name, 
      postcode,
    })

    if (user) {
      res.status(201).json({
        email: user.email,
        token: generateToken(user._id),
        username: user.username,
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}