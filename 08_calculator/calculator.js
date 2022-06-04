const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(numbers) {
  let sum = 0;
  for (let i=0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  for (let i=0; i < numbers.length; i++){
    product *= numbers[i];
  }
  return product;
};

const power = function(x, powerOf) {
	return x**powerOf;
};

const factorial = function(x) {
  let factorial = 1;
	for (let i=1; i<=x; i++){
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
