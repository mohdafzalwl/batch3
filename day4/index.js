/// generate randomn numbers
// to RGB
//apply color to body

const generateColorValue = () => Math.floor(Math.random() * 256);

const createColor = () => {
	const red = generateColorValue();
	const green = generateColorValue();
	const blue = generateColorValue();
	return `rgb(${red},${green},${blue})`;
};

const applyColorToBody = (color) => {
	return (document.body.style.backgroundColo = color);
};

const addRandomColorToBg = () => {
	let color = createColor();
	return applyColorToBody(color);
};
// addRandomColorToBg();

//select the button
const newColors = document.getElementById('newColors');

// newColors.onclick = () => addRandomColorToBg();

const interval = setInterval(addRandomColorToBg, 1000);

newColors.addEventListener('click', () => clearInterval(interval));

// newColors.onclick = function() {
// 	return addRandomColorToBg();
// };

// newColors.addEventListener('click', addRandomColorToBg);
