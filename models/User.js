const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: Object}
}, {timestamps: true});

mongoose.models = {}
export default mongoose.model('User', UserSchema);