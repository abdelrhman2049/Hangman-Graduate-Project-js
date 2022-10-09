var box1 = document.getElementsByClassName(".box1");
var box2 = document.getElementsByClassName(".box2");
var box3 = document.getElementsByClassName(".box3");
var box4 = document.getElementsByClassName(".box4");
var nav = document.querySelector("nav");

function changecolor1() {
  nav.style.color = "black";
  nav.style.backgroundColor = "brown";
}
function changecolor2() {
  nav.style.backgroundColor = "darkblue";
}
function changecolor3() {
  nav.style.backgroundColor = "green";
}
function changecolor4() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  nav.style.backgroundColor = bgColor;
}

var imgchange = document.getElementById("photochange");
var sec = document.getElementsByClassName(".section3");

var allimg = [
  "beautiful-shot-lake-forest-during-sunny-day.jpg",
  "closeup-smiling-woman-making-frame-gesture.jpg",
  "female-abu-simbel-temple-southern-egypt-lake-nasser.jpg",
  "pensee-royal-azur-tourist-resort-pools.jpg",
  "small-towns-ancient-temples-navigating-nile-river-aswan-city-egypt.jpg","beautiful-shot-lake-forest-during-sunny-day.jpg",
  "closeup-smiling-woman-making-frame-gesture.jpg",
  "female-abu-simbel-temple-southern-egypt-lake-nasser.jpg",
  "pensee-royal-azur-tourist-resort-pools.jpg",
  "small-towns-ancient-temples-navigating-nile-river-aswan-city-egypt.jpg",
];
const section4=document.getElementById("section4")
for ( item of allimg) {
  section4.innerHTML+=`  <img class="img1" onclick="changephoto(this)" src=" ./img/${item}" alt="">`
}

function changephoto(obj) {
  let x =obj.getAttribute("src");
  imgchange.setAttribute("src",x);
  
}

