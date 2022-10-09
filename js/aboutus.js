var box1=document.getElementsByClassName(".box1")
var box2=document.getElementsByClassName(".box2")
var box3=document.getElementsByClassName(".box3")
var box4=document.getElementsByClassName(".box4")
var nav =document.getElementsByClassName("section1")[0]


function changecolor1() {
  nav.style.color="black"
  nav.style.backgroundColor="brown"
}
function changecolor2() {
  nav.style.backgroundColor="darkblue"
}
function changecolor3() {
  nav.style.backgroundColor="green"
}
function changecolor4() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  nav.style.backgroundColor = bgColor;
}