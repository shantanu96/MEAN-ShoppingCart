const { Product } = require('../models/Product');
const { Category } = require('../models/Category');

module.exports = {
    addProduct: async (req, res) => {
        const {
            name,
            description,
            price,
            image,
            category,
            stock,
            discount
        } = req.body;

        const productFields = {};
        if (name) productFields.name = name;
        if (description) productFields.description = description;
        if (price) productFields.price = price;
        if (image) productFields.image = image;
        if (category) productFields.category = category;
        if (stock) productFields.stock = stock;
        if (discount) productFields.discount = discount;
        console.log('fields:' + JSON.stringify(productFields));

        const createProduct = await new Product(productFields).save();
        return res.status(200).json(createProduct);
    },

    deleteProduct: async (req, res) => {
        const { id } = req.params;
        await Product.deleteOne(
            { '_id': id },
            function (err) {
                if (err) console.log(err);
            }
        );
        return res.status(200).json('Product deleted');
    },

    getProuducts: async (req, res) => {
        const products = await Product.find();
        return res.status(200).json(products);
    },

    getProuductById: async (req, res) => {
        const { id } = req.params;
        const products = await Product.findById(id);
        return res.status(200).json(products);
    },

    getProuductByCategory: async (req, res) => {
        const { categoryId } = req.params;
        const products = await Product.find({ category: categoryId });
        return res.status(200).json(products);
    },

    uploadBulkPorudctsFromFile: async (req, res) => {
        res.send();
    }
}