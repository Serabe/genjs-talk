var fs = require('fs');

fs.readFile('code/a.txt', 'utf8',
	function(err, data) {
		console.log(data);
	});