var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: { type: Schema.Types.ObjectId, ref: 'category' },
    stock: Number,
    discount: Number
});

const Product = new mongoose.model("product", productSchema);

exports.Product = Product;