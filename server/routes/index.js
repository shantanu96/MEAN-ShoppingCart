const express = require('express');
const router = express.Router();

const { Category } = require('../models/Category');

router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.render('index', { categories: categories });
});

module.exports = router;