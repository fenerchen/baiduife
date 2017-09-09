var exec = document.getElementById('exec');
var seletion = document.getElementById('seletion');
var box = document.getElementById('box');
var wrapper = document.getElementById('wrapper');
var flag = 'top';
var current = 0;

function add() {
	for (var i = 0; i < 100; i++) {
		var node = document.createElement('div');
		wrapper.appendChild(node);
	}
}
add(); //创建网格
exec.addEventListener('click', show);

function show() {
	var top_ = parseInt(box.style.top.slice(0, -2)); //使用offset不能改变，只读
	var left_ = parseInt(box.style.left.slice(0, -2)); //每次更新位置

	switch (seletion.value) {
		case 'go':
			if (current === 0 || current === -0) {
				check_top(top_, 't', box, 50);
			} else if (current === 270 || current === (-90)) {
				check_left(left_, 'l', box, 50);
			} else if (current === (-270) || current === 90) {
				check_left(left_, 'r', box);
			} else {
				check_top(top_, 'b', box);
			}
			break;
		case 'tunlef':
			current = (current - 90) % 360;
			box.style.transform = 'rotate(' + current + 'deg)';
			break;
		case 'tunrig':
			current = (current + 90) % 360;
			box.style.transform = 'rotate(' + current + 'deg)';
			break;
		case 'tunbac':
			current = (current + 180) % 360;
			box.style.transform = 'rotate(' + current + 'deg)';
			break;
		case 'tralef':
			check_left(left_, 'l', box);
			break;
		case 'tratop':
			check_top(top_, 't', box);
			break;
		case 'trarig':
			check_left(left_, 'r',box);
			break;
		case 'trabot':
			check_top(top_, 'b', box);
			break;
		case 'movlef':
			box.style.transform = 'rotate(270deg)';
			check_left(left_, 'l', box);
			break;
		case 'movtop':
			box.style.transform = 'rotate(0deg)';
			check_top(top_, 't', box);
			break;
		case 'movrig':
			box.style.transform = 'rotate(90deg)';
			check_left(left_, 'r', box);
			break;
		case 'movbot':
			box.style.transform = 'rotate(180deg)';
			check_top(top_, 'b', box);
			break;
		default:
			break;
	}

}
//不能超出边界
function check_top(top_, str, obj) {
//e.preventDefault();
	var top = top_;
	if (top <= 0) {
		top = 0;
	} else if (top >= 450) {
		top = 450;
	}
	if (top && str === 't') {
		return timer = setInterval(function() {
			obj.style.top = (top - 10) + 'px';
			if (obj.style.top === (top - 50) + 'px') {
				clearInterval(timer);
			}
		}, 200);
	}
	if (top < 450 && str === 'b') {
		return timer = setInterval(function() {
			obj.style.top = (top + 10) + 'px';
			if (obj.style.top === (top + 50) + 'px') {
				clearInterval(timer);
			}
		}, 200);
	}
}

function check_left(left_, str, obj) {
	//e.preventDefault();
	var left = left_;
	if (left <= 0) {
		left = 0;
	} else if (left >= 450) {
		left = 450;
	}
	if (left && str === 'l') {
		for (var i = 1; i < 6;i++) {
			var x=(function	(index){
				console.log(index);
				return function(){obj.style.left = (left - index*10) + 'px';}
					 
					// alert(index	);
			})(i);
			setInterval(x, 500);
			//alert(obj.style.left	);
		}

	}
	if (left < 450 && str === 'r') {
	for (var i = 1; i < 51;i++) {
			var y=(function	(index){
					return function(){obj.style.left = (left + index) + 'px';}
			})(i)
			timer = setInterval(y, 2000);
		}
	}
}

// function check_top(top_,str) {
// 	var top = top_;
// 	if (top <= 0) {
// 		top = 0;
// 	} else if (top >= 450) {
// 		top = 450;
// 	}
// 	if(top&&str==='t'){
// 	return	box.style.top = (top- 50) + 'px';
// 		}
// 	if(top<450&&str==='b'){
// 	return box.style.top = top_ + 50 + 'px';
// 	}
// }

// function check_left(left_,str) {
// 	var left = left_;
// 	if (left <= 0) {
// 		left = 0;
// 	} else if (left >= 450) {
// 		left = 450;
// 	}
// 	if(left&&str==='l'){
// 		return 	box.style.left = left- 50 + 'px';
// 		}
// 		if(left<450&&str==='r'){
// 		return 	box.style.left = left+50 + 'px';
// 		}			
// }