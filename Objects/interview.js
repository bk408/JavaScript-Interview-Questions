

// Question 1 - What is the output

/*const obj = {
    a: "one",
    b: "two",
    a: "three"
}

console.log(obj); */

/* ------------------------------------------------------------------------------------------------------------------------------------ */


// Question - 2 => Create a Function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.


/*let nums = {
    a: 100,
    b: 200,
    title: "My Nums",
}


multiplyByTwo(nums)

function multiplyByTwo(obj) {
    for (key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
       }
   }
}

console.log(nums);  */


/* ------------------------------------------------------------------------------------------------------------------------------------ */

// Question - 3 => What is the output of following code

/* const a = {}
const b = {key: "b"}
const c = { key: "c" }

a[b] = 123;
a[c] = 456;

console.log(a[b]);  */


/* ------------------------------------------------------------------------------------------------------------------------------------ */

// Question - 4 => What is JSON.stringify and JSON.parse?

/* const user = {
    name: "Bhavya",
    age: 24
} 

const strObj = JSON.stringify(user);

console.log(strObj);

localStorage.setItem("test", strObj)

console.log(JSON.parse(strObj));  */



/* ------------------------------------------------------------------------------------------------------------------------------------ */

// Question - 5 => What is the output?

// console.log([..."Alwar"]);


/* ------------------------------------------------------------------------------------------------------------------------------------ */

// Question - 6 => What is the output?

/*const user = { name: "Bhavya", age: 24 };
const admin = { admin: true, ...user }


console.log(admin);  */


/* ------------------------------------------------------------------------------------------------------------------------------------ */

// Question - 7 => What is the output?


/* const settings = {
    name: "Bhavya",
    level: 19,
    health: 90,
}

const data = JSON.stringify(settings, ["level", "health"])
console.log(data);  */


/* ------------------------------------------------------------------------------------------------------------------------------------ */

// Question - 8 => What is the output?

/* const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter()); */


/* ------------------------------------------------------------------------------------------------------------------------------------ */

// Question - 9  => What is the destructuring in JavaScript?

/* let user = {
    name: "Bhavya",
    age: 24,
    fullName: {
        first: "Alex",
        last:  "jones",
    },
}


const name = user

const  {fullName: {first} }  = user


console.log(first); */



/* ------------------------------------------------------------------------------------------------------------------------------------ */

// Question - 10  => What is the output?


/* let c = { greeting: "Hey!" };
let d;


d = c;
c.greeting = "Hello";
console.log(d.greeting); */


/* ------------------------------------------------------------------------------------------------------------------------------------ */



