const authController = require('express').Router()
const User = require('../models/User')
const Order = require('../models/Order')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const {verifyToken} = require('../middlewares/verifyToken')

const JWT_SECRET = process.env.JWT_SECRET || '9445a6f15524f201d2231f5947be26f3';

// register
authController.post('/register', async (req, res) => {
  try {
    const isExisting = await User.findOne({ email: req.body.email })
    if (isExisting) {
      throw new Error("Already such an account with this email. Try a new one!")
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const newUser = await User.create({ ...req.body, password: hashedPassword })
    const { password, ...others } = newUser._doc
    const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, JWT_SECRET, { expiresIn: '5h' })

    return res.status(201).json({ others, token })
  } catch (error) {
    return res.status(500).json(error.message)
  }
})

// login
authController.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      throw new Error("User credentials are wrong!")
    }

    // 123456, [lkoiuytfdrse5rd6tfgyhijopk[l;]'\[pkojiugyftdrzsdxtfycghu]]
    const comparePass = await bcrypt.compare(req.body.password, user.password)
    if (!comparePass) {
      throw new Error("User credentials are wrong!")
    }

    const { password, ...others } = user._doc
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '5h' })

    return res.status(200).json({ others, token })
  } catch (error) {
    return res.status(500).json(error.message)
  }
})



// register order
authController.post('/order', verifyToken, async (req, res) => {

  try {
    const order = req.body;
    console.log(order);

    const newOrder = await Order.create({ ...req.body })
    return res.status(201).json({ newOrder })
  } 
  catch (error) {
    return res.status(500).json(error.message)
  }
})


module.exports = authController