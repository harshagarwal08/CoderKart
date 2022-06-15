const crypto = require("crypto");
import Order from '../../models/Order'
import Product from '../../models/Product';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
            var expectedSignature = crypto.createHmac('sha256', process.env.KEY_SECRET)
                .update(body.toString())
                .digest('hex');
            var response = { "signatureIsValid": "false" }
            if (expectedSignature === req.body.response.razorpay_signature)
                response = { "signatureIsValid": "true" }
            let order = await Order.findOneAndUpdate({ orderId: req.body.order_id }, { status: 'Paid' , paymentId: req.body.response.razorpay_payment_id});
            let products = order.products;
            for (let slug in products){
                await Product.findOneAndUpdate({slug: slug}, {$inc: {"availableQty": - products[slug].qty }})
            }

            res.status(200).send(response);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
}

export default connectDb(handler);