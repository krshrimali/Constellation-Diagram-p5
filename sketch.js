// var a = 250;
// var a; var r;
var a = 250;
var r = 45;
function set_make(n, a, r) {
	// var n = 2;
	var make = [];
	var scope = {
		radius: r,
		centre: a, 
		number: n
	};
	// console.log(mouseX, mouseY);
	if(n > 0){
		if(n >= 2) {
			make.push([a, a+r*(n-1)]);
			make.push([a, a-r*(n-1)]);
			make.push([a + r*(n-1), a]);
			make.push([a - r*(n-1), a]);
		}
		if(n >= 3) {
			make.push([a + math.eval(r*(n-1)/sqrt(2)), a + math.eval(r*(n-1)/sqrt(2))]);
			make.push([a - math.eval(r*(n-1)/sqrt(2)), a - math.eval(r*(n-1)/sqrt(2))]);
			make.push([a + math.eval(r*(n-1)/sqrt(2)), a - math.eval(r*(n-1)/sqrt(2))]);
			make.push([a - math.eval(r*(n-1)/sqrt(2)), a + math.eval(r*(n-1)/sqrt(2))]);
		}
		if(n >= 4) {
			make.push([a+math.eval(r*(n-1)), a+math.eval((r*(n-1))/2)]);
			make.push([a+math.eval(r*(n-1)/2), a+math.eval(r*(n-1))]);
			make.push([a-math.eval(r*(n-1)/2), a-math.eval(r*(n-1))]);
			make.push([a-math.eval(r*(n-1)), a-math.eval((r*(n-1))/2)]);

			make.push([a-math.eval(r*(n-1)/2), a+math.eval(r*(n-1))]);
			make.push([a+math.eval(r*(n-1)), a-math.eval((r*(n-1))/2)]);
			make.push([a+math.eval(r*(n-1)/2), a-math.eval(r*(n-1))]);
			make.push([a-math.eval(r*(n-1)), a+math.eval((r*(n-1))/2)]);

			// make.push([a+math.eval(r*(n-1)/2), a+math.eval(r*(n-1))]);
			// make.push([(a+r*(n-1))/2, a]);
			// make.push([a + math.eval(r*(n-1)/(2*sqrt(2))), a - math.eval(r*(n-1)/(2*sqrt(2)))]);
			// make.push([a - math.eval(r*(n-1)/(2*sqrt(2))), a + math.eval(r*(n-1)/(2*sqrt(2)))]);
			// make.push([a + math.eval(r*(n-1)/(2*sqrt(2))), a - math.eval(r*(n-1)/(2*sqrt(2)))]);
			// make.push([a - math.eval(r*(n-1)/(2*sqrt(2))), a + math.eval(r*(n-1)/(2*sqrt(2)))]);
		}
		if(n == 5) {
			make.push([a+math.eval(r*(n-1)), a+math.eval((r*(n-1))/8)]);
			make.push([a+math.eval(r*(n-1)), a+math.eval(2*(r*(n-1))/8)]);
			make.push([a+math.eval(r*(n-1)), a+math.eval((3*r*(n-1))/8)]);
			make.push([a+math.eval(r*(n-1)), a+math.eval((4*r*(n-1))/8)]);
			make.push([a+math.eval(r*(n-1)), a+math.eval((5*r*(n-1))/8)]);
			make.push([a+math.eval(r*(n-1)), a+math.eval((6*(n-1))/8)]);
			make.push([a+math.eval(r*(n-1)), a+math.eval((7*r*(n-1))/8)]);

		}
	}
	return make;
}
function draw() {
	background(51);

	fill(255);
	textSize(30);
	text('Number of bits, please?', 170, 47);

	var bits = input.value()
	// console.log(mouseX, mouseY);
	function combinations(n) {
		var r = [];
		for(var i = 0; i < (1 << n); i++) {
			var c = [];
			for(var j = 0; j < n; j++) {
				c.push(i & (1 << j) ? '1' : '0');  
			}
			r.push(c.join(' '));
		}
		return (r);
	}
	for(var K = 2; K <= bits; K++){
		make = set_make(K, 250, 45);
		combinations_digits = (combinations(K));
		// for (var i = 0; i <= combinations_digits.length; i++) {
		// 	console.log(combinations_digits[i]);
		// }
		
		// console.log(make);
		// console.log(make[i][0]);
		var set_a, set_b;
		for(var i = 1; i <= K-1; i++){
			noFill();
			stroke(200);
			strokeWeight(0.5);
			ellipse(a, a, i * 90, i * 90);
			// center (250, 250)
			// radius (50 + i*40, 50 + i*40)
			// equation (x-250)^2 + (y-250)^2 = (50+i*40)^2
			// ((50+i*40), 0) and (0, (50+i*40))
			// (x-250)^2 + (y-250)^2 = (50+i*40)^2
			// console.log(250, 250 + 50*i);
		}
		textSize(10);
		console.log(make.length);
		if(make.length != 0){
			for(var j = 0; j < Math.pow(2, K); j++){
				// console.log(set_a, set_b);
				text(combinations_digits[j], make[j][0], make[j][1]);
				console.log(make);
			}
		}
	}
}


//
var input, button, greeting;

function setup() {
	// create canvas
	createCanvas(600, 600);
	console.log(math.eval('2^2'));
	input = createInput();
	input.position(20, 65);

	button = createButton('submit');
	button.position(input.x + input.width, 65);
	button.mousePressed(greet);

	// fill(0, 102, 153, 51);
	// greeting = createElement('h2', 'Number of bits, please?');
	// greeting.position(20, 5);

	textAlign(CENTER);
	textSize(50);
	// console.log(make);
	// make = set_make(2);
	// console.log(make);
	// var bits = input.value();
	// console.log('BITS : ', bits);
	// make = set_make(input.value());
}

function greet() {
  var bits = input.value();
  console.log(bits);

}
