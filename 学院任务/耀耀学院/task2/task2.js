//全局变量
var flag=0;
var submit = document.getElementById('submit');
var password = document.getElementById('password');
var name = document.getElementById('name');
var confirm_pass = document.getElementById('confirm_password');
var emil = document.getElementById('emil');
var phone = document.getElementById('phone');
var prompt_name = document.getElementById('prompt_name');
var prompt_pass = document.getElementById('prompt_pass');
var prompt_confirm_pass = document.getElementById('prompt_confirm_pass');
var prompt_emil = document.getElementById('prompt_emil');
var prompt_phone = document.getElementById('prompt_phone');

name.addEventListener('focus', name_focus);
name.addEventListener('blur', name_blur);

password.addEventListener('focus', password_focus);
password.addEventListener('blur', password_blur);

confirm_pass.addEventListener('focus', confirm_pass_focus);
confirm_pass.addEventListener('blur', confirm_pass_blur);

emil.addEventListener('focus', emil_focus);
emil.addEventListener('blur', emil_blur);

phone.addEventListener('focus', phone_focus);
phone.addEventListener('blur', phone_blur);

submit.addEventListener('click', test_submit);

function common_blur_void(obj) {
	obj.className = 'blur_prompt';
	obj.innerHTML = '不能为空';
	
}

function common_blur_succ(inobj, promptobj) {
	promptobj.innerHTML = '正确';
	promptobj.className = 'prompt_succ';
	inobj.style.borderColor = '#0fa';
	flag=0;
}

function common_focus(obj) {
	obj.style.borderColor = '#0bf';
}

function common_blur(obj) {
	obj.style.borderColor = '#f00';
	flag=1;
}
//焦点
function name_focus() {
	common_focus(this);
	prompt_name.className = 'input_prompt';
	prompt_name.innerHTML = '必填，4-16字符';
}

function password_focus() {
	common_focus(this);
	prompt_pass.className = 'input_prompt';
	prompt_pass.innerHTML = '必填，至少6个字符';
}

function confirm_pass_focus() {
	common_focus(this);
	prompt_confirm_pass.className = 'input_prompt';
	prompt_confirm_pass.innerHTML = '确认密码';
}

function emil_focus(){
	common_focus(this);
	 prompt_emil.className = 'input_prompt';
	 prompt_emil.innerHTML = '输入邮箱';
}

function phone_focus(){
	common_focus(this);
	 prompt_phone.className = 'input_prompt';
	 prompt_phone.innerHTML = '输入手机号';
}
//失去
function name_blur() {
	var value = this.value;
	var re = /^[\w_\u4e00-\u9fa5]+$/;
	var reg = /[\w_]+/;
	var len = 0;
	common_blur(this);
	if (value) {
		if (re.test(value)) {
			for (var j = 0; j < value.length; j++) {
				if (reg.test(value[j])) {
					len++;
				} else {
					len += 2;
				}
			}
			if (len >= 4 && len <= 16) {
				common_blur_succ(this, prompt_name);
			}
		} else {
			alert('输入有误');
		}
	} else {
		common_blur_void(prompt_name);
	}
}

function password_blur() {
	var value = this.value;
	common_blur(this);
	if (value) {
		if (value.length >= 6) {
			common_blur_succ(this, prompt_pass);
		}
	} else {
		common_blur_void(prompt_pass);
	}
}

function confirm_pass_blur() {
	var value = this.value;
	if (value === password.value && value != '') {
		common_blur_succ(this, prompt_confirm_pass);
	} else {
		prompt_confirm_pass.className = 'blur_prompt';
		prompt_confirm_pass.innerHTML = '密码错误';
		common_blur(this);
	}
}

function emil_blur(){
	var value=this.value;
	var re=/^[\w]+@[\w]+.[\w]+$/;
	if(re.test(value)){
		common_blur_succ(this, prompt_emil);
	}else{
		 prompt_emil.className = 'blur_prompt';
		 prompt_emil.innerHTML = '邮箱错误';
		common_blur(this);
	}
}
function phone_blur(){
	var re=/^[0-9]{11}$/;
	if(re.test(this.value)){
		common_blur_succ(this, prompt_phone);
	}else{
		 prompt_phone.className = 'blur_prompt';
		 prompt_phone.innerHTML = '手机号错误';
		common_blur(this);
	}

}

function test_submit(){
	if(flag===1){
		alert('输入有误');
	}else{
		alert('提交成功');
	}
}