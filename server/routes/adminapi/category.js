const express = require('express');
const router = express.Router();
const { addCategory, deleteCategory, getCategories } = require('../../controllers/CategoryController');

router.get('/', getCategories);
router.post('/add', addCategory);
router.get('/delete/:id', deleteCategory);

module.exports = router;