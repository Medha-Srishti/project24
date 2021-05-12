class Iron{
	constructor(x,y,height, width)
	{
	var options = {
      'restitution' : 0.3,
	  'friction' : 5,
	  'density' : 30
	}
		this.height = height;
		this.width = width;
		this.body=Bodies.rectangle(x, y, height, width, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;	
			var angle = this.body.angle;	
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke(28, 40, 51);
			fill(28, 40, 51);
			rect(0, 0, this.height, this.width);
			pop()
	}
}