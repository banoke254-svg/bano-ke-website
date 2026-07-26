// =================================
// BANO HERO MARBLE TRANSITION
// =================================


let heroMarble = null;



let marbleImage =
"assets/marble.png";





function setHeroMarble(){

heroMarble =
document.querySelector(
".hero-marble"
);


}







function animateHeroMarble(direction){



if(!heroMarble)
return;



let clone =
heroMarble.cloneNode(true);



document.body.appendChild(
clone
);



let start =
heroMarble.getBoundingClientRect();



clone.style.position =
"fixed";



clone.style.left =
start.left+"px";


clone.style.top =
start.top+"px";


clone.style.width =
start.width+"px";



clone.style.zIndex =
"99999";



clone.style.pointerEvents =
"none";





// TARGET POSITION


let endX;

let endY;



if(direction==="next"){


endX =
window.innerWidth*0.75;


endY =
window.innerHeight*0.25;


}

else{


endX =
window.innerWidth*0.2;


endY =
window.innerHeight*0.5;


}






let animation =

clone.animate(

[

{


transform:
"translate(0,0) rotate(0deg) scale(1)"

},



{


transform:
`
translate(
${endX-start.left}px,
${endY-start.top}px
)

rotate(720deg)

scale(1.3)

`

}


],

{


duration:1200,

easing:
"cubic-bezier(.7,0,.2,1)"

}

);






animation.onfinish=()=>{


clone.remove();


};


}
