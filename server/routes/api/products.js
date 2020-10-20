const express = require('express');
const router = express.Router();
const {
    getProuducts, getProuductById, getProuductByCategory, uploadBulkPorudctsFromFile
} = require('../../controllers/ProductController');
const multer = require('multer');
const path = require('path');

router.get('/', getProuducts);
router.get('/:id', getProuductById);
router.get('/category/:categoryId', getProuductByCategory);

// bulk product upload from file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({
    storage: storage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(xlsx|csv)$/)) {
            return cb(new Error("Please upload csv or excel file"));
        }
        cb(undefined, true);
    }
});

router.post('/upload', upload.single('data_file'), uploadBulkPorudctsFromFile,
    (error, req, res, next) => {
        res.status(400).send({ error: error.message });
    });

module.exports = router;