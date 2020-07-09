var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'customer' },
    totalQty: Number,
    totalPrice: Number,
    items: [{
        product: { type: Schema.Types.ObjectId, ref: 'product' },
        qty: Number,
        price: Number
    }]
});

const Cart = new mongoose.model("cart", cartSchema);

exports.Cart = Cart;