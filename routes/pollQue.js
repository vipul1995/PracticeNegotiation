var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Record = require('../models/PollQueSchema.js');

/* GET ALL RECORDS */
router.get('/', function(req, res, next) {
  Record.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE RECORD BY ID */
router.get('/:id', function(req, res, next) {
  Record.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE RECORDS */
router.post('/', function(req, res, next) {
  Record.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE RECORD */
router.put('/:id', function(req, res, next) {
  Record.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE RECORD */
router.delete('/:id', function(req, res, next) {
  Record.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
