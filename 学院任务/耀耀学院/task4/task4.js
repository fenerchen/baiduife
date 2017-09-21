var exec = document.getElementById('exec');
var seletion = document.getElementById('seletion');
var box = document.getElementById('box');
var wrapper=document.getElementById('wrapper');
var flag = 'top';
var current = 0;

function add(){
	for(var i=0;i<100;i++){
		var node=document.createElement('div');
		wrapper.appendChild(node);
	}
}
add();//创建网格
exec.addEventListener('click', show);

function show() {
	var top_ = parseInt(box.style.top.slice(0, -2));//使用offset不能改变，只读
	var left_ = parseInt(box.style.left.slice(0, -2));//每次更新位置

	switch (seletion.value) {
		case 'go':
			if (current === 0 || current === -0) {
				top_ = check_top(top_);
				box.style.top = (top_ - 50) + 'px';
			} else if (current === 270 || current === (-90)) {
				left_ = check_left(left_);
				box.style.left = left_ - 50 + 'px';
			} else if (current === (-270) || current === 90) {
				left_ = check_left(left_);
				box.style.left = left_ + 50 + 'px';
			} else {
				top_ = check_top(top_);
				box.style.top = top_ + 50 + 'px';
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
		default:
			break;
	}

}

//不能超出边界
function check_top(top_) {
	var top = top_;
	if (top <= 0) {
		top = 50;
	} else if (top >= 400) {
		top = 400;
	}
	return top;
}

function check_left(left_) {
	var left = left_;
	if (left <= 0) {
		left = 50;
	} else if (left >= 400) {
		left = 400;
	}
	return left;
}