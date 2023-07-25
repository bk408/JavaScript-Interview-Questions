// Q7 Function Scope - o/p based questions

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.warn(i);
  }, i * 1000);
}
