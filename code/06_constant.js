var constant = function*(value) {
  while(true) {
    value = yield value;
  }
};

var five = constant(5);
console.log(five.next().value);
console.log(five.next().value);
console.log(five.next(6).value);
console.log(five.next().value);