// Particle needs to work with a full canvas wipe; cannot rely on alpha cover

export default class Point {

	// Constructor built to take an object to allow for loose declaration
	constructor({
		baseX,
		baseY,
		particleTrailWidth,
		strokeColor="lime",
		maxPoints=1000 // The number of points to keep logged for trailing effect
	}) {
		this.baseX = baseX;
		this.baseY = baseY;
		this.x;
		this.y;
		this.particleTrailWidth = particleTrailWidth;
		this.strokeColor = strokeColor;
		this.maxPoints = maxPoints;

		// Store the previous locations to draw lines
		this.prevPoints = [];
	};

	step() {
		this.prevPoints.unshift({
			x: this.x,
			y: this.y
		})
		this.prevPoints = this.prevPoints.slice(0, this.maxPoints);
		this.x = this.baseX.x;
		this.y = this.baseY.y;
	};

	draw(ctx) {

		ctx.beginPath();
		ctx.lineWidth = this.particleTrailWidth;
		ctx.strokeStyle = this.strokeColor;
		// ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI)
		// ctx.fill();
		ctx.moveTo(this.x, this.y);

		let prevPoint = this.prevPoints[0];
		ctx.lineTo(prevPoint.x, prevPoint.y);

		for ( let i = 1; i < this.prevPoints.length; i++ ) {
			prevPoint = this.prevPoints[i];
			ctx.lineTo(prevPoint.x, prevPoint.y);
		}
		ctx.stroke();
	};
}