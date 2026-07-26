// ===========================
// BANO ANIMATION SYSTEM
// ===========================



function bounceObject(){


if(!selectedObject){

alert("Select an object first");

return;

}



removeAnimations();


selectedObject.classList.add(
"bounce"
);


}





function floatObject(){


if(!selectedObject){

alert("Select an object first");

return;

}



removeAnimations();



selectedObject.classList.add(
"float"
);


}





function pulseObject(){


if(!selectedObject){

alert("Select an object first");

return;

}



removeAnimations();



selectedObject.classList.add(
"pulse"
);


}





function stopAnimation(){


if(!selectedObject)
return;



removeAnimations();


}





function removeAnimations(){


if(!selectedObject)
return;



selectedObject.classList.remove(
"bounce",
"float",
"pulse"
);



}
