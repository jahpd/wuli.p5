// Cria instancias de Wuli
function WuLi(p5){
    this.p5 = p5;
    this.step = Math.floor(Math.random()*10);
    this.angle = 0;

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
	{//0
	    x: this.p5.width*0.5,
	    y: this.p5.width*0.02
	},
	{//1
	    x: this.p5.width*0.5+(this.p5.width*0.05), 
	    y: this.p5.height*0.5+(this.p5.height*0.03)
	},
	{//2
	    x: this.p5.width*0.5-(this.p5.width*0.05),
	    y: this.p5.height*0.5-(this.p5.height*0.03)
	},
	{//3
	    x: this.p5.width*0.5-(this.p5.width*0.02),
	    y: this.p5.height*0.5+(this.p5.height*0.13)
	},
	{//4
	    x: this.p5.width*0.5+(this.p5.width*0.15),
	    y: this.p5.height*0.5+(this.p5.height*0.21)
	},
	{//5
	    x: this.p5.width*0.5-(this.p5.width*0.13),
	    y: this.p5.height*0.5+(this.p5.height*0.35)
	},
	{//6
	    x: this.p5.width*0.5-(this.p5.width*0.13),
	    y: this.p5.height*0.5-(this.p5.height*0.21)
	},
	// Quadrados
	{//7
	    x: this.p5.width*0.5-(this.p5.width*0.25),
	    y: this.p5.height*0.5-(this.p5.height*0.1)
	},
	{//8
	    x: this.p5.width*0.5+(this.p5.width*0.05),
	    y: this.p5.height*0.5+(this.p5.height*0.45)
	},
	{//9
	    x: this.p5.width*0.5+(this.p5.width*0.25),
	    y: this.p5.height*0.5+(this.p5.height*0.01)
	},
	//Triangulos
	{//10
	    x: this.p5.width*0.5+(this.p5.width*0.21),
	    y: this.p5.height*0.5-(this.p5.height*0.21)
	},
	{//11
	    x: this.p5.width*0.5+(this.p5.width*0.084),
	    y: this.p5.height*0.5-(this.p5.height*0.13)
	}
	
    ];

    this.pontos = function(){
	for(var i=0; i< this.points.length; i++){
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

    this.partitura = function(){
	this.p5.wuli.espaco_planimetrico();
	this.p5.push()
	this.p5.rectMode(CENTER);
	this.p5.translate(this.p5.width/2, this.p5.height/2);
	this.p5.rotate(this.angle);
	this.p5.translate(-this.p5.width/2, -this.p5.height/2);
	this.p5.wuli.pontos();
	this.p5.wuli.lines();
	this.p5.pop()
    }

    this.muda = function(){
	this.p5.noStroke()
	this.p5.textSize(10);
	this.p5.fill(0, 255, 0);
	if(this.p5.second() % this.step === 0){
	    this.step = Math.floor(Math.random()*10)+1;
	    
	    this.angle = Math.random() * 2 * Math.PI;
	}
	this.p5.text("rotação atual: "+this.angle+" radianos", this.p5.width/200, this.p5.height/10)
	this.p5.text("nova mudança será em: "+this.step+" segundos", this.p5.width/200, this.p5.height/8)
    }  

    this.print = function(){
	rectMode(CORNERS)
	textSize(20);
	fill(255, 255, 255);
	text("angulo: "+this.angle);
    }

    this.analise_centro = function(){
	this.angle = 0;
	this.p5.stroke(0, 255, 0, 100);
	for(var i=0; i<this.points.length; i++){
	    p5.line(this.p5.width/2, this.p5.height/2, this.points[i].x, this.points[i].y)
	}
	
    }
    
    this.baricentros = [
	    {
		x: (this.points[1].x + this.points[2].x + this.points[3].x)/3,
		y: (this.points[1].y + this.points[2].y + this.points[3].y)/3
	    },
	    {
		x: (this.points[2].x + this.points[5].x + this.points[7].x)/3,
		y: (this.points[2].y + this.points[5].y + this.points[7].y)/3
	    },
	    {
		x: (this.points[1].x + this.points[3].x + this.points[4].x + this.points[8].x)/4,
		y: (this.points[1].y + this.points[3].y + this.points[4].y + this.points[8].y)/4
	    },
	    {
		x: (this.points[2].x + this.points[5].x + this.points[8].x)/3-20,
		y: (this.points[2].y + this.points[5].y + this.points[8].y)/3-20
	    },
	    {
		x: (this.points[1].x + this.points[4].x + this.points[9].x + this.points[10].x + this.points[11].x)/5,
		y: (this.points[1].y + this.points[4].y + this.points[9].y + this.points[10].y + this.points[11].y)/5
	    },
	    {
		x: (this.points[0].x + this.points[1].x + this.points[10].x)/3-20,
		y: (this.points[0].y + this.points[1].y + this.points[10].y)/3-20
	    },
	    {
		x: (this.points[0].x + this.points[1].x + this.points[6].x)/3-20,
		y: (this.points[0].y + this.points[1].y + this.points[6].y)/3+20
	    }
	]

    this.analise_baricentro = function(){
	this.angle = 0;
	this.p5.stroke(255, 0, 0);
	for(var i=0; i<this.baricentros.length;i++){
	    var x = this.baricentros[i].x;
	    var y = this.baricentros[i].y;
	    this.p5.ellipse(x, y, 3, 3);
	    this.p5.line(this.p5.width/2, this.p5.height/2, x, y);
	}	
    }

    
    var colors_label = [0, 255, 255];

    this.getalts_basicos = function(){
	
	this.p5.fill(colors_label[0], colors_label[1], colors_label[2]);
	this.p5.noStroke()
	this.p5.textSize(32);
	for(var i=0; i<this.baricentros.length;i++){
	    var x = this.baricentros[i].x;
	    var y = this.baricentros[i].y;
	    this.p5.text(i, x, y)
	}
    }

}
