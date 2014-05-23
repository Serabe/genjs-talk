var nat = function*() {
	var i = 0;
  while(true) {
    yield i++;
  }
};

var myNat = nat();
console.log(myNat.next());