// Jawadul Kadir
// SoftDev2 pd7
// K08 -- Animation Nation
// 2018-3-5

var svg = document.getElementById("vimage");

//state variables for animation
var animation = 0;
var growing = true;
var counter = 0;
var pos_x = 150;
var pos_y = 150;
var vel_x = 3;
var vel_y = 2;
var frame = null;

//draws the dot
var draw = function(e){
	svg.innerHTML='';
	if(animation == 1){
	    if(growing){
			var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			c1.setAttribute("cx", "250");
			c1.setAttribute("cy", "250");
			c1.setAttribute("r", counter++ + "");
			c1.setAttribute("fill", "#dabbed");
			c1.setAttribute("stroke", "#dabbed");
			svg.appendChild(c1);
	    }
		else{
			var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			c1.setAttribute("cx", "250");
			c1.setAttribute("cy", "250");
			c1.setAttribute("r", counter-- + "");
			c1.setAttribute("fill", "#dabbed");
			c1.setAttribute("stroke", "#dabbed");
			svg.appendChild(c1);
		}
		if(counter == 0 || counter == 50) growing = !growing;
	}
	else{
		var logo = document.createElementNS("http://www.w3.org/2000/svg", "image");
		logo.setAttribute("href", "DVD_Video-logo-7624EAA47F-seeklogo.com.png");
		logo.setAttribute("height", "44");
		logo.setAttribute("width", "75");
		logo.setAttribute("x", pos_x);
		logo.setAttribute("y", pos_y);
		svg.appendChild(logo);
		pos_x += vel_x;
		pos_y += vel_y;
		if(pos_x <= 0 || pos_x >= 500 - 75) vel_x *= -1;
		if(pos_y <= 0 || pos_y >= 500 - 44) vel_y *= -1;
	}
	frame = window.requestAnimationFrame(draw);
	console.log(frame);
};

var circle = function(e){
	if(animation != 1){
		window.cancelAnimationFrame(frame);
		animation = 1;
		growing = true;
		counter = 0;
		frame = window.requestAnimationFrame(draw);
	}
};

var dvd = function(e){
	if(animation != 2){
		window.cancelAnimationFrame(frame);
		svg.innerHTML='';
		animation = 2;
		pos_x = 200;
		pos_y = 300;
		vel_x = 3;
		vel_y = 2;
		frame = window.requestAnimationFrame(draw);
	}
};

var stop = function(e){
	if(animation != 0){
		window.cancelAnimationFrame(frame);
		svg.innerHTML='';
		animation = 0;
		frame = null;
	}
}

document.getElementById("stop").addEventListener("click", stop);
document.getElementById("circle").addEventListener("click", circle)
document.getElementById("dvd").addEventListener("click", dvd);