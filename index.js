


var numDrumButtons = document.querySelectorAll(".drum").length;
var keyDrum = ["a", "s", "d", "f", "j", "k", "l"];
var soundDrum = ["tom-1", "tom-2", "tom-3", "tom-4", "crash", "snare", "kick-bass"]
// alert("hi " + keyDrum[3]);

for (var i = 0; i < numDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var audio = new Audio("sounds\/"+soundDrum[keyDrum.indexOf(this.innerHTML)]+".mp3");
    audio.play();
    buttonAnimation((this.innerHTML));
  });
}

document.addEventListener("keydown", function (event){
  var audio = new Audio("sounds\/"+soundDrum[keyDrum.indexOf(event.key)]+".mp3");
  audio.play();
  buttonAnimation(event.key);
});


function buttonAnimation(key){
  var activeButton = document.querySelector("."+key);
  debugger;
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
    console.log(activeButton);
  },100);
}
