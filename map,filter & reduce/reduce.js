


// Reduce

/* const nums = [1, 2, 3, 4];


const sum = nums.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);


console.log(sum)  */


// Polyfills for Reduce()

// arr.reduce((acc, curr, i, arr) => {}, initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb (accumulator, this[i], i, this) : this[i]
        
    }

    return accumulator;
}

const nums = [1, 2, 3, 4, 56];

const sum = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum);

