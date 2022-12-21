export default class Circle {
	constructor({x, y, strokeColor="black", radius=25, penRadius=2, speed=0.02, theta=0}={}) {
		this.x = x;
		this.y = y;
		this.strokeColor = strokeColor;
		this.radius = radius;
		this.penRadius = penRadius;
		this.speed = speed;
		this.theta = theta;

	};

	step() {
		this.rotate();
	}

	rotate() {
		this.theta += this.speed;
		if (this.theta >= (2 * Math.PI)) {
			this.theta -= 2 * Math.PI;
		};
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
			Math.cos(this.theta) * this.radius + this.x,
			Math.sin(this.theta) * this.radius + this.y,
			this.penRadius,
			0,
			2 * Math.PI
			)
		ctx.fillStyle = "white"
		ctx.fill();
		ctx.stroke();
	};


}