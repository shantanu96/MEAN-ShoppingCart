const express = require('express');
const router = express.Router();
const { addProduct, deleteProduct, getProuducts } = require('../../controllers/ProductController');

router.get('/', getProuducts);
router.post('/add', addProduct);
router.get('/delete/:id', deleteProduct);


module.exports = router;