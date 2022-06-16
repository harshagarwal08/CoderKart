import User from '../../models/User'
const jwt = require('jsonwebtoken');
import connectDb from '../../middleware/mongoose'
const CryptoJS = require('crypto-js');

const handler = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        const userPassword = CryptoJS.AES.decrypt(user.password, `${process.env.SECRET_KEY_USER}`).toString(CryptoJS.enc.Utf8);
        if(req.body.newPassword.length <= 2)return res.status(400).json({ success: false, error: 'Please enter the new password.' })
        if (req.body.password !== userPassword) {
            return res.status(400).json({ success: false, error: 'Password is incorrect. Please try again.' })
        }
        if (req.body.newPassword !== req.body.cnewPassword) {
            return res.status(400).json({ success: false, error: "Passwords doesn't match. Please try again." })
        }
        const changedPassword = CryptoJS.AES.encrypt(req.body.newPassword, `${process.env.SECRET_KEY_USER}`).toString();
        await User.findOneAndUpdate({ email: req.body.email }, { name: req.body.name, password: changedPassword })
        res.status(200).json({ success: true });
    }
    catch (e) {
        res.status(400).json({ success: false, error: e });
    }
}
export default connectDb(handler)
