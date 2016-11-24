var muneinput=document.getElementById('muneinput');
var ofo=document.getElementById('fo');
var oi_hd=document.getElementById('i_hd');
var oin1=document.getElementById('in1');
var oin2=document.getElementById('in2');
ofo.onclick=function ss () {
	oi_hd.style.display='block';
	oin1.style.borderColor="red";
	oin2.style.borderColor="red";
}
oi_hd.onmouseleave=function(){
	oi_hd.style.display='none';
	oin1.style.borderColor="#E0E0E0";
	oin2.style.borderColor="#E0E0E0";
}


var mvphoto=document.getElementById('mvphoto')
var banner=document.getElementById('banner');
var oul=document.getElementById('oul');
var oli=oul.getElementsByTagName('li');
var input=btn.getElementsByTagName('input');
var pre=document.getElementById('pre');
var next=document.getElementById('next');
var s=-oli[0].offsetWidth;
var timer;
var j=0;
oul.style.width=oli[0].offsetWidth*oli.length+'px';
fa(-oli[0].offsetWidth);
pre.onclick=function(){
	t(oli[0].offsetWidth);
}
next.onclick=function(){
	t(-oli[0].offsetWidth);
}
mvphoto.onmouseover=function(){
	clearInterval(timer);
}
mvphoto.onmouseout=function(){
	timer=setInterval(t,2000);
}
input[0].checked=true;
for(var i=0;i<input.length;i++){
	input[i].index=i;
	input[i].onclick=function(){
		oul.style.left=-oli[0].offsetWidth*(this.index+1)+'px';
	}
}
function fa(v){
	clearInterval(timer);
	timer=setInterval(t=function(){
		j++;
		if(j>4){j=0;}
		input[j].checked=true;
		s+=v;
		if(s>=0){s=-oli[0].offsetWidth*(oli.length-2)}
		if(s<=-oli[0].offsetWidth*(oli.length-2)){s=0;}
		oul.style.left=s+'px';
	}, 2000);
}	