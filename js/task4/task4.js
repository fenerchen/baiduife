window.onload = function() {

		var input = document.getElementById('input');
		var left_in = document.getElementById("left-in");
		var left_out = document.getElementById("left-out");
		var list_num = document.getElementById("list");
		var right_in = document.getElementById("right-in");
		var right_out = document.getElementById("right-out");
		var in_in = document.getElementsByClassName('in');

		var flag = ''; //标志
		var f = '';

		//添加数字
		right_in.onclick = function() {
			flag = 'right';
			in_();
		};
		left_in.onclick = function() {
			flag = 'left';
			in_();
		};
		//移除数字
		left_out.onclick = function() {
			f = 'left';
			out();
		}

		right_out.onclick = function() {
			f = 'right';
			out();
		}

		//点击数字删除
		list_num.onmouseover = function() {
				for (var i = 0; i < list_num.children.length; i++) {
					list_num.children[i].onclick = function() {
						list_num.removeChild(this);
					}
				}
			}
			//输入队列
		var in_ = function() {
			var re = /^[0-9]+$/;
			var len = input.value.length;
			var value = input.value;
			var add = document.createElement('span')
			add.className = 'display';
			if (re.test(value)) {
				add.style.width = 10 * input.value.length + 'px';
				add.innerHTML = value;
				if (flag === 'right') { //右侧点击，将元素添加到父元素最后
					list_num.appendChild(add);
				}
			} else if (flag === 'left') { //左侧点击，则将元素从头插入
				list_num.insertBefore(add, list_num.firstElementChild);
			}
		} else {
			alert('请输入数字')
		}
		input.value = '';
	}
	//移除队列
var out = function() {
	if (list_num.children.length > 0) {
		if (f === 'right') {
			list_num.removeChild(list_num.lastElementChild);
		} else if (f = 'left') {
			list_num.removeChild(list_num.children[0]);
		}

	} else
		alert('没有数字了');
}
}