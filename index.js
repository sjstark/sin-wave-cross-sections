// Imports
import Circle from "./components/Circle.js"

// Query for our main canvas
let canvas = document.querySelector("#sin-wave-canvas");
let ctx = canvas.getContext("2d");
let circle;

const canvasConfig = {
	width: "900px",
	height: "900px",
};

const canvasObjects = [];

const init = () => {
	canvasObjects.push(new Circle({x: 50, y: 50}));
	canvasObjects.push(new Circle({x: 100,y: 50, speed: 0.04}));
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