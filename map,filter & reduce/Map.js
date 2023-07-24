

// Map

/* const num = [4, 6, 8, 10, 14, 26, 42, 50, 69];

const divide = num.map((dvd, i, arr) => {
    return dvd/2
})

console.log(divide);  */



// Polyfill for map()


// Array.map((num, i, arr) =>{})

Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
        
    }

    return temp;
}

const num = [4, 6, 8, 10, 14, 26, 42, 50, 69];

const divide = num.myMap((dvd, i, arr) => {
  return dvd / 2;
});

console.log(divide);

