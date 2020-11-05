import User from '../models/userModel.js'
import { generateToken } from '../utils/generateToken.js'

//@desc       Auth user & get token
//@route      POST /api/users/signin
//@access     private
export const authUser = async (req, res) => {
  try {
    const email = req.body.email
    const encrypted_password = req.body.password
 
    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(encrypted_password))) {
      res.json({
        email: user.email,
        token: generateToken(user._id),
        username: user.username,
      })
    } else {
      res.status(401)
      throw new Error('Invalid Email or Password')
    }

  } catch (error) {
    res.status(500).json({message: error.message})
    console.log(error)
  }
}


//@desc       register new user
//@route      POST /api/users/signup
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

//@desc       get all user
//@route      GET /api/users/
//@access     private/login only
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({})

    res.json(users)
  } catch (error) {
    
  }
}