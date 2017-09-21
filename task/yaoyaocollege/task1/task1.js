//全局变量
var submit=document.getElementById('submit');
var prompt=document.getElementById('prompt');
var name=document.getElementById('name');

name.addEventListener('focus',show_f);
name.addEventListener('blur',show_b);
submit.addEventListener('click',test);

function show_f(e){
	e.preventDefault();
	name.style.borderColor='#aaa';
	prompt.className='show_in';
	prompt.innerHTML='必填，4-16字符';
}
function show_b(e){
	e.preventDefault();
	name.style.borderColor='#000';
	prompt.className='show';
}


function test(e){
	e.preventDefault();
	var value=name.value;
	var re=/^[\w_\u4e00-\u9fa5]+$/;
	var reg=/[\w_]+/;
	var len=0;
	if(!value){
		prompt.innerHTML='姓名不能空';
		prompt.className='show_err';
		name.style.borderColor='#f00';
	}else if(re.test(value)){
		for(var j=0;j<value.length;j++){
			if(reg.test(value[j])){
				len++;
			}else{
				len+=2;
			}
		}
		if(len>=4&&len<=16)
		{
			prompt.innerHTML='正确';
			prompt.className='show_succ';
			name.style.borderColor='#0a0';
		}
	}else{
		alert('输入有误');
	}
}