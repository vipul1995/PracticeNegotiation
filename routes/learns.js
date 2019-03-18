var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var LeranVar = require('../models/LearnSchema.js');

/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
    LeranVar.find({}).sort({ 'updated_date': -1 }).exec(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function (req, res, next) {
    LeranVar.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE BOOK */
router.post('/', function (req, res, next) {
    var create_Date = new Date().toLocaleString('en-US', { month: "short", day: "numeric", year: "numeric" })
    const formData = req.body;
    const createDate = { create_Date: create_Date };
    const finalParams = { ...formData, ...createDate };
    console.log(finalParams);

    LeranVar.create(finalParams, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


/* UPDATE BOOK */
router.put('/:id', function (req, res, next) {
    LeranVar.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE BOOK */
router.delete('/:id', function (req, res, next) {
    LeranVar.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
