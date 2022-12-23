export default class Circle {

	// Constructor built to take an object to allow for loose declaration
	constructor({
		x,
		y,
		// strokeColor="#"+Math.floor(Math.random()*16777215).toString(16),
		strokeColor="fuchsia",
		radius=25,
		penRadius=2,
		speed=0.02,
		theta=0
	}={}) {
		this.x = x;
		this.y = y;
		this.strokeColor = strokeColor;
		this.radius = radius;
		this.penRadius = penRadius;
		this.speed = speed;
		this.theta = theta;

		// Pen will always start on the right (radians 0)
		this.penX = x + radius;
		this.penY = y;

	};

	step() {
		this.rotate();
	}

	rotate() {
		this.theta += this.speed;
		if (this.theta >= (2 * Math.PI)) {
			this.theta -= 2 * Math.PI;
		} else if (this.theta <= -(2 * Math.PI)) {
			this.theta += 2 * Math.PI;
		};
		this.penX = Math.cos(this.theta) * this.radius + this.x;
		this.penY = Math.sin(this.theta) * this.radius + this.y;
	};

	draw(ctx) {
		ctx.strokeStyle = this.strokeColor
		// Draw the base circle
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.stroke();
		// Draw the "pen" of the circle
		ctx.beginPath();
		ctx.arc(
			this.penX,
			this.penY,
			this.penRadius,
			0,
			2 * Math.PI
			)
		ctx.fillStyle = this.strokeColor
		ctx.fill();
		ctx.stroke();
	};


}