const { Cart } = require('../models/Cart');
const { Product } = require('../models/Product');
const { json } = require('express');

module.exports = {
    getCart: async (req, res) => {
        const errors = {}
        const { customerId } = req.params;

        const cart = await Cart.findOne({ owner: customerId }).populate('items.product');
        res.status(200).json(cart);
    },

    addItemToCart: async (req, res) => {
        const errors = {}

        const { customerId } = req.params;
        const {
            productId,
            qty,
            price
        } = req.body;

        const itemFields = {};
        if (productId) itemFields.product = productId;
        if (qty) itemFields.qty = parseInt(qty);
        if (price) itemFields.price = parseFloat(price);

        const product = await Product.find({ _id: productId });
        if (!product || product.length == 0) {
            errors.notFound = 'Product not found';
            return res.status(404).json(errors);
        }

        if (product.stock == 0) {
            errors.notFound = 'Product out of stock';
            return res.status(404).json(errors);
        }

        const cart = await Cart.findOne({ owner: customerId });


        if (!cart) {
            // cart for a customer does not exist
            const newCart = new Cart({
                owner: customerId,
                totalQty: itemFields.qty,
                totalPrice: itemFields.qty * itemFields.price,
                items: [itemFields],
            });
            await newCart.save();
        } else {
            // check if cart contains any item or not
            cart.totalQty = cart.items.length == 0 ?
                itemFields.qty : cart.totalQty += itemFields.qty;
            cart.totalPrice = cart.items.length == 0 ?
                itemFields.qty * itemFields.price : cart.totalPrice += itemFields.qty * itemFields.price;

            // check if the product already exists in cart
            // if it exists update its values
            const itemIndex = cart.items.findIndex(item => item.product == productId);
            if (itemIndex > -1) {
                cart.items[itemIndex].qty += itemFields.qty;
                cart.items[itemIndex].price += itemFields.qty * itemFields.price;
            } else {
                cart.items.push(itemFields);
            }

            await cart.save();
        }

        return res.status(200).json('success');
    },

    removeItemFromCart: async (req, res) => {
        const errors = {}

        const { customerId, productId } = req.params;

        const cart = await Cart.findOne({ owner: customerId });

        if (cart) {
            const itemIndex = cart.items.findIndex(item => item.product == productId);
            let message = '';
            if (itemIndex > -1) {
                cart.totalQty -= cart.items[itemIndex].qty;
                cart.totalPrice -= cart.items[itemIndex].price;
                cart.items.splice(itemIndex, 1);
                await cart.save();
                message = 'Item removed';
            } else {
                message = 'Item does not exist in cart';
            }

            return res.status(200).json(message);
        } else {
            errors.notFound = 'Cart not found';
            return res.status(404).json(errors);
        }
    },

    clearCart: async (req, res) => {
        const errors = {}

        const { customerId } = req.params;

        const cart = await Cart.findOne({ owner: customerId });

        if (cart) {
            cart.items = [];
            await cart.save();
            return res.status(200).json('Cart cleared');
        } else {
            errors.notFound = 'Cart not found';
            return res.status(404).json(errors);
        }
    },
}