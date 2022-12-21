export default class Line {
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
	};

	// Empty step function; animation should be based off other objects
	step() {
		return true;
	};

	draw(ctx) {
		let line;
		if (this.direction === "h") {
			line = {
				startX: 0,
				endX: ctx.canvas.width,
				startY: this.baseCircle.penY,
				endY: this.baseCircle.penY
			}
		} else {
			line = {
				startX: this.baseCircle.penX,
				endX: this.baseCircle.penX,
				startY: 0,
				endY: ctx.canvas.width
			}
		}

		ctx.beginPath();
		ctx.strokeColor = this.strokeColor;
		ctx.moveTo(line.startX, line.startY);
		ctx.lineTo(line.endX, line.endY);
		ctx.stroke();

	};
}