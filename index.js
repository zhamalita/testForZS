const fs = require('fs')

var str1 = fs.readFileSync('input.txt', 'utf-8');
var str2 = fs.readFileSync('patterns.txt', 'utf-8');

Array.prototype.diff = function(a) {
  return this.filter(function(i){
  	return a.indexOf(i) >= 0;});
};

function findMatch(char, log) {
	var strArray1 = str1.split(char);
	var strArray2 = str2.split(char);
	var result = strArray1.diff(strArray2);
	console.log(log, 'match', result.join(' '));
}

findMatch(' ', 'word')
findMatch('\n', 'line')
findMatch('', 'char')