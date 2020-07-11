var mongoose = require('mongoose');
const { Cart } = require('./Cart');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'customer' },
    shippingAddress: String,
    deliveryStatus: String,
    cart: Cart.schema,
});

const Order = new mongoose.model("order", orderSchema);

exports.Order = Order;