// exporting multiple functions
var printResult = function(result){
	console.log('Result is ' + result );
}

module.exports.add = function(x, y){
	var z = x + y;
	printResult(z);
	return z;
}

module.exports.sub = function(x, y){
	var z = x - y;
	printResult(z);
	return z;
}