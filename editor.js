// ===================================
// BANO WEBSITE BUILDER EDITOR SYSTEM
// ===================================


let editorMode = false;

let selectedObject = null;

let dragging = false;

let dragOffsetX = 0;

let dragOffsetY = 0;




const editorToggle =
document.getElementById("editorToggle");


const editorPanel =
document.getElementById("editorPanel");




// ===============================
// OPEN / CLOSE EDITOR
// ===============================


editorToggle.onclick = function(){


editorMode = !editorMode;


editorPanel.style.display =
editorMode ? "block" : "none";


activateEditorObjects();


};





// ===============================
// SELECT OBJECT
// ===============================


function selectObject(obj){


if(selectedObject){

selectedObject.classList.remove(
"selected"
);

}



selectedObject = obj;


selectedObject.classList.add(
"selected"
);



updateControls();



}







function activateEditorObjects(){


document
.querySelectorAll(
".editable,.glass"
)
.forEach(obj=>{


obj.onclick=function(e){


if(!editorMode)
return;


e.stopPropagation();


selectObject(this);



};



obj.onmousedown=function(e){


if(!editorMode)
return;



if(e.target.tagName==="INPUT")
return;



selectObject(this);


dragging=true;



dragOffsetX =
e.clientX -
this.offsetLeft;


dragOffsetY =
e.clientY -
this.offsetTop;



};



});



}





// ===============================
// MOVE OBJECTS
// ===============================



document.onmousemove=function(e){


if(
!dragging ||
!selectedObject
)

return;



selectedObject.style.left =

(e.clientX - dragOffsetX)
+"px";



selectedObject.style.top =

(e.clientY - dragOffsetY)
+"px";



};





document.onmouseup=function(){


dragging=false;


};







// ===============================
// RESIZE WIDTH
// ===============================



document
.getElementById("widthSlider")
.oninput=function(){


if(!selectedObject)
return;



selectedObject.style.width =
this.value+"px";



};







// ===============================
// RESIZE HEIGHT
// ===============================


document
.getElementById("heightSlider")
.oninput=function(){


if(!selectedObject)
return;



selectedObject.style.height =
this.value+"px";



};







// ===============================
// TEXT SIZE
// ===============================


document
.getElementById("fontSlider")
.oninput=function(){


if(!selectedObject)
return;



if(
selectedObject.classList.contains("text")
){



selectedObject.style.fontSize =
this.value+"px";


}



};







// ===============================
// OPACITY
// ===============================



document
.getElementById("opacitySlider")
.oninput=function(){


if(!selectedObject)
return;



if(
selectedObject.classList.contains("glass")
){



selectedObject.style.background =

`rgba(255,255,255,${this.value/100})`;



}



};







// ===============================
// BLUR
// ===============================


document
.getElementById("blurSlider")
.oninput=function(){


if(!selectedObject)
return;



selectedObject.style.backdropFilter =

`blur(${this.value}px)`;



};







// ===============================
// BORDER RADIUS
// ===============================


document
.getElementById("radiusSlider")
.oninput=function(){


if(!selectedObject)
return;



selectedObject.style.borderRadius =

this.value+"px";


};







// ===============================
// UPDATE SLIDERS
// ===============================


function updateControls(){


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
window.getComputedStyle(
selectedObject
).fontSize
);



document
.getElementById("fontSlider")
.value=size;



}



}







// ===============================
// DELETE
// ===============================


function deleteSelected(){



if(!selectedObject)
return;



selectedObject.remove();


selectedObject=null;



}







// ===============================
// DUPLICATE
// ===============================


function duplicateSelected(){


if(!selectedObject)
return;



let clone =
selectedObject.cloneNode(true);



clone.style.left =
(selectedObject.offsetLeft+40)
+"px";



clone.style.top =
(selectedObject.offsetTop+40)
+"px";



document
.querySelector(".page.active")
.appendChild(clone);



activateEditorObjects();



}







// ===============================
// ADD TEXT
// ===============================



function addText(){



let text =
document.createElement("h1");



text.innerHTML =
"NEW TEXT";



text.className =
"editable text";



text.style.position =
"absolute";


text.style.left="50%";


text.style.top="50%";



document
.querySelector(".page.active")
.appendChild(text);



activateEditorObjects();



}








// ===============================
// ADD EMOJI
// ===============================



function addEmoji(){



let emoji =
document.createElement("div");



emoji.innerHTML="🔥";



emoji.className =
"editable";



emoji.style.position =
"absolute";


emoji.style.fontSize =
"100px";



emoji.style.left="50%";


emoji.style.top="50%";



document
.querySelector(".page.active")
.appendChild(emoji);



activateEditorObjects();



}








// ===============================
// ADD IMAGE
// ===============================



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



img.style.position =
"absolute";



img.style.width =
"300px";



img.style.left =
"50%";



img.style.top =
"50%";



document
.querySelector(".page.active")
.appendChild(img);



activateEditorObjects();



};



reader.readAsDataURL(
e.target.files[0]
);



};



input.click();



}









// ===============================
// ADD GLASS PANEL
// ===============================



function addGlass(){



let panel =
document.createElement("div");



panel.className =
"glass";



panel.style.position =
"absolute";



panel.style.left =
"40%";



panel.style.top =
"40%";



document
.querySelector(".page.active")
.appendChild(panel);



activateEditorObjects();



}









// ===============================
// KEYBOARD DELETE
// ===============================



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









// ===============================
// START EDITOR
// ===============================


window.addEventListener(
"load",
()=>{


activateEditorObjects();


});
