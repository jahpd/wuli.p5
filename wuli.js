// Cria instancias de Wuli
function WuLi(p5){
    this.p5 = p5;
    var step = Math.floor(Math.random()*20+1);
    var angle = 0;
    this.analise = {baricentro: false}

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

    this.partitura = function(){
	this.p5.wuli.espaco_planimetrico();
	var _this = this

	// Simples função para gerar uma cor
	var setColor = function(points,i, analise, callback){
	    // Adiciona cor se não existir
	    if(!analise || !points[i].color){
		points[i].color = {r:0, g:0, b:0}
	    }
	    // Linhas: se um modo de análise estiver ativo, colorir as linhas
	    // Se não, manter branco
	    if(analise){
		for(var c in point.color){
		    points[i].color[c] = Math.floor(Math.random()*256);
		}	
	    }
	    callback(points[i].r, points[i].g, points[i].b) 
	};

	var setPoints = function(points, i, callback){
	    // Pontos
	    if(i<=6){
		callback('circulo', points[i].x, points[i].y)
	    }
	    if(i>6 && i<10){
		callback('quadrado', points[i].x, points[i].y)
	    }
	    if(i>9){
		callback('triangulo', points[i].x, points[i].y)
	    }
	}

	var setLines = function(points, i, callback){
	    // Linhas propriamente ditas
	    if(i<3){
		callback(points[i].x, points[i].y, points[i+1].x, points[i+1].y)
	    }
	    if(i===3){
		callback(points[i].x, points[i].y, points[1].x, points[1].y)
	    }
	    if(i===4){
		callback(points[1].x, points[1].y, points[i].x, points[i].y)
	    }
	    if(i===5){
		callback(points[2].x, points[2].y, points[i].x, points[i].y)
	    }
	    if(i===6){
		callback(points[0].x, points[0].y, points[i].x, points[i].y)
	    }
	    if(i===7){
		callback(points[2].x, points[2].y, points[i].x, points[i].y)
		callback(points[6].x, points[6].y, points[i].x, points[i].y)
		callback(points[5].x, points[5].y, points[i].x, points[i].y)
	    }
	    if(i===8){
		callback(points[3].x, points[3].y, points[i].x, points[i].y)
		callback(points[4].x, points[4].y, points[i].x, points[i].y)
		callback(points[5].x, points[5].y, points[i].x, points[i].y)
	    }
	    if(i===9){
		callback(points[4].x, points[4].y, points[i].x, points[i].y)
	    }
	    if(i===10){
		callback(points[0].x, points[0].y, points[i].x, points[i].y)
		callback(points[9].x, points[9].y, points[i].x, points[i].y)
	    }
	    if(i===11){
		callback(points[1].x, points[1].y, points[i].x, points[i].y)
		callback(points[10].x, points[10].y, points[i].x, points[i].y)
	    }
	}

	var callbacks = {
	    noFill: this.p5.noFill,
	    stroke: this.p5.stroke,
	    rect: this.p5.rect,
	    ellipse: this.p5.ellipse,
	    triangle: this.p5.triangle,
	    line: this.p5.line,
	    point: function(type, x, y){
		callbacks.noFill()
		callbacks.stroke(255, 255, 255);
		if(type === 'quadrado'){
		    callbacks.rect(x, y, 20, 20);
		}
		else if(type === 'triangulo'){
		    var x1 = x;
		    var x2 = x1+(x1*0.015);
		    var x3 = x1-(x1*0.015);
		    var y1 = y-10
		    var y2 = y+10
		    callbacks.triangle(x1, y1, x2, y2, x3, y2);
		}
		else if(type === 'circulo'){
		    callbacks.ellipse(x, y, 10, 10);
		}
	    }
	}

	var _analise = this.analise.baricentro
	var  _points = this.points
	push()
	rectMode(CENTER);
	translate(this.p5.width/2, this.p5.height/2);
	rotate(angle);
	translate(-this.p5.width/2, -this.p5.height/2);
	for(var i=0; i< _points.length; i++){
	    setColor(_points,  i, _analise, callbacks.stroke)
	    setPoints(_points, i, callbacks.point)
	    setLines(_points,  i, callbacks.line)
	}
	pop()
    }
	
    var randomize = true
    this.muda = function(){
	this.p5.noStroke()
	this.p5.textSize(10);
	this.p5.fill(0, 255, 0);
	
	if(this.p5.second() % step === 0){
	    
	    step = Math.floor(Math.random()*60)
	    angle = Math.random() * 2 * Math.PI;
	}
	
	this.p5.text("rotação atual: "+angle+" radianos", this.p5.width/200, this.p5.height/8)
	this.p5.text("nova mudança será em: "+(step - this.p5.second() % step)+" segundos", this.p5.width/200, this.p5.height/6)
	
    }  


    this.analise_centro = function(){
	this.analise.baricentro = true;
	var callbacks = {
	    width: this.p5.width/2,
	    height: this.p5.height/2,
	}
	push()
	rectMode(CENTER);
	translate(this.p5.width/2, this.p5.height/2);
	rotate(angle);
	translate(-this.p5.width/2, -this.p5.height/2);
	stroke(0, 255, 0, 100);
	for(var i=0; i<this.points.length; i++){
	    line(callbacks.width, callbacks.height, this.points[i].x, this.points[i].y)
	}	
	pop()
    }
    
    var baricentros = [
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
	var callbacks = {
	    width: this.p5.width/2,
	    height: this.p5.height/2
	}
	push()
	rectMode(CENTER);
	translate(this.p5.width/2, this.p5.height/2);
	rotate(angle);
	translate(-this.p5.width/2, -this.p5.height/2);
	stroke(255, 0, 0);
	for(var i=0; i<baricentros.length;i++){
	    var x = baricentros[i].x;
	    var y = baricentros[i].y;
	    ellipse(x, y, 3, 3);
	    line(callbacks.width, callbacks.height, x, y);
	}
	pop()
    }

    this.percurso = function(pontos){
	var callbacks = {
	    width: this.p5.width/2,
	    height: this.p5.height/2
	}
	push()
	rectMode(CENTER);
	translate(this.p5.width/2, this.p5.height/2);
	rotate(angle);
	translate(-this.p5.width/2, -this.p5.height/2);
	stroke(0, 0, 255);
	for(var i = 0; i<pontos.length; i++){
	    if(i < pontos.length-1){
		line(baricentros[pontos[i]].x, baricentros[pontos[i]].y, baricentros[pontos[i+1]].x, baricentros[pontos[i+1]].y)
	    }
	}
	pop()
    }

    
    var colors_label = [0, 255, 255];

    this.getalts_basicos = function(){

	fill(colors_label[0], colors_label[1], colors_label[2]);
	noStroke()
	textSize(32);
	push()
	rectMode(CENTER);
	translate(this.p5.width/2, this.p5.height/2);
	rotate(angle);
	translate(-this.p5.width/2, -this.p5.height/2);
	for(var i=0; i<baricentros.length;i++){
	    var x = baricentros[i].x;
	    var y = baricentros[i].y;
	    text(i, x, y);
	}
	pop()
    }


}
