const express = require('express');
const router = express.Router();
const { getProuducts, getProuductById, getProuductByCategory } = require('../../controllers/ProductController');

router.get('/', getProuducts);
router.get('/:id', getProuductById);
router.get('/category/:categoryId',getProuductByCategory);

module.exports = router;