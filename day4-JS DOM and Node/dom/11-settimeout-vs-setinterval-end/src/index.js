// Generate random color
// // RGB 0-255
// Apply to dom
// update color on event

const generateColorValue = () => Math.floor(Math.random() * 256);

const createColor = () => {
  const red = generateColorValue();
  const green = generateColorValue();
  const blue = generateColorValue();
  return `rgb(${red}, ${green}, ${blue})`;
};

const applyColorToBody = color => {
  return (document.body.style.backgroundColor = color);
};

const addRandomColorToBg = () => {
  const color = createColor();
  return applyColorToBody(color);
};

addRandomColorToBg();

const newColors = document.getElementById("new-colors");
newColors.addEventListener("click", addRandomColorToBg);

// Set Interval vs Set Timeout
// const log = () => console.log("is in timeout");
// setTimeout(log, 1000);
// setTimeout(addRandomColorToBg, 5000);
// Set Timeout, happens once

// Set Interval, happens over and over
const interval = setInterval(addRandomColorToBg, 2000);
// Clear interval stops firing
newColors.addEventListener("click", () => clearInterval(interval));
