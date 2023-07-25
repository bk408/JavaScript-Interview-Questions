// Q5 What is IIFE?
// Ans  IIFE:- Imediately Invoked Function Expression

(function square6(nums) {
  console.log(nums * nums);
})(8)(
  // Q6 IIFE- o/p based questions

  function (x) {
    return (function (y) {
      console.log(x);
    })(2);
  }
)(1);
