const express = require('express');
const router = express.Router();

const { getCart, addItemToCart, removeItemFromCart, clearCart } = require('../../controllers/CartController');

router.get('/:customerId', getCart);
router.post('/add/:customerId', addItemToCart);
router.get('/delete/:customerId/:productId', removeItemFromCart);
router.get('/clear/:customerId', clearCart);

module.exports = router;