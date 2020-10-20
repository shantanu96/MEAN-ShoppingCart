var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
    price: String,
    image: String,
    category: { type: Schema.Types.ObjectId, ref: 'category' },
    stock: String,
    discount: Number
});

const Product = new mongoose.model("product", productSchema);

exports.Product = Product;