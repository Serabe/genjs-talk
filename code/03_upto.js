var upto = function(limit) {
  return function*() {
    var i = 0;
    while(i < limit) {
      yield i++;
    }
    return limit;
  };
};

for(var current of upto(3)()) {
  console.log(current);
}