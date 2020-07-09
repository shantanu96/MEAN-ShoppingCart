const express = require('express');
const router = express.Router();
const { addCategory, deleteCategory } = require('../../controllers/CategoryController');

router.post('/add', addCategory);
router.get('/delete/:id', deleteCategory);

module.exports = router;