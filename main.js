// variables
let adviceNum = document.querySelector(".num");
let apiUrl = "https://api.adviceslip.com/advice";

let changeText = document.querySelector(".text");
let dicePic = document.querySelector(".advice-photo");
let num = 0;

// event listeners
dicePic.addEventListener("click", callingRandomAdvice);
// functions

async function callingRandomAdvice(evt) {
  evt.preventDefault();
  num++;
  adviceNum.innerHTML = `#${num.toString()}`;
  let change = await fetch(apiUrl);
  let data = await change.json();
  return (changeText.innerHTML = ` "${data.slip.advice}"`);
}
