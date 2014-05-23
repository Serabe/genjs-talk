var fs = require('fs');

var readFile = function() {
  var args = Array.prototype.slice.call(arguments,0);
  return function(callback) {
    args.push(callback);
    return fs.readFile.apply(null, args);
  };
};

var simplerCo = function(gen) {
  var genObj = gen();
  var currentValue = genObj.next();
  currentValue.value(function(err,data) {
    genObj.next(data);
  });
};

simplerCo(function*() {
  var content = yield readFile('code/a.txt', 'utf8');
  console.log(content);
});