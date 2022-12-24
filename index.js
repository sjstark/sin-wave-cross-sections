// Imports
import Circle from "./components/Circle.js"
import Line from "./components/Line.js"
import Point from "./components/Point.js"

// Query for our main canvas
let canvas = document.querySelector("#sin-wave-canvas");
let ctx = canvas.getContext("2d");

// Not sure if I need this yet, but storing here in case we need to manipulate
const canvasConfig = {
	width: "900px",
	height: "900px",
};

// Some base variables to help with layout
const circleWidth = 50;
const circleBaseSpeed = 0.005;
const gap = 30;

// The array of objects to step and draw
const canvasObjects = [];

let horizontalLines = [];
let verticalLines = [];

// Initialize our canvas objects and start animation frames.
const init = () => {
	// Make some circle objects with pens
	for (let i = 2; i <= 11; i++) {
		canvasObjects.push(new Circle({
			x: ( i * circleWidth + (i - 1) * gap),
			y: circleWidth,
			speed: circleBaseSpeed * i
		}));

		let xAnchor = new Line({
			direction: "v",
			baseCircle: canvasObjects[canvasObjects.length-1]
		});
		canvasObjects.push(xAnchor);
		verticalLines.push(xAnchor);

		canvasObjects.push(new Circle({
			x: circleWidth,
			y: ( i * circleWidth + (i - 1) * gap),
			speed: circleBaseSpeed * i
		}));

		let yAnchor = new Line({
			direction: "h",
			baseCircle: canvasObjects[canvasObjects.length-1]
		});
		canvasObjects.push(yAnchor);
		horizontalLines.push(yAnchor);


	}

	verticalLines.forEach((xAnchor) => {
		horizontalLines.forEach((yAnchor) => {
			let point = new Point({
				baseX: xAnchor,
				baseY: yAnchor
			})
			canvasObjects.push(point);
		})
	})

	// Initialize animation loop
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

// Clear our canvas
const clearCanvas = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// Update each object; every object should have a step function
// (even if it does nothing)
const updateState = () => {
	canvasObjects.forEach((obj) => {
		obj.step();
	})
};

// Draws every object in the canvase
const drawCanvas = () => {
	canvasObjects.forEach((obj) => {
		obj.draw(ctx);
	})
};


// Init animation
init();