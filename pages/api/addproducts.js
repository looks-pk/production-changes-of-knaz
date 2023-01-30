import Product from "../../Models/Product"
import connectDb from "../../middleware/mongoose"

// const handler = async (req, res) => {
//     if(req.method == 'POST'){
//         for (let i=0; i<req.body.length; i++){
//         let p = new Product ({
//             title: req.body[i].title,
//             slug: req.body[i].slug,
//             desc: req.body[i].desc,
//             img: req.body[i].img,
//             category: req.body[i].category, 
//             size: req.body[i].size,
//             color: req.body[i].color,
//             price: req.body[i].price,
//             availbleQty: req.body[i].availbleQty
//         })
//        await p.save()
//     }
//     res.status(200).json({ success: "Success"})
// }
//     else{
//         res.status(400).json({ error: "this method is not allowed"})
//     }

//       }

// export default connectDb(handler);

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let p = new Product({
            title: req.body.title,
            slug: req.body.slug,
            desc: req.body.desc,
            img: req.body.img,
            category: req.body.category,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price,
            availbleQty: req.body.availbleQty
        })
        await p.save()
        res.status(200).json({ success: "Success" })
    }
    else {
res.status(400).json({ error: "this method is not allowed" })
}
}

export default connectDb(handler);
