//定义全局变量
var root_ = document.getElementById('root');
var dfs = document.getElementById('dfs');
var bfs = document.getElementById('bfs');
var search = document.getElementById('search');
var input = document.getElementById('input');
var his; //存放历史节点
var tree = [];
var flag = 1;

//事件监听
dfs.addEventListener('click', dfs_button);
bfs.addEventListener('click', bfs_button);
search.addEventListener('click', search_button);

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
				console.log(index);
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

function search_button(){
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