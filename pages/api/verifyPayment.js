export default handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
            var crypto = require("crypto");
            var expectedSignature = crypto.createHmac('sha256', process.env.KEY_SECRET)
                .update(body.toString())
                .digest('hex');
            console.log("sig received ", req.body.response.razorpay_signature);
            console.log("sig generated ", expectedSignature);
            var response = { "signatureIsValid": "false" }
            if (expectedSignature === req.body.response.razorpay_signature)
                response = { "signatureIsValid": "true" }
            res.send(response);
        } catch (err) {
            res.send(500).send(err)
        }
    }
}