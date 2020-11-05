import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI,
    {  
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology:true,
    })

    console.log(`MongoDB Connected: ${connect.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB