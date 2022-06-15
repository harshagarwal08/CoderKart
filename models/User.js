const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    savedData: {
        address: {type: String},
        pincode: {type: String},
        phone: {type: String},
    }
}, {timestamps: true});

mongoose.models = {}
export default mongoose.model('User', UserSchema);