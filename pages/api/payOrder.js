import TransactionOrder from '../../models/TransactionOrder'
import Order from '../../models/Order'
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
            const newOrder = TransactionOrder({
                isPaid: true,
                amount: amount,
                razorpay: {
                    orderId: razorpayOrderId,
                    paymentId: razorpayPaymentId,
                    signature: razorpaySignature
                }
            });
            await newOrder.save();
            await Order.findOneAndUpdate({orderId: req.body.order_id}, {status: 'Paid'})
            res.status(200).json({success:true})
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
}
export default connectDb(handler)