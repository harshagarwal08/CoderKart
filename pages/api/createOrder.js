const Razorpay = require('razorpay')
import connectDb from '../../middleware/mongoose';
import Order from '../../models/Order'

const handler = async (req, res) => {
    if(req.method==='POST'){
      
      //check if user clears cart and then try to pay
      //check if the cart items prices are not tampered
      //check if the cart items are not out of stock
      //check if the details are valid

        try{
            const instance = new Razorpay({
              key_id: process.env.NEXT_PUBLIC_KEY,
              key_secret: process.env.KEY_SECRET
            })
            const options = { 
              amount: req.body.amount,
              currency: "INR",
            }
            const order = await instance.orders.create(options);
            if(!order) return res.status(500).send('some error occured')
            let orderData = new Order({
              email: req.body.email,
              orderId: order.id,
              address: req.body.address,
              amount: req.body.amount/100,
              products: req.body.cart
            })
            await orderData.save()
            res.send(order);
          }
          catch(error){
            res.status(500).send(error)
          }
    }
}

export default connectDb(handler)