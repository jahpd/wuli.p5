var wuli = null;
var show_partitura = false;
var show_analise = false;
function setup(){
    createCanvas(1.5*windowWidth/2,1.5*windowHeight/2);
    ellipseMode(RADIUS);
    wuli = new WuLi(this);
}

function draw(){
    background(0, 0, 0);
    
    wuli.partitura()
    if(show_partitura){
	wuli.muda()
    }
    if(show_analise){
	wuli.analise_centro()
	wuli.analise_baricentro()
	wuli.getalts_basicos()
    }
}

function load(page, element){
    var req = null; 
    document.getElementById(element).innerHTML="Started...";
    if (window.XMLHttpRequest){
	req = new XMLHttpRequest();
	if (req.overrideMimeType){
	    req.overrideMimeType('text/xml');
	}
    } 
    else if (window.ActiveXObject) {
	try {
	    req = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e){
	    try {
		req = new ActiveXObject("Microsoft.XMLHTTP");
	    } catch (e) {}
	}
    }


    req.onreadystatechange = function(){ 
	document.getElementById(element).innerHTML="Wait server...";
	if(req.readyState == 4){
	    if(req.status == 200){
		var text = markdown.toHTML(req.responseText);
		document.getElementById(element).innerHTML= text;  
	    }   
	    else{
		document.getElementById(element).innerHTML="Erro:" + req.status + " " + req.statusText;
	    }   
	} 
    }; 
    req.open("GET", page, true); 
    req.send(null); 
}

$(document).ready(function(){
    $("textual").scroll()
    $("#readme").click(function(){
	load('README.md', "textual")
    })

    $("#about").click(function(){
	load('ABOUT.md', "textual")
    })

    $("#partitura").click(function(){
	load('PARTITURA_PLANIMETRICA.md', "textual")
	show_partitura = !show_partitura;
    })

    show_analise = false
    $("#analise").click(function(){
	load('BARICENTRO.md', "textual");
	show_analise = !show_analise
    })

    load("README.md", "textual")
})

