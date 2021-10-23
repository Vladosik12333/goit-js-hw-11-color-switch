const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const btnStart = document.querySelector("[data-action='start']");
const btnStop = document.querySelector("[data-action='stop']");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let id = 0;

btnStart.addEventListener("click", onStart);
btnStop.addEventListener("click", onStop);

function onStart(e) {
  id = setInterval(() => {
    let randomColor = randomIntegerFromInterval(0, colors.length - 1);

    document.body.style.backgroundColor = colors[randomColor];
  }, 1000);

  e.target.disabled = true;
}

function onStop() {
  clearInterval(id);
  id = 0;
  btnStart.removeAttribute("disabled");
}
