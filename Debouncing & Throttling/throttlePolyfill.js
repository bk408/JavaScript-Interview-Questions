//  Question - 4 > Create Throttle() Polyfill Implementation

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const Count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const myThrottle = (cb, d) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

const throttleCount = myThrottle(() => {
  Count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttleCount();
});
