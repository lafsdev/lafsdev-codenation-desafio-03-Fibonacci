"use strict";
let fibonacciArray = [];
fibonacciArray[0] = 0;
fibonacciArray[1] = 1;

let i = fibonacciArray.length;

const fibonacci = () => {
  for (i; fibonacciArray[i - 1] < 350; i++) {
    fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
  }
  console.log(fibonacciArray);

  return fibonacciArray;
};

const isFibonnaci = (num) => {
  const number = fibonacci(num);

  return number.includes(num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};

fibonacci();
isFibonnaci(5);
