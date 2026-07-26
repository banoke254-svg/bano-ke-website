// ======================================
// BANO MARBLE MORPH PAGE TRANSITION V2
// ======================================


function animateHeroMarble(direction){



let currentMarble =
document.querySelector(
".page.active .hero-marble"
);



if(!currentMarble){

console.log("No hero marble found");

return;

}




// GET CURRENT POSITION

let start =
currentMarble.getBoundingClientRect();




// CREATE FLYING MARBLE


let flying =
currentMarble.cloneNode(true);



document.body.appendChild(
flying
);



flying.className =
"flying-marble";



flying.style.position="fixed";


flying.style.left =
start.left+"px";


flying.style.top =
start.top+"px";


flying.style.width =
start.width+"px";


flying.style.height =
start.height+"px";


flying.style.zIndex="999999";


flying.style.pointerEvents="none";







// CENTER POINT


let centerX =
(window.innerWidth/2)
-
(start.width/2);



let centerY =
(window.innerHeight/2)
-
(start.height/2);








// FINAL POSITION


let finalX;


let finalY;



if(direction==="next"){


finalX =
80;



finalY =
80;



}

else{


finalX =
window.innerWidth -
250;



finalY =
window.innerHeight -
250;



}







let animation = flying.animate(

[


{


left:start.left+"px",

top:start.top+"px",

transform:
"scale(1) rotate(0deg)",

filter:
"brightness(1)"

},





{


left:centerX+"px",

top:centerY+"px",

transform:
"scale(1.8) rotate(360deg)",

filter:
"brightness(2)"

},





{


left:finalX+"px",

top:finalY+"px",

transform:
"scale(.8) rotate(720deg)",

filter:
"brightness(1)"

}



],



{


duration:1800,


easing:
"cubic-bezier(.65,0,.35,1)"

}


);






animation.onfinish=function(){


flying.remove();


};



}
