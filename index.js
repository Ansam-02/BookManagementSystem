"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Book_js_1 = require("./routers/Book.js");
var app = (0, express_1["default"])();
var PORT = 3000;
app.use(express_1["default"].json());
app.get('/', function (req, res) {
    res.send('Server UP!');
});
app.use('/book', Book_js_1["default"]);
// app.use((req, res) => {
//     res.status(404).send('YOU requested sth I don`t have :( ')
// });
app.listen(PORT, function () {
    console.log("App is running and Listening on port ".concat(PORT, " "));
});
