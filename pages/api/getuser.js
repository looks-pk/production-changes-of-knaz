import User from '../../Models/User'
import connectDb from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'
const handler = async (req, res) => {
    if(req.method == 'POST'){
        let token = req.body.token
        let user = jsonwebtoken.verify(token, "jwtsecret")
        let dbuser = await User.findOne({email: user.email})
        console.log(dbuser)
        const {name, email, adress, city, state, mobile} = dbuser
        res.status(200).json({name, email, adress, city, state, mobile})
    }
    else {
        
        res.status(400).json({ error: 'error'})
    }

  }

export default connectDb(handler);