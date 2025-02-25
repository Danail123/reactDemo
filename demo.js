function doTwice(fn) {
  return function (...args) {
    // Call fn twice with the same arguments and return an array of both results
    const result1 = fn(...args);
    const result2 = fn(...args);
    return [result1, result2];
  };
}

// Example:
const double = (x) => x * 2;
const doTwiceDouble = doTwice(double);
console.log(doTwiceDouble(6)); // [10, 10]
