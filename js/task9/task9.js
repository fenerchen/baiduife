//定义全局变量
var root_ = document.getElementById('root');
var dfs = document.getElementById('dfs');
var bfs = document.getElementById('bfs');
var search = document.getElementById('search');
var input = document.getElementById('input');
var tree_id = document.getElementById('tree_');
var add = document.getElementById('add');
var del = document.getElementById('delete');
var add_input = document.getElementById('addvalue');
var his; //存放历史节点
var tree = [];
var flag = 1;
var flad_option = 1;
//事件监听
dfs.addEventListener('click', dfs_button);
bfs.addEventListener('click', bfs_button);
search.addEventListener('click', search_button);
tree_id.addEventListener('mouseover', option);
del.addEventListener('click', remove);
add.addEventListener('click', addNode);

//初始化
function initial() {
	tree = [];
	if (his) {
		his.style.background = '#fff';
	}
}

//显示效果
function display() {
	// alert(tree.length)
	for (var j = 0; j < tree.length; j++) {
		var dis = (function(index) {
			return function() {
				if (his) {
					his.style.background = '#fff';
				}
				tree[index].style.background = '#0a0';
				his = tree[index];
				//console.log(index);
			}
		})(j);
		// console.log("tree["+j+"]="+tree[j].getAttribute('value'));
		setTimeout(dis, j * 500);

	}
}

//深度优先搜索
function deepSearch(node) {
	for (var i = 0; i < node.children.length; i++) {
		deepSearch(node.children[i]);
	}
	tree.push(node);
	// console.log(node.getAttribute('value'));
}
//广度优先搜索
function breadthSearch(node) {
	if (flag === 1) {
		tree.push(node);
		flag = 0;
	}
	if (node) {
		for (var i = 0; i < node.children.length; i++) {
			tree.push(node.children[i]);
		}
		for (var i = 0; i < node.children.length; i++) {
			breadthSearch(node.children[i]);
		}
	}
}

function search_button() {
	initial();
	deepSearch(root_);
	if (input.value) {
		for (var j = 0; j < tree.length; j++) {
			if (input.value === tree[j].getAttribute('value')) {
				tree[j].style.background = '#f00';
				his = tree[j];
			}
		}
	} else {
		alert('请输入您要查询的内容！');
	}
}

//鼠标移入出发选择事件
function option() {
	//initial();
	tree = [];
	deepSearch(root_);
	flad_option = 1;
	for (var i = 0; i < tree.length; i++) {
		tree[i].onclick = function() {
			if (flad_option === 1) {
				this.style.background = '#0ff';
				flad_option = 0; //一旦最小范围node点击，设置颜色，不在触发他的父亲节点
				//var style=document.defaultView.getComputedStyle(this, null);费IE
				//var color=style.backgroundColor;
				// var color=this.currentStyle.backgroundColor;//IE
			}
		}
	}
}
//删除节点
function remove() {
	initial();
	deepSearch(root_);
	for (var i = 0; i < tree.length; i++) {
		if (tree[i].style.background === "rgb(0, 255, 255)") {
			for (var j = 0; j < tree[i].children.length; j++) {
				tree[i].removeChild(tree[i].children[j]);
			}
			tree[i].parentNode.removeChild(tree[i]);
		} else {
			alert('请选择节点');
			break;
		}
	}
}

function addNode() {
	var value = add_input.value;
	initial();
	deepSearch(root_);
	if (value) {
		for (var i = 0; i < tree.length; i++) {
			if (tree[i].style.background === "rgb(0, 255, 255)") {
				var node = document.createElement('div');
				node.innerHTML = value;
				tree[i].appendChild(node);
			} else {
				alert('请选择节点');
				break;
			}
		}
	} else {
		alert('没有要加入的节点');
	}
}

function dfs_button() {
	// e.preventDefault();
	initial();
	deepSearch(root_);
	display();
}

function bfs_button() {
	initial();
	breadthSearch(root_);
	display();
}