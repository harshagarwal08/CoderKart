import User from '../../models/User'
import connectDb from '../../middleware/mongoose' 

const handler = async (req, res) => {
    try{
        if(req.method=='POST'){
            let user = await User.findOne({email: req.body.email});
            res.status(200).json(user);
        }
    }
    catch(e){
        res.status(400).json({error: e});
    }
}
export default connectDb(handler)
  