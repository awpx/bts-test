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

//@desc       get all shopping
//@route      GET /api/shopping
//@access     private/login only
export const getShoppings = async (req, res) => {
  try {
    const shoppings = await Shopping.find({})

    res.json(shoppings)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

//@desc       GET single product
//@route      GET /api/shopping/:id
//@access     private/login only
export const getShoppingById = async (req, res) => {
  try {
    const shopping = await Shopping.findById(req.params.id)

    if(shopping) {
      res.json(shopping)
      
    } else {
      res.status(404)
      throw new Error('shopping not found')
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

//@desc       Admin: delete shopping
//@route      GET /api/shopping/:id
//@access     private/login
export const deleteShopping = async (req, res) => {
  try {
    const shopping = await Shopping.findById(req.params.id)

    if(shopping) {
      await shopping.remove()
      res.json({ success: true, message: 'shopping removed' })
      
    } else {
      res.status(404)
      throw new Error('shopping not found')
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}