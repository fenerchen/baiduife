//全局变量
var submit = document.getElementById('submit');
var prompt = document.getElementById('prompt');
var name_ = document.getElementById('name');

name_.addEventListener('focus', show_f);
name_.addEventListener('blur', show_b);
submit.addEventListener('click', test);

function show_f(e) {
	e.preventDefault();
	name_.style.borderColor = '#aaa';
	prompt.className = 'show_in';
	prompt.innerHTML = '必填，4-16字符';
}

function show_b(e) {
	e.preventDefault();
	name_.style.borderColor = '#000';
	prompt.className = 'show';
}


function test(e) {
	e.preventDefault();
	var value = name_.value;
	var re = /^[\w_\u4e00-\u9fa5]+$/; //匹配中文字符的正则表达式： [\u4e00-\u9fa5]
	var reg = /[\w_]+/; //匹配双字节字符(包括汉字在内)：[^\x00-\xff]
	var len = 0;
	if (!value) {
		prompt.innerHTML = '姓名不能空';
		prompt.className = 'show_err';
		name_.style.borderColor = '#f00';
	} else if (re.test(value)) {
		for (var j = 0; j < value.length; j++) {
			if (reg.test(value[j])) {
				len++;
			} else {
				len += 2;
			}
		}
		if (len >= 4 && len <= 16) {
			prompt.innerHTML = '正确';
			prompt.className = 'show_succ';
			name_.style.borderColor = '#0a0';
		}
	} else {
		alert('输入有误');
	}
}