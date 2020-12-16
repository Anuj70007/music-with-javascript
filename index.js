var len=document.querySelectorAll(".drum").length;

for(var i=0;i<len;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function(){
  var a= this.innerHTML;
  make(a);
  animation(a);
});
}

document.addEventListener("keypress" , function(event){
  make(event.key);
  animation(event.key);
});


function make(key)
{
  switch(key){

    case "w":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "a":
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "s":
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "d":
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case "j":
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "k":
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "l":
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
}
}

function animation(cur)
{
  var an=document.querySelector("."+ cur);
  an.classList.add("pressed");

  setTimeout(function(){                   // for animation first we add pressed classthan remove so that it look like animation 
    an.classList.remove("pressed");
  },100);
}
