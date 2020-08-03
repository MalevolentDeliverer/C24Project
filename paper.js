class Paper{
constructor(x,y,radius){

  var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2,

}
this.body = Bodies.circle(x, y,radius, options);
this.radius = radius;
World.add(world, this.body);
}



display(){
    var angle = this.body.angle;
    push();
    rotate(angle);
    fill("white");
  ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    pop();
  }


}