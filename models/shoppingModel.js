import mongoose from 'mongoose'

const shoppingSchema = mongoose.Schema({
  createddate: {
    type: Date,
    default: Date.now(),
  },
  name: {
    type: String,
    required: true,
  },
}, { timestamps: true })


const Shopping = mongoose.model('Shopping', shoppingSchema)

export default Shopping