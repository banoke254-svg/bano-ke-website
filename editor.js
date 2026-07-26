let editorMode = false;

let selectedObject = null;

let startX = 0;
let startY = 0;

let resizing = false;



const editorToggle =
document.getElementById("editorToggle");


const editorPanel =
document.getElementById("editorPanel");





/* OPEN EDITOR */


editorToggle.onclick = function(){

editorMode = !editorMode;


editorPanel.style.display =
editorMode ? "block" : "none";


};






/* SELECT OBJECT */


document.addEventListener(
"click",
function(e){


if(!editorMode)
return;



if(
e.target.classList.contains("editable")
||
e.target.classList.contains("glass")
){


selectObject(e.target);


}



});








function selectObject(obj){


if(selectedObject)

selectedObject.classList.remove(
"selected"
);



selectedObject=obj;


obj.classList.add(
"selected"
);



updateSliders();



}





/* DRAG SYSTEM */


document.addEventListener(
"mousedown",
function(e){



if(!editorMode)
return;



if(
!e.target.classList.contains("editable")
&&
!e.target.classList.contains("glass")
)

return;



selectedObject=e.target;



startX =
e.clientX -
selectedObject.offsetLeft;


startY =
e.clientY -
selectedObject.offsetTop;



document.onmousemove=function(e){



selectedObject.style.left =

(e.clientX-startX)+"px";



selectedObject.style.top =

(e.clientY-startY)+"px";



};



document.onmouseup=function(){


document.onmousemove=null;


};



});







/* RESIZE CONTROLS */



document
.getElementById("widthSlider")
.oninput=function(){


if(!selectedObject)
return;



selectedObject.style.width =
this.value+"px";



};






document
.getElementById("heightSlider")
.oninput=function(){



if(!selectedObject)
return;



selectedObject.style.height =
this.value+"px";


};






/* TEXT SIZE */


document
.getElementById("fontSlider")
.oninput=function(){



if(
selectedObject &&
selectedObject.classList.contains("text")
){


selectedObject.style.fontSize =
this.value+"px";


}


};









/* GLASS OPACITY */



document
.getElementById("opacitySlider")
.oninput=function(){


if(!selectedObject)
return;



selectedObject.style.background =

`rgba(255,255,255,${this.value/100})`;



};







/* BLUR */


document
.getElementById("blurSlider")
.oninput=function(){


if(!selectedObject)
return;



selectedObject.style.backdropFilter =

`blur(${this.value}px)`;


};






/* ROUND CORNERS */



document
.getElementById("radiusSlider")
.oninput=function(){


if(!selectedObject)
return;



selectedObject.style.borderRadius =

this.value+"px";


};








/* UPDATE CONTROLS */


function updateSliders(){


if(!selectedObject)
return;



document
.getElementById("widthSlider")
.value =

selectedObject.offsetWidth;



document
.getElementById("heightSlider")
.value =

selectedObject.offsetHeight;



if(
selectedObject.classList.contains("text")
){


let size =
parseInt(
window.getComputedStyle(selectedObject)
.fontSize
);


document
.getElementById("fontSlider")
.value=size;


}



}









/* DELETE */


function deleteSelected(){



if(selectedObject){


selectedObject.remove();


selectedObject=null;


}



}








/* DUPLICATE */



function duplicateSelected(){


if(!selectedObject)
return;



let copy =
selectedObject.cloneNode(true);



copy.style.left =

(selectedObject.offsetLeft+50)+"px";



copy.style.top =

(selectedObject.offsetTop+50)+"px";



document
.querySelector(".page.active")
.appendChild(copy);



}









/* ADD TEXT */



function addText(){



let text =
document.createElement("h1");



text.innerHTML =
"NEW TEXT";



text.className =
"editable text";



text.style.position="absolute";

text.style.left="50%";

text.style.top="50%";



document
.querySelector(".page.active")
.appendChild(text);



}








/* ADD EMOJI */



function addEmoji(){


let emoji =
document.createElement("div");



emoji.innerHTML="🔥";



emoji.className="editable";


emoji.style.position="absolute";


emoji.style.fontSize="100px";


emoji.style.left="50%";


emoji.style.top="50%";



document
.querySelector(".page.active")
.appendChild(emoji);



}









/* ADD IMAGE */



function addImage(){


let input =
document.createElement("input");



input.type="file";


input.accept="image/*";



input.onchange=function(e){



let reader =
new FileReader();



reader.onload=function(){


let img =
document.createElement("img");



img.src =
reader.result;



img.className =
"editable image";



img.style.position="absolute";



img.style.width="300px";


img.style.left="50%";


img.style.top="50%";



document
.querySelector(".page.active")
.appendChild(img);



};



reader.readAsDataURL(
e.target.files[0]
);



};



input.click();



}









/* ADD GLASS PANEL */



function addGlass(){



let panel =
document.createElement("div");



panel.className =
"glass";



panel.style.left="40%";


panel.style.top="40%";



document
.querySelector(".page.active")
.appendChild(panel);



}









/* KEY DELETE */



document.addEventListener(
"keydown",
function(e){



if(
e.key==="Delete"
&&
selectedObject
){


deleteSelected();


}



});
