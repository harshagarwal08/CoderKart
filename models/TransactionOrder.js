const mongoose = require('mongoose')
const TransactionOrderSchema = mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    razorpay: {
        orderId: String,
        paymentId: String,
        signature: String,
    }
});
mongoose.models = {}
export default mongoose.model('TransactionOrder', TransactionOrderSchema);