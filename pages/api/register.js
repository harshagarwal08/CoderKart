import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email } = req.body
        User.findOne({ email: email }).then(user => {
            if (user) {
                return res.status(200).json({ success: false, error: 'Email is already registered.' });
            }
        })
        let u = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, `${process.env.SECRET_KEY_USER}`).toString() })
        const token = jwt.sign({name, email}, `${process.env.JWT_SECRET}`, {
            expiresIn: '2d'
        });
        await u.save()
        res.status(200).json({ success: true, token})
    }
    else {
    res.status(400).json({ error: 'This method is not allowed' })
}
}
export default connectDb(handler)