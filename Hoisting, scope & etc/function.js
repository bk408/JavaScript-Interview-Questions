// Function in JavaScript

// Q1 What is Function Declarations?

function square(num) {
  return num * num;
}

// This is also called function statement or function defination

/* ------------------------------------------------------------------------------------------------------------------------------------*/

// Q2 What is Function Expression?
// Ans- When we store a function inside of a variable is called function expression

const square1 = function (num) {
  return num * num;
};

/* ------------------------------------------------------------------------------------------------------------------------------------*/

// Q3 What is Annonymos Function?
// Ans- Function which has no name.This annonymos function can be passed as callback

const squareNew = function (num) {
  return num * num;
};

console.log(squareNew(5));

/* ------------------------------------------------------------------------------------------------------------------------------------*/

// Q4 What are First class Functions?

function square5(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("square is" + fn(5));
}

displaySquare(square5)(
  /* ------------------------------------------------------------------------------------------------------------------------------------*/

  // Q5 What is IIFE?
  // Ans  IIFE:- Imediately Invoked Function Expression

  function square6(nums) {
    console.log(nums * nums);
  }
)(8)(
  /* ------------------------------------------------------------------------------------------------------------------------------------*/

  // Q6 IIFE- o/p based questions

  function (x) {
    return (function (y) {
      console.log(x);
    })(2);
  }
)(1);
