import User from '../../models/User'
import connectDb from '../../middleware/mongoose' 

const handler = async (req, res) => {
    try{
        if(req.body.name.length<=0){
            return res.status(200).json({ success: false, error: "Please enter a name."})
          }
          if(req.body.street.length<=5){
            return res.status(200).json({ success: false, error: "Please enter your street address."});
          }
          if (req.body.pincode.length !== 6 || !Number.isInteger(Number(req.body.pincode))) {
            return res.status(200).json({ success: false, error: "Please enter a valid pincode."});
          }
          if(req.body.city.length<=3){
            return res.status(200).json({ success: false, error: "Please enter a city."});
          }
          if(req.body.state.length<=3){
            return res.status(200).json({ success: false, error: "Please enter a state."});
          }
          if (req.body.phone.length !== 10 || !Number.isInteger(Number(req.body.phone))) {
            return res.status(200).json({ success: false, error: "Please enter a valid phone number."});
          }
        let address = {
            street: req.body.street,
            pincode: req.body.pincode,
            city: req.body.city,
            state: req.body.state,
            phone: req.body.phone,
            name: req.body.name,
        } 
        await User.findOneAndUpdate({email: req.body.email}, {address: address})
        res.status(200).json({success: true});
    }
    catch(e){
        res.status(400).json({success: false, error:e});
    }
}
export default connectDb(handler)
  