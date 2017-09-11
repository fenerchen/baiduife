var clickme = document.getElementById('clickme');
var but = document.getElementById('but');
var screen = document.getElementById('screen');
var supernatant = document.getElementById('supernatant');

var computedStyle = document.defaultView.getComputedStyle(supernatant, null); //新版本IE11支持，否则用	supernatant.currentStyle
var super_width = computedStyle.width.slice(0, -2);
var super_height = computedStyle.height.slice(0, -2);

var docHeight = document.documentElement.clientHeight;
var docWidth = document.documentElement.clientWidth;

var left_;
var top_;

clickme.addEventListener('click', show);
window.addEventListener('resize',resize);
but.addEventListener('click',unshow);

function show() {

	left_ = (docWidth - super_width) / 2;
	top_ = (docHeight - super_height) / 2;

	supernatant.style.left = left_ + 'px';
	supernatant.style.top = top_ + 'px';
	supernatant.style.display = 'block';

	screen.style.width = docWidth + 'px';
	screen.style.height = docWidth + 'px';
	screen.style.display = 'block';

}

function unshow(){
	supernatant.style.display = 'none';
	screen.style.display = 'none';
}
 function resize() {
 		 docHeight = document.documentElement.clientHeight;
 docWidth = document.documentElement.clientWidth;

		left_ = (docWidth - super_width) / 2;
		top_ = (docHeight - super_height) / 2;
		supernatant.style.left = left_ + 'px';
		supernatant.style.top = top_ + 'px';

		screen.style.width = docWidth + 'px';
		screen.style.height = docWidth + 'px';
	
}