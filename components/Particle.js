// Particle needs to work with a full canvas wipe; cannot rely on alpha cover

export default class Particle {
	constructor(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
		this.x = x;
		this.y = y;
		this.particleTrailWidth = particleTrailWidth;
		this.strokeColor = strokeColor;

		// Store the previous locations to draw lines
		this.prevX = x;
		this.prevY = y;
	};

	step() {

	};

	draw(ctx) {
		ctx.beginPath();
		ctx.lineWidth = this.particleTrailWidth;
		ctx.strokeStyle = this.strokeColor;
		ctx.moveTo(this.prevX, this.prevY);
		ctx.lineTo(this.x, this.y);
		ctx.stroke();
	};
}