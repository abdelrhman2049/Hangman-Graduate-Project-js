var welcome=document.getElementById("welcome")
var go=document.getElementById("go")
var awelcome=prompt("Please Enter Your Name")
welcome.innerHTML= 'welcome'+ " " + awelcome ;
welcome.style.position='absolute'
go.style.position = 'absolute'
function myMove() {
    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
      if (pos == 700) {
        clearInterval(id);
      } else {
        pos+=2; 
        welcome.style.left = pos + "px"; 
        go.style.right = pos+130 +'px'
      }
    }
  }




var box1=document.getElementsByClassName(".box1")
var box2=document.getElementsByClassName(".box2")
var box3=document.getElementsByClassName(".box3")
var box4=document.getElementsByClassName(".box4")
var nav =document.querySelector("nav")


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




// window.onload = displayClock();

// function displayClock(){
//   var display = new Date().toLocaleTimeString();
//   document.getElementById("clock").innerHTML = display;
//   setTimeout(displayClock, 1000); 
// }
// let a;
// let time;
// setInterval(() => {
//   a = new Date();
//   time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
//   document.getElementById('clock').innerHTML = time;
// }, 1000);
function myClock() {         
  setTimeout(function() {   
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time; 
    myClock();             
  }, 1000)
}
myClock();  