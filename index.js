var express = require('express'), artillery = require('artillery');
var file = __dirname + '/test.yml';
var options = {}
artillery.run(file, options);
var app = express();
app.listen(3000, function(){
console.log('Server on');
});
