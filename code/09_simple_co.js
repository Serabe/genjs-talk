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
    if(err) {
      genObj.throw(err)
    } else {
      genObj.next(data);
    }
  });
};

simplerCo(function*() {
  var content = "Fuck my life";
  try{
    content = yield readFile('no_hay_ná.txt', 'utf8');
    console.log(content);
  } catch(err){
    console.log("Some error occured:\n" + err);
    console.log(content);
  }
});