const Razorpay = require('razorpay')
import connectDb from '../../middleware/mongoose';
import Order from '../../models/Order'
import Product from '../../models/Product'
const validator = require("email-validator");


const handler = async (req, res) => {
  if (req.method === 'POST') {
    if(!validator.validate(req.body.email)){
      return res.status(200).json({ success: false, error: "Please enter a valid email address.", "reload": false })
    }
    if(req.body.fname.length<=0){
      return res.status(200).json({ success: false, error: "Please enter your first name.", "reload": false })
    }
    if(req.body.lname.length<=3){
      return res.status(200).json({ success: false, error: "Please enter your last name.", "reload": false })
    }
    if(req.body.address.length<=5){
      return res.status(200).json({ success: false, error: "Please enter your address.", "reload": false })
    }
    if (req.body.pincode.length !== 6 || !Number.isInteger(Number(req.body.pincode))) {
      return res.status(200).json({ success: false, error: "Please enter a valid pincode.", "reload": false })
    }
    if (req.body.phone.length !== 10 || !Number.isInteger(Number(req.body.phone))) {
      return res.status(200).json({ success: false, error: "Please enter a valid phone number.", "reload": false })
    }
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
    let pincodes = await pins.json()
    if (!Object.keys(pincodes).includes(req.body.pincode)) {
      return res.status(200).json({ success: false, "error": "The pincode you have entered in not serviceable", "reload": false })
    }
    if (req.body.subTotal <= 0) {
      return res.status(200).json({ success: false, "error": "Your cart is empty. Please build your cart and try again!", "reload": true })
    }
    let cart = req.body.cart
    let product, sumTotal = 0;
    for (let item in req.body.cart) {
      sumTotal += cart[item].price * cart[item].qty
      product = await Product.findOne({ slug: item })
      if (product.availableQty < cart[item].qty) {
        return res.status(200).json({ success: false, "error": "Some items in your cart are out of stock.", })
      }
      if (product.price !== cart[item].price) {
        return res.status(200).json({ success: false, "error": "The price of some items in your cart have changed.", "reload": true })
      }
    }
    if (sumTotal !== Number(req.body.subTotal)) {
      return res.status(200).json({ success: false, error: "The price of some items in your cart have changed. Please try again.", "reload": true })
    }
    try {
      const instance = new Razorpay({
        key_id: process.env.NEXT_PUBLIC_KEY,
        key_secret: process.env.KEY_SECRET
      })
      const options = {
        amount: req.body.amount,
        currency: "INR",
      }
      const order = await instance.orders.create(options);
      console.log(order);
      if (!order) return res.status(500).send('some error occured')
      let fullname = req.body.fname + ' ' + req.body.lname;
      let orderData = new Order({
        email: req.body.email,
        orderId: order.id,
        address: req.body.address,
        amount: req.body.subTotal,
        products: req.body.cart,
        phone: req.body.phone,
        pincode: req.body.pincode,
        fullName: fullname
      })
      await orderData.save()

      res.status(200).json({ order, success: true });
    }
    catch (error) {
      console.log(error);
      res.status(500).send(error)
    }
  }
}

export default connectDb(handler)