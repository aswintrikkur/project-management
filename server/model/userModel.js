const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, unique: true, require: true },

})

userSchema.virtual('essentials').get(function () {
    return ({_id:this._id, username: this.username, email: this.email })
});

module.exports = { Users: mongoose.model('Users', userSchema) };