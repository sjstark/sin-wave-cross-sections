export default class Line {

	// Constructor built to take an object to allow for loose declaration
	constructor({
		direction,
		baseCircle,
		strokeColor="#0aa"
	}) {
		// Should be "v" or "h" for a vertical or horizontal line
		this.direction = direction;
		// The baseCircle for the draw
		this.baseCircle = baseCircle;

		this.strokeColor = strokeColor;
		this.x;
		this.y;
	};

	// Update the x and y based off of the base circle
	step() {
		if (this.direction === "h") {
			this.y = this.baseCircle.penY
		} else {
			this.x = this.baseCircle.penX
		}
	};

	// Draw a vertical or horizontal line dependent on config; leave a lil padding
	draw(ctx) {
		let line;
		if (this.direction === "h") {
			line = {
				startX: 10,
				endX: ctx.canvas.width - 10,
				startY: this.baseCircle.penY,
				endY: this.baseCircle.penY
			}
		} else {
			line = {
				startX: this.baseCircle.penX,
				endX: this.baseCircle.penX,
				startY: 10,
				endY: ctx.canvas.width - 10
			}
		}

		ctx.beginPath();
		ctx.strokeStyle = this.strokeColor;
		ctx.moveTo(line.startX, line.startY);
		ctx.lineTo(line.endX, line.endY);
		ctx.stroke();

	};
}