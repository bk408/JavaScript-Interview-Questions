// Q12 - Arrow Function VS Regular Function

// ▶ Syntax

function square(num) {
  console.log(num * num);
}

const square = (num) => {
  return num * num;
};

// ▶ Implicit Return Keyword

const square = (num) => num * num;

// ▶ Arguments

function fn() {
  console.log(arguments);
}

fn(1, 2, 4);

const fnArr = () => {
  console.log(arguments);
};

// ▶ "this" Keyword

let user = {
  username: "Bhavya Khatri",
  rc1: () => {
    console.log("You can do it" + this.username);
  },
  rc2: () => {
    console.log("You can do it" + this.username);
  },
};

user.rc1();
user.rc2();
