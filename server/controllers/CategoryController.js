const { Category } = require('../models/Category');

module.exports = {

    addCategory: async (req, res) => {
        const {
            name
        } = req.body;

        const categoryFields = {};
        if (name) categoryFields.name = name;

        const createCategory = await new Category(categoryFields).save();
        return res.status(200).json(createCategory);
    },

    getCategories: async (req, res) => {
        const categoires = await Category.find();
        return res.status(200).json(categoires);
    },

    deleteCategory:async(req,res) =>{
        const { id } = req.params;
        await Category.deleteOne(
            { '_id': id },
            function (err) {
                if (err) console.log(err);
            }
        );
        return res.status(200).json('Category deleted');
    }
}