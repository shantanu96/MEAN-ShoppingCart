const { mongo } = require("mongoose");

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    username: String,
    email: String,
    password: String,
    number: Number,
    address: String,
    pincode: Number
});

const Customer = new mongoose.model("customer", customerSchema);

exports.Customer = Customer;