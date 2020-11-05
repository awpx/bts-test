import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  encrypted_password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
}, { timestamps: true })

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.encrypted_password)
}

userSchema.pre('save', async function(next) {
  if (!this.isModified('encrypted_password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.encrypted_password = await bcrypt.hash(this.encrypted_password, salt)

})

const User = mongoose.model('User', userSchema)

export default User