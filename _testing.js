var _ = require('underscore');
var http = require('http');
var fs = require('fs');

//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World!');
//}).listen(8080);
//
//console.log(_.map());
//console.log('The result is displayed in the Command Line Interface');
//
var modulo = function(divisor, dividend) {
    return function(dividend) {
        return dividend % divisor;
    };
}.autoCurry();

var isOdd = modulo(2);
console.log(isOdd(6));
console.log(isOdd(5));


function autoCurry() {
    return function curry(this.arguments) {
        console.log("curry");
        if (length > 0) {
            return curry(arguments.slice(1));
        } else {
            return  
        }
    }
}

