const express = require('express');
const router = express.Router();

const { cancelOrder, createOrder } = require('../../controllers/OrderController');

router.post('/create', createOrder);
router.get('/cancel/:orderId', cancelOrder);

module.exports = router;