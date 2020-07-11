const { Order } = require('../models/Order');
const { Cart } = require('../models/Cart');

module.exports = {
    createOrder: async (req, res) => {
        errors = {};
        const {
            customerId,
            shippingAddress
        } = req.body;
        const cart = await Cart.findOne({ owner: customerId });
        if (!cart) {
            errors.notFound = 'Cart not Found';
            return res.status(404).json(errors);
        }

        const orderFields = {};
        if (customerId) orderFields.customer = customerId;
        if (cart) orderFields.cart = cart;
        if (shippingAddress) orderFields.shippingAddress = shippingAddress;
        orderFields.deliveryStatus = 'placed';

        const order = new Order(orderFields);
        await order.save();

        cart.items = [];
        await cart.save();

        return res.status(200).json(order);
    },
    cancelOrder: async (req, res) => {

    },
}