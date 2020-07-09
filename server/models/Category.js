var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String
});

const Category = new mongoose.model("category", categorySchema);

exports.Category = Category;