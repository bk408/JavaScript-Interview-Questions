//  Question - 3 > Create Debounce() Polyfill Implementation

/* const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const Count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const myDebounce = (cb, d) => {
    let timer;
    
    return function (...args) {

        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb(...args);
        }, d);
    }
}

const debounceCount = myDebounce(() => {
  Count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debounceCount();
});  */
