window.onload = function() {

	var input = document.getElementById('input');
	var left_in = document.getElementById("left-in");
	var left_out = document.getElementById("left-out");
	var list_num = document.getElementById("list");
	var right_in = document.getElementById("right-in");
	var right_out = document.getElementById("right-out");
	var in_in = document.getElementsByClassName('in');

	//添加数字
	right_in.onclick = function() {
		var re = /^[0-9]+$/;
		var len = input.value.length;
		var value = input.value;
		var add = document.createElement('span')
		add.className = 'display';
		if (re.test(value)) {
			add.style.width = 10 * input.value.length + 'px';
			add.innerHTML = value;
			list_num.appendChild(add);
		} else {
			alert('请输入数字')
		}
		input.value = '';
	};
	left_in.onclick = function() {
		var re = /^[0-9]+$/;
		var len = input.value.length;
		var value = input.value;
		var add = document.createElement('span')
		add.className = 'display';
		if (re.test(value)) {
			add.style.width = 10 * input.value.length + 'px';
			add.innerHTML = value;
			list_num.insertBefore(add, list_num.firstElementChild);
		} else {
			alert('请输入数字')
		}
		input.value = '';
	};
	//移除数字
	left_out.onclick = function() {
		if (list_num.children.length > 0)
			list_num.removeChild(list_num.children[0]);
		else
			alert('没有数字了');
	}

	right_out.onclick = function() {
		if (list_num.children.length > 0)
			list_num.removeChild(list_num.lastElementChild);
		else
			alert('没有数字了');
	}

	//点击数字删除
	list_num.onmouseover = function() {
		for (var i = 0; i < list_num.children.length; i++) {
			list_num.children[i].onclick = function() {
				list_num.removeChild(this);
			}
		}
	}
}