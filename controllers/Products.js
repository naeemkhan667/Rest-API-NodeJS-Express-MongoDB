const mongoose = require('mongoose');
const Product = require('../models/Products');

const getAllProducts = async (req, res, next) => {
    try {
        result = await Product.find({});
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const getProductByID = async (req, res, next) => {
    try {
        const result = await Product.findById(req.params.id)
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const insertProduct = async (req, res, next) => {
    try {
        const prd = new Product(req.body);
        const result = await prd.save();
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const result = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const result = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllProducts, getProductByID, insertProduct, updateProduct, deleteProduct }