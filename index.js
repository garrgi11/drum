var kp;
for(i=0;i<=8;i++){
document.getElementsByClassName("drum")[i].addEventListener("click", sound);
}
    function sound(kp){
    var ihtxml=this.innerHTML;
    msound(ihtxml);
    }

function msound(kd){
    switch(kd){
    case "w":var tom1=new Audio("tom-1.mp3");
    tom1.play();
    break;
    case "a":var tom1=new Audio("tom-2.mp3");
    tom1.play();
    break;
    case "s":var tom1=new Audio("tom-3.mp3");
    tom1.play();
    break;
    case "d":var tom1=new Audio("tom-4.mp3");
    tom1.play();
    break;
    case "j":var tom1=new Audio("snare.mp3");
    tom1.play();
    break;
    case "k":var tom1=new Audio("crash.mp3");
    tom1.play();
    break;
    case "l":var tom1=new Audio("kick-bass.mp3");
    tom1.play();
    break;
    case "gargi":var tom1=new Audio("Meow.m4a");
    tom1.play();
    break;
    case "gan":var tom1=new Audio("gun.mp3");
    tom1.play();
    break;
}
}
document.addEventListener("keydown",ksound);
function ksound(event){
    msound(event.key)
    
    if(event.key==="z")
        msound("gan");
}
