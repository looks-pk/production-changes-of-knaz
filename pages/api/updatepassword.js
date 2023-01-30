import User from '../../Models/User'
import connectDb from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'
import cryptoJs from 'crypto-js'

const handler = async (req, res) => {
    if(req.method == 'POST'){
        let token = req.body.token
        let user = jsonwebtoken.verify(token, "jwtsecret")
        let dbuser =  await User.findOne({email: user.email})
        const bytes =  cryptoJs.AES.decrypt(dbuser.password, 'secret123');
        let decryptedPass = JSON.parse(bytes.toString(cryptoJs.enc.Utf8))
        if(decryptedPass == req.body.password && req.body.newpassword == req.body.cnewpassword ){
           await User.findOneAndUpdate({email: user.email}, {password: cryptoJs.AES.encrypt(JSON.stringify(req.body.cnewpassword), 'secret123').toString()})
            res.status(200).json({success: true})
            return
        }
        res.status(200).json({success: false})
    }
    else {
        
        res.status(400).json({ error: 'error'})
    }

  }

export default connectDb(handler);