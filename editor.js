// ======================================
// BANO BUILDER EDITOR SYSTEM V5
// ======================================


let editorMode = false;

let selectedObject = null;

let dragging = false;

let offsetX = 0;

let offsetY = 0;

let projectChanged = false;





const editorToggle =
document.getElementById(
"editorToggle"
);



const editorPanel =
document.getElementById(
"editorPanel"
);







// ======================================
// EDITOR OPEN
// ======================================


editorToggle.onclick=function(){


editorMode = !editorMode;


editorPanel.style.display =
editorMode ? "block" : "none";



activateEditorObjects();



};









// ======================================
// CHANGE TRACKER
// ======================================


function markChanged(){


projectChanged = true;



let status =
document.getElementById(
"saveStatus"
);



if(status){

status.innerHTML =
"● Unsaved changes";


}


}









// ======================================
// SELECT OBJECT
// ======================================


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









// ======================================
// ACTIVATE OBJECTS
// ======================================


function activateEditorObjects(){



document
.querySelectorAll(
".editable,.glass"
)
.forEach(obj=>{


obj.onmousedown=function(e){



if(!editorMode)
return;



selectObject(obj);



dragging = true;



offsetX =
e.clientX -
obj.offsetLeft;



offsetY =
e.clientY -
obj.offsetTop;



e.preventDefault();



};



});



}









// ======================================
// DRAGGING
// ======================================


document.onmousemove=function(e){



if(
!dragging ||
!selectedObject
)

return;



selectedObject.style.left =

(
e.clientX-offsetX
)+"px";




selectedObject.style.top =

(
e.clientY-offsetY
)+"px";




markChanged();



};







document.onmouseup=function(){


dragging=false;


};









// ======================================
// DELETE
// ======================================


function deleteSelected(){


if(!selectedObject)
return;



selectedObject.remove();



selectedObject=null;



markChanged();



}









// ======================================
// DUPLICATE
// ======================================


function duplicateSelected(){


if(!selectedObject)
return;



let clone =
selectedObject.cloneNode(true);



clone.style.left =

(
selectedObject.offsetLeft+50
)+"px";



clone.style.top =

(
selectedObject.offsetTop+50
)+"px";




document
.querySelector(
".page.active .hero"
)
.appendChild(clone);




activateEditorObjects();



markChanged();



}









// ======================================
// ADD TEXT
// ======================================


function addText(){



let text =
document.createElement(
"h1"
);



text.innerHTML =
"NEW TEXT";



text.className =
"editable textObject";



text.style.position =
"absolute";



text.style.left =
"40%";



text.style.top =
"40%";



document
.querySelector(
".page.active .hero"
)
.appendChild(text);



activateEditorObjects();



markChanged();



}









// ======================================
// ADD EMOJI
// ======================================


function addEmoji(){



let emoji =
document.createElement(
"div"
);



emoji.innerHTML =
"🔥";



emoji.className =
"editable";



emoji.style.position =
"absolute";



emoji.style.fontSize =
"100px";



emoji.style.left =
"50%";



emoji.style.top =
"50%";



document
.querySelector(
".page.active .hero"
)
.appendChild(emoji);



activateEditorObjects();



markChanged();



}









// ======================================
// ADD IMAGE
// ======================================


function addImage(){



let input =
document.createElement(
"input"
);



input.type =
"file";



input.accept =
"image/*";





input.onchange=function(e){



let file =
e.target.files[0];



if(!file)
return;



let reader =
new FileReader();





reader.onload=function(event){



let img =
document.createElement(
"img"
);



img.src =
event.target.result;



img.className =
"editable imageObject";



img.style.position =
"absolute";



img.style.width =
"300px";



img.style.height =
"auto";



img.style.left =
"50%";



img.style.top =
"50%";




document
.querySelector(
".page.active .hero"
)
.appendChild(img);




activateEditorObjects();



selectObject(img);



markChanged();



};




reader.readAsDataURL(file);



};



input.click();



}









// ======================================
// ADD GLASS PANEL
// ======================================


function addGlassPanel(){



let panel =
document.createElement(
"div"
);



panel.className =
"editable glass";



panel.style.position =
"absolute";



panel.style.width =
"300px";



panel.style.height =
"200px";



panel.style.left =
"40%";



panel.style.top =
"40%";



panel.style.background =
"rgba(255,255,255,0.2)";



panel.style.backdropFilter =
"blur(20px)";



panel.style.borderRadius =
"30px";




document
.querySelector(
".page.active .hero"
)
.appendChild(panel);




activateEditorObjects();



selectObject(panel);



markChanged();



}









// ======================================
// SIZE CONTROLS
// ======================================


document
.getElementById(
"widthControl"
)
.oninput=function(){



if(!selectedObject)
return;



selectedObject.style.width =
this.value+"px";



markChanged();



};









document
.getElementById(
"heightControl"
)
.oninput=function(){



if(!selectedObject)
return;



selectedObject.style.height =
this.value+"px";



markChanged();



};









// ======================================
// TEXT SIZE
// ======================================


document
.getElementById(
"fontControl"
)
.oninput=function(){



if(
selectedObject &&
selectedObject.classList.contains(
"textObject"
)

){



selectedObject.style.fontSize =
this.value+"px";



markChanged();



}



};









// ======================================
// GLASS CONTROLS
// ======================================


document
.getElementById(
"opacityControl"
)
.oninput=function(){



if(!selectedObject)
return;



selectedObject.style.background =

`rgba(255,255,255,${this.value/100})`;



markChanged();



};









document
.getElementById(
"blurControl"
)
.oninput=function(){



if(!selectedObject)
return;



selectedObject.style.backdropFilter =

`blur(${this.value}px)`;



markChanged();



};









document
.getElementById(
"radiusControl"
)
.oninput=function(){



if(!selectedObject)
return;



selectedObject.style.borderRadius =

this.value+"px";



markChanged();



};









// ======================================
// UPDATE CONTROLS
// ======================================


function updateControls(){



if(!selectedObject)
return;




document.getElementById(
"widthControl"
).value =
selectedObject.offsetWidth;




document.getElementById(
"heightControl"
).value =
selectedObject.offsetHeight;



}









// ======================================
// KEY DELETE
// ======================================


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








// ======================================
// START
// ======================================


window.addEventListener(
"load",
()=>{


activateEditorObjects();



});
