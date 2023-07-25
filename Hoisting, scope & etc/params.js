// Q10 Params VS Arguments

function square(num) {
  // Params or Parameter
  console.log(num * num);
}

square(6); // Arguments

// Q11 Params VS Arguments - O/P Based Questions

const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};

fn(5, 6, 3, 7, 8, 9, 2);
