const express = require('express');
const router = express.Router();

const { cancelOrder, createOrder, getOrders } = require('../../controllers/OrderController');

router.get('/:customerId', getOrders);
router.post('/create', createOrder);
router.get('/cancel/:orderId', cancelOrder);

module.exports = router;