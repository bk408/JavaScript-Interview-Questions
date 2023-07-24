


// Filter

/* const Newnum = [4, 6, 82, 108, 789, 1000, 250, 754, 894838];

const divideBYTwo = Newnum.filter((dvdByTwo) => {
    return dvdByTwo > 500
})

console.log(divideBYTwo) */



// Polufill for filter()

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(this[i], i, this) temp.push(this[i])
        
    }

    return temp;
} 


const Newnum = [4, 6, 82, 108, 789, 1000, 250, 754, 894838];

const GreaterthanFifty = Newnum.filter((dvdByTwo) => {
  return dvdByTwo > 50;
});

console.log(GreaterthanFifty);

