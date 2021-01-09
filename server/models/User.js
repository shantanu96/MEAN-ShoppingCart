const { mongo } = require("mongoose");

var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    number: Number,
    address: String,
    pincode: Number
});

UserSchema.pre('save', async function (next) {
    const user = this;
    console.log('bcrypt');
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})
const User = mongoose.model("user", UserSchema);

exports.User = User;