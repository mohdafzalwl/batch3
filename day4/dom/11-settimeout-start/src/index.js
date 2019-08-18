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

const applyColorToBody = (color) => {
	return (document.body.style.backgroundColor = color);
};

const addRandomColorToBg = () => {
	const color = createColor();
	return applyColorToBody(color);
};

addRandomColorToBg();

const newColors = document.getElementById('new-colors');
// On click attach 1 event
// newColors.onclick = addRandomColorToBg();s

// newColors.onclick = () => addRandomColorToBg();
// newColors.onclick = () => console.log("hi");

newColors.addEventListener('click', addRandomColorToBg);
// newColors.addEventListener("click", () => console.log("hi"));
