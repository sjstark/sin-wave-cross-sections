// Imports
import Circle from "./components/Circle.js"
import Line from "./components/Line.js"

// Query for our main canvas
let canvas = document.querySelector("#sin-wave-canvas");
let ctx = canvas.getContext("2d");

const canvasConfig = {
	width: "900px",
	height: "900px",
};
const circleWidth = 50;
const circleBaseSpeed = 0.02;
const gap = 25;

const canvasObjects = [];

const init = () => {
	for (let i = 2; i <= 6; i++) {
		canvasObjects.push(new Circle({
			x: ( i * circleWidth + (i - 1) * gap),
			y: circleWidth,
			speed: circleBaseSpeed * i
		}));

		canvasObjects.push(new Line({
			direction: "v",
			baseCircle: canvasObjects[canvasObjects.length-1]
		}))

		// canvasObjects.push(new Circle({
		// 	x: circleWidth,
		// 	y: ( i * circleWidth + (i - 1) * gap),
		// 	speed: circleBaseSpeed * i
		// }));
	}
	window.requestAnimationFrame(step);
};

// Animation functions

const step = () => {
	// Update UI
	clearCanvas();
	updateState();
	drawCanvas();
	window.requestAnimationFrame(step);
};



const clearCanvas = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const updateState = () => {
	canvasObjects.forEach((obj) => {
		obj.step();
	})
};

const drawCanvas = () => {
	canvasObjects.forEach((obj) => {
		obj.draw(ctx);
	})
};


// Init animation

init();