var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello Node.js World!');
});
app.listen(3000, function () {
  console.log('listening on port 3000!');
});
