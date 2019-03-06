"use strict";

var _path = require("path");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var p = (0, _path.join)(__dirname, '../../client');
console.log(p);
app.use(_express.default.static(p));
app.use(_express.default.json());
app.use('*', function (req, res, next) {
  res.sendFile((0, _path.join)(__dirname, '../client/index.html'));
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server listening on port: ".concat(port));
});