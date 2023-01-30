import User from '../../Models/User'
import connectDb from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'
const handler = async (req, res) => {
    if(req.method == 'POST'){
        let token = req.body.token
        let user = jsonwebtoken.verify(token, "jwtsecret")
        await User.findOneAndUpdate({email: user.email}, {adress: req.body.adress, city: req.body.city, state: req.body.state})
        res.status(200).json({success: true})
    }
    else {
        res.status(400).json({ error: 'error'})
    }

  }

export default connectDb(handler);