var stu=document.getElementById('stu');
var non_stu=document.getElementById('non-stu');

var firm_div=document.getElementById('firm_div');
var bg1=document.getElementById('bg1');
var bg2=document.getElementById('bg2');

var label1=document.getElementById('label1');
var label2=document.getElementById('label2');
label1.addEventListener('click',show_stu);
label2.addEventListener('click',show_nostu);

non_stu.addEventListener('click',show_nostu);
stu.addEventListener('click',show_stu);

function radio_show1(obj){
	obj.style.backgroundPositionX='0px'; 
}

function radio_show2(obj){
	obj.style.backgroundPositionX='-24px'; 
}

function show_stu(){
	if(stu.checked==true){
		firm_div.style.display='none';
		sel.style.display='block';
		radio_show1(bg1);
		radio_show2(bg2);
	}
}

function show_nostu(){
	if(non_stu.checked==true){
		sel.style.display='none';
		firm_div.style.display='block';
		radio_show1(bg2);
		radio_show2(bg1);
	}
}
