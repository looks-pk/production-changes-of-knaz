import Order123 from '../../Models/Order123'
import connectDb from "../../middleware/mongoose"
import jsonwebtoken from 'jsonwebtoken'

const  handler = async (req, res) => {
  const token = req.body.token
  const data = jsonwebtoken.verify(token, "jwtsecret")
  // console.log(data)
  let orders = await Order123.find({email: data.email})
  res.status(200).json({ orders })
}

export default connectDb(handler);