const express = require('express');
const router = express.Router();
const { addProduct, deleteProduct } = require('../../controllers/ProductController');

router.post('/add', addProduct);
router.get('/delete/:id', deleteProduct);


module.exports = router;