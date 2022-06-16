const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    email: {type: String, required: true},
    products: {type: Object, required: true},
    orderId: {type: String, required: true},
    paymentId: {type: String, default: ''},
    address: {type: Object, required: true},
    phone: {type: String, required: true},
    amount: {type: Number, required:true},
    deliveryStatus: {type: String, default: 'Not Shipped'},
    status: {type: String, required: true, default: 'Pending'},
    fullName: {type: String, required: true}
}, {timestamps: true});

mongoose.models = {}
export default mongoose.model('Order', OrderSchema);