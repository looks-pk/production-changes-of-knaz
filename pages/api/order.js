import order123 from "../../Models/order123"
import connectDb from "../../middleware/mongoose"
import Product from "../../Models/Product"

const handler = async (req, res) => {
    if(req.method == 'POST'){

        let product,sumTotal=0;
        let cart = req.body.cart

        for (let item in cart){
            sumTotal = cart[item].price * cart[item].qty
            product = await Product.findOne({slug: item})
            if(product.availbleQty < cart[item].qty ){
                res.status(400).json({success: false, "error": "yeh wali product out of stock hy"})
                return
            }
            if(product.price  != cart[item].price){
                res.status(400).json({success: false, "error": "cart ki price k sath ungli mat karain"})
                return
            }
        }
        if(sumTotal !== req.body.subTotal){
            res.status(400).json({success: false,"error": "cart ki price k sath ungli mat karain"})
            return
        }
            let o = new order123 ({
                fullname:   req.body.fullname,
                mobile:  req.body.mobile,
                city:   req.body.city,
                state:   req.body.state,
                email:   req.body.email, 
                adress:  req.body.adress,
                message: req.body.message,
                subTotal: req.body.subTotal,
                cart: req.body.cart
            })
           await o.save()
           
           res.status(200).json({ success: true , "success": "koi masla ni cart main all good"})
           
           for(let slug in cart){
            await Product.findOneAndUpdate({slug: slug}, {$inc: {"availbleQty": - cart[slug].qty}})
        }
        }
        else{
            res.status(400).json({ error: "this method is not allowed"})
        }
        
    }

export default connectDb(handler);