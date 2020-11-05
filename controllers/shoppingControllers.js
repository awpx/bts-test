import Shopping from '../models/shoppingModel.js'


//@desc       create shopping/login only
//@route      POST /api/shopping
//@access     private/login
export const createShopping=  async (req, res) => {
  try {
    const shopping = new Shopping({
      name: req.body.name,
      createddate: req.body.createddate,
    })
  
    const createdShopping = await shopping.save()
    res.status(201).json({
      data: createdShopping
    })
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}