"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Sample_data_js_1 = require("../data/Sample_data.js");
var router = express_1["default"].Router();
router.get(' / ', function (req, res) {
    res.send(Sample_data_js_1["default"]);
});
router.get('/:id', function (req, res) {
    var id = +req.params.id;
    var book = Sample_data_js_1["default"].find(function (it) { return it.id === id; });
    if (book) {
        res.status(200).send(book);
    }
    else {
        res.status(404).send('Book NOT found !');
    }
    res.send('Book by ID');
});
router.post('/', function (req, res) {
    if (!req.body.id || !req.body.title || !req.body.author || !req.body.publicationYear) {
        res.status(400).send('body are required!');
        return;
    }
    var newBook = {
        id: 1,
        title: req.body.title,
        author: req.body.author,
        publicationYear: req.body.publicationYear
    };
    Sample_data_js_1["default"].unshift(newBook);
    res.status(201).send('Task Created');
});
router.put('/:id', function (req, res) {
    res.send('Book Updated');
});
router["delete"]('/:id', function (req, res) {
    res.send('Book Deleted');
});
router.get('/', function (req, res) {
    var bookName = req.query.name;
    var year = req.query.publicationYear;
    if (!bookName && !year) {
        return res.send(Sample_data_js_1["default"]);
    }
    else if (bookName) {
        var result = Sample_data_js_1["default"].filter(function (Book) {
            return Book.title.includes(bookName);
        });
        res.status(200).send(result);
    }
    else if (year) {
        var result = Sample_data_js_1["default"].filter(function (Year) {
            return Year.publicationYear === Number(year);
        });
        res.status(200).send(result);
    }
});
exports["default"] = router;
