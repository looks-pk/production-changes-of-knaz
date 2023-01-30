const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
        // userId: {type: String, required:true},
        // products: [{
        //         productId: {type: String},
        //         quantity: {type: Number, default: 1}
        //     }],
        // address: {type: String, required:true},
        // amount: {type: Number, required:true},
        // status: {type: String, default: 'Pending',  required:true},
        oid: {type: String, required:true},
        fname: {type: String, required:true},
        lname: {type: String, required:true},
        mobile: {type: String, required:true},
        email: {type: String, required:true},
        adress: {type: String, required:true},
        message: {type: Number, required:true},
        subTotal: {type: Number, required:true},

}, {timestamps: true} );


mongoose.models = {}
export default mongoose.model("order", OrderSchema);
// export default mongoose.models.Order || mongoose.model("Order", OrderSchema);