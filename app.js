// Cria instancias de Wuli
function WuLi(p5){
    this.p5 = p5;
    this.point = function(type, x, y){
	
	var p = {
	    x: x,
	    y: y,
	    s: 10
	}
	this.p5.noFill()
	this.p5.stroke(255, 255, 255);
	if(type === 'quadrado'){
	    this.p5.rect(p.x, p.y, p.s, p.s);
	}
	else if(type === 'triangulo'){
	    var x1 = p.x;
	    var x2 = x1+(x1*0.015);
	    var x3 = x1-(x1*0.015);
	    var y1 = p.y-10
	    var y2 = p.y+10
	    this.p5.triangle(x1, y1, x2, y2, x3, y2);
	}
	else if(type === 'circulo'){
	    this.p5.ellipse(p.x, p.y, p.s, p.s);
	}
    }

    this.espaco_planimetrico = function(){
	var centrox = this.p5.width/2
	var centroy = this.p5.height/2;
	this.p5.noFill()
	this.p5.stroke(255, 255, 255);
	this.p5.ellipse(centrox, centroy, centroy, centroy);
    }

    this.points = [
	//Circulos
	{
	    x: this.p5.width*0.5,
	    y: this.p5.width*0.02
	},
	{
	    x: this.p5.width*0.5+(this.p5.width*0.05), 
	    y: this.p5.height*0.5+(this.p5.height*0.05)
	},
	{
	    x: this.p5.width*0.5-(this.p5.width*0.05),
	    y: this.p5.height*0.5+(this.p5.height*0.03)
	},
	{
	    x: this.p5.width*0.5-(this.p5.width*0.03),
	    y: this.p5.height*0.5+(this.p5.height*0.13)
	},
	{
	    x: this.p5.width*0.5+(this.p5.width*0.15),
	    y: this.p5.height*0.5+(this.p5.height*0.23)
	},
	{
	    x: this.p5.width*0.5-(this.p5.width*0.15),
	    y: this.p5.height*0.5+(this.p5.height*0.36)
	},
	{
	    x: this.p5.width*0.5-(this.p5.width*0.11),
	    y: this.p5.height*0.5-(this.p5.height*0.25)
	},
	// Quadrados
	{
	    x: this.p5.width*0.5-(this.p5.width*0.25),
	    y: this.p5.height*0.5-(this.p5.height*0.1)
	},
	{
	    x: this.p5.width*0.5+(this.p5.width*0.04),
	    y: this.p5.height*0.5+(this.p5.height*0.45)
	},
	{
	    x: this.p5.width*0.5+(this.p5.width*0.25),
	    y: this.p5.height*0.5+(this.p5.height*0.01)
	},
	//Triangulos
	{
	    x: this.p5.width*0.5+(this.p5.width*0.19),
	    y: this.p5.height*0.5-(this.p5.height*0.25)
	},
	{
	    x: this.p5.width*0.5+(this.p5.width*0.079),
	    y: this.p5.height*0.5-(this.p5.height*0.11)
	}
	
    ];

    this.pontos = function(){
	for(var i=0; i<this.points.length; i++){
	    if(i<=6){
		this.point('circulo', this.points[i].x, this.points[i].y)
	    }
	    if(i>6 && i<10){
		this.point('quadrado', this.points[i].x, this.points[i].y)
	    }
	    if(i>9){
		this.point('triangulo', this.points[i].x, this.points[i].y)
	    }
	}
    }

    this.lines = function(){
	this.p5.stroke(255, 255, 255);
	for(var i=0; i<this.points.length; i++){
	    if(i<3){
		p5.line(this.points[i].x, this.points[i].y, this.points[i+1].x, this.points[i+1].y)
	    }
	    if(i===3){
		p5.line(this.points[i].x, this.points[i].y, this.points[1].x, this.points[1].y)
	    }
	    if(i===4){
		p5.line(this.points[1].x, this.points[1].y, this.points[i].x, this.points[i].y)
	    }
	    if(i===5){
		p5.line(this.points[2].x, this.points[2].y, this.points[i].x, this.points[i].y)
	    }
	    if(i===6){
		p5.line(this.points[0].x, this.points[0].y, this.points[i].x, this.points[i].y)
	    }
	    if(i===7){
		p5.line(this.points[2].x, this.points[2].y, this.points[i].x, this.points[i].y)
		p5.line(this.points[6].x, this.points[6].y, this.points[i].x, this.points[i].y)
		p5.line(this.points[5].x, this.points[5].y, this.points[i].x, this.points[i].y)
	    }
	    if(i===8){
		p5.line(this.points[3].x, this.points[3].y, this.points[i].x, this.points[i].y)
		p5.line(this.points[4].x, this.points[4].y, this.points[i].x, this.points[i].y)
		p5.line(this.points[5].x, this.points[5].y, this.points[i].x, this.points[i].y)
	    }
	    if(i===9){
		p5.line(this.points[4].x, this.points[4].y, this.points[i].x, this.points[i].y)
	    }
	    if(i===10){
		p5.line(this.points[0].x, this.points[0].y, this.points[i].x, this.points[i].y)
		p5.line(this.points[9].x, this.points[9].y, this.points[i].x, this.points[i].y)
	    }
	    if(i===11){
		p5.line(this.points[1].x, this.points[1].y, this.points[i].x, this.points[i].y)
		p5.line(this.points[10].x, this.points[10].y, this.points[i].x, this.points[i].y)
	    }
	}
    }

}

var wuli = null;
var angle = 0;

function setup(){
    createCanvas(windowWidth, windowHeight);
    ellipseMode(RADIUS);
    wuli = new WuLi(this);
}


var step = Math.floor(Math.random()*10);
var change = 0;
function draw(){
    background(0, 0, 0);
    rectMode(CORNERS)
    textSize(12);
    fill(255, 255, 255);
    text("tempo: "+second(), 200, 200, 70, 80)
    push()
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(angle);
    translate(-width/2, -height/2);
    wuli.espaco_planimetrico();
    wuli.pontos();
    wuli.lines();
    pop()
    change = second()
    if(change % step === 0){
	step = Math.floor(Math.random()*10)+1;
	angle = Math.random() * 2 * Math.PI;
	console.log(step)
	console.log(angle)
    }
    
}
