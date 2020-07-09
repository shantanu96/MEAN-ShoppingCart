var mongoose = require('mongoose');
var cart = require('./Cart');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'customer' },
    shippingAddress: String,
    deliveryStatus: Number,
    items: [cart.Cart],
});

const Order = new mongoose.model("order", orderSchema);

exports.Order = Order;