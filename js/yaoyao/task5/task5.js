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
			chang_deg(-90);
			current = (current - 90) % 360;
			break;
		case 'tunrig':
			chang_deg(90);
			current = (current + 90) % 360;
			break;
		case 'tunbac':
			chang_deg(180);
			current = (current + 180) % 360;
			break;
		case 'tralef':
			check_left(left_, 'l', box);
			break;
		case 'tratop':
			check_top(top_, 't', box);
			break;
		case 'trarig':
			check_left(left_, 'r', box);
			break;
		case 'trabot':
			check_top(top_, 'b', box);
			break;
		case 'movlef':
			box.style.transform = 'rotate(270deg)';
			current = 270;
			check_left(left_, 'l', box);
			break;
		case 'movtop':
			box.style.transform = 'rotate(0deg)';
			current = 0;
			check_top(top_, 't', box);
			break;
		case 'movrig':
			box.style.transform = 'rotate(90deg)';
			current = 90;
			check_left(left_, 'r', box);
			break;
		case 'movbot':
			box.style.transform = 'rotate(180deg)';
			current = 180;
			check_top(top_, 'b', box);
			break;
		default:
			break;
	}

}
// 不能超出边界
function check_top(top_, str, obj) {
	var const_movetimes = 100;
	var top = top_;
	if (top <= 0) {
		top = 0;
	} else if (top >= 450) {
		top = 450;
	}
	if (top && str === 't') {
		for (var i = 1; i < const_movetimes + 1; i++) {
			var x = (function(index) {
				return function() {
					obj.style.top = (top - index * 50 / const_movetimes) + 'px';
				}
			})(i);
			setTimeout(x, 1000 / const_movetimes * i);
		}
	}
	if (top < 450 && str === 'b') {
		for (var i = 1; i < const_movetimes + 1; i++) {
			var y = (function(index) {
				return function() {
					obj.style.top = (top + index * 50 / const_movetimes) + 'px';
				}
			})(i)
			setTimeout(y, 1000 / const_movetimes * i);
		}
	}
}

function check_left(left_, str, obj) {
	var const_movetimes = 100;
	var left = left_;
	if (left <= 0) {
		left = 0;
	} else if (left >= 450) {
		left = 450;
	}
	if (left && str === 'l') {
		for (var i = 1; i < const_movetimes + 1; i++) {
			var x = (function(index) {
				return function() {
					obj.style.left = (left - index * 50 / const_movetimes) + 'px';
				}
			})(i);
			setTimeout(x, 1000 / const_movetimes * i);
		}
	}
	if (left < 450 && str === 'r') {
		for (var i = 1; i < const_movetimes + 1; i++) {
			var y = (function(index) {
				return function() {
					obj.style.left = (left + index * 50 / const_movetimes) + 'px';
				}
			})(i)
			setTimeout(y, 1000 / const_movetimes * i);
		}
	}
}

function chang_deg(deg) {
	var changdeg = current;

	for (var i = 1; i < 101; i++) {
		var y = (function(index) {
			return function() {
					box.style.transform = 'rotate(' + (changdeg + deg / 100 * index) % 360 + 'deg)';
				}
		})(i)
		setTimeout(y, 10 * i);
	}
}