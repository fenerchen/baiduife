//全局变量
var root_ = document.getElementById('root');
var pre = document.getElementById('pre');
var mid = document.getElementById('mid');
var aft = document.getElementById('aft');
var tree = [];//树节点
var history;//存放历史节点

//事件监听
pre.addEventListener('click', pre_);
mid.addEventListener('click', mid_);
aft.addEventListener('click', aft_);
//初始化
function initial() {
	tree = [];
	if (history) {
		history.style.background = '#fff';
	}
}
//显示效果
function display() {
	for (var i = 0; i < tree.length; i++) {
		var dis = (function(index) {
			return function() {
				if (history) {
					history.style.background = '#fff';
				}
				tree[index].style.background = '#0a0';
				history = tree[index];
			}
		})(i)
		var t = setTimeout(dis, i * 500);
	}
}
//前序遍历
function preOder(node) {
	if (node) {
		tree.push(node);
		preOder(node.firstElementChild);
		preOder(node.lastElementChild);
	}
}
//中序遍历
function midOder(node) {
	if (node) {
		midOder(node.firstElementChild);
		tree.push(node);
		midOder(node.lastElementChild);
	}
}
//后序遍历
function aftOder(node) {
	if (node) {
		aftOder(node.firstElementChild);
		aftOder(node.lastElementChild);
		tree.push(node);
	}
}

function pre_() {
	initial();
	preOder(root_);
	display();
}
function mid_() {
	initial();
	midOder(root_);
	display();
}
function aft_() {
	initial();
	aftOder(root_);
	display();
}