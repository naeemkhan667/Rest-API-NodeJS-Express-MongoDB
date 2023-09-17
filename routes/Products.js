const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const ProductController = require('../controllers/Products');

//get all products
router.get("/", ProductController.getAllProducts);

//get one product by id
router.get("/:id", ProductController.getProductByID);

//creating one
router.post("/", ProductController.insertProduct);

//updating one
router.patch("/:id", ProductController.updateProduct);

//deleting one
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;