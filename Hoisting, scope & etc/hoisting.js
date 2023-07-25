// Q8 - Function Hoisting

function functionName() {
  console.log("Bhavya Khatri");
}
functionName();

// Q9- Function Hoisting  - o/p Based Questions

var x = 21;
var fun = function () {
  console.log(x);
  var x = 20;
};

fun();
