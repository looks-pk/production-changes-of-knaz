const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
        name: {type: String, required:true},
        email: {type: String, required:true, unique: true },
        password: {type: String, required:true},
        adress: {type: String, default: ''},
        city: {type: String, default: ''},
        state: {type: String, default: ''},
        mobile: {type: String, default: ''}
        
}, {timestamps: true} );


// mongoose.models = {}
// export default mongoose.model("User", UserSchema);

export default mongoose.models.User || mongoose.model("User", UserSchema);