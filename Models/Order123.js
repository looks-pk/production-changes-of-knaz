const mongoose = require('mongoose');


const Order123Schema = new mongoose.Schema({
        fullname: {type: String, required: true},
        mobile: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        email: {type: String, required: true},
        adress: {type: String, required: true},
        message: {type: String, required: true},
        subTotal: {type: String, required: true},
        cart: {type: Object, required: true}
        
}, {timestamps: true} );


// mongoose.models = {}
// export default mongoose.model("User", UserSchema);

export default mongoose.models.Order123 || mongoose.model("Order123", Order123Schema);