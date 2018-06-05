var Addition = require('./addition.js');
var Calc1 = require('./calculator1.js');
var { add } = require('./calculator1.js');
var Calc2 = require('./calculator2.js');
var { sub } = require('./calculator2.js');
var Person = require('./person.js');
var Son = require('./son.js');

var http = require('http');
var fs = require('fs');


console.log('Welcome to Demo');
console.log('Addition of 2 & 3 is ' + Addition(2, 3));
console.log('Addition of 2 & 3 is ' + Calc1.add(2, 3));
console.log('Addition of 2 & 3 is ' + add(2, 3));
console.log('Addition of 2 & 3 is ' + Calc2.add(2, 3));
console.log('Sub of 20 & 3 is ' + sub(20, 3));

var karthik = new Person();
karthik.setName('Karthik Kumar');
console.log('Welcome to ' + karthik.getName());

var s1 = new Son();
console.log('Welcome to ' + s1.getName() + ',' + s1.getGender() + ',' + s1.getCity());

/*http.createServer((req, res) => {
	console.log(' Page requested ');
	res.end( ' Welcome to Node Demo ');
}).listen(3000);
*/

http.createServer((req, res) => {
	fs.readFile('pages/demo7.html', function(error, response){
		if(error){
			res.writeHead(404);
			res.write('Content not found');
		}
		else {
			res.writeHead(200, { 'content-type': 'text/html'});
			res.write(response);
		}
		res.end();
	});
}).listen(3000);



