function addBounce(){


if(selectedObject){


selectedObject.classList.add(
"bounce"
);


}


}




function removeAnimation(){


if(selectedObject){


selectedObject.classList.remove(
"bounce"
);


selectedObject.classList.remove(
"float"
);


}



}
