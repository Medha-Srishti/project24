class Stone{
	constructor(x,y,height, width)
	{

	var options = {
      'restitution' : 0.3,
	  'friction' : 5,
	  'density' : 12
	}
	this.x=x;
	this.y=y;
	this.height = height;
	this.width = width;
	this.body=Bodies.rectangle(this.x, this.y, this.height, this.width, options);
	World.add(world, this.body);

}
display()
{
		var rubberpos=this.body.position;	
		var angle = this.body.angle;		
		push();
		translate(rubberpos.x, rubberpos.y);
		rectMode(CENTER);
		rotate(angle);
		strokeWeight(4);
		stroke(112, 123, 124);
		fill(153, 163, 164 );
		rect(0,0, this.height, this.width);
		pop();
}

}