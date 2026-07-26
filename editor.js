// =====================================
// BANO EDITOR SYSTEM V4
// =====================================


let editorMode = false;

let selectedObject = null;

let isDragging = false;

let offsetX = 0;

let offsetY = 0;




const editorToggle =
document.getElementById(
"editorToggle"
);


const editorPanel =
document.getElementById(
"editorPanel"
);




// =====================================
// OPEN EDITOR
// =====================================


editorToggle.onclick=function(){


editorMode = !editorMode;


editorPanel.style.display =
editorMode ? "block":"none";



activateEditorObjects();


};







// =====================================
// ACTIVATE OBJECTS
// =====================================


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



selectObject(this);



isDragging=true;



offsetX =
e.clientX -
obj.offsetLeft;



offsetY =
e.clientY -
obj.offsetTop;



};




});



}









// =====================================
// SELECT
// =====================================


function selectObject(obj){



if(selectedObject){

selectedObject.classList.remove(
"selected"
);

}



selectedObject=obj;


obj.classList.add(
"selected"
);



updateControls();



}









// =====================================
// MOVE OBJECT
// =====================================


document.onmousemove=function(e){



if(
!isDragging ||
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



};





document.onmouseup=function(){



if(isDragging){


saveProject();


}



isDragging=false;


};









// =====================================
// DELETE
// =====================================


function deleteSelected(){



if(!selectedObject)
return;



selectedObject.remove();


selectedObject=null;


saveProject();



}









// =====================================
// DUPLICATE
// =====================================


function duplicateSelected(){



if(!selectedObject)
return;



let copy =
selectedObject.cloneNode(true);



copy.style.left =

(selectedObject.offsetLeft+50)
+"px";



copy.style.top =

(selectedObject.offsetTop+50)
+"px";



document
.querySelector(".page.active .hero")
.appendChild(copy);



activateEditorObjects();


saveProject();


}








// =====================================
// ADD TEXT
// =====================================


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
.querySelector(".page.active .hero")
.appendChild(text);



activateEditorObjects();


saveProject();



}









// =====================================
// ADD EMOJI
// =====================================


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
.querySelector(".page.active .hero")
.appendChild(emoji);



activateEditorObjects();


saveProject();


}









// =====================================
// ADD IMAGE
// =====================================


function addImage(){


let input =
document.createElement(
"input"
);



input.type="file";


input.accept="image/*";



input.onchange=function(e){



let reader =
new FileReader();




reader.onload=function(){



let img =
document.createElement(
"img"
);



img.src =
reader.result;



img.className =
"editable imageObject";



img.style.position =
"absolute";



img.style.width =
"300px";



img.style.left =
"50%";



img.style.top =
"50%";



document
.querySelector(".page.active .hero")
.appendChild(img);



activateEditorObjects();


saveProject();



};



reader.readAsDataURL(
e.target.files[0]
);



};



input.click();


}









// =====================================
// ADD GLASS PANEL
// =====================================


function addGlassPanel(){



let panel =
document.createElement(
"div"
);



panel.className =
"glass";



panel.style.position =
"absolute";



panel.style.left =
"40%";



panel.style.top =
"40%";



document
.querySelector(".page.active .hero")
.appendChild(panel);



activateEditorObjects();


saveProject();


}









// =====================================
// WIDTH
// =====================================


document
.getElementById(
"widthControl"
)
.oninput=function(){



if(!selectedObject)
return;



selectedObject.style.width =
this.value+"px";



saveProject();


};








// =====================================
// HEIGHT
// =====================================


document
.getElementById(
"heightControl"
)
.oninput=function(){



if(!selectedObject)
return;



selectedObject.style.height =
this.value+"px";



saveProject();


};









// =====================================
// FONT SIZE
// =====================================


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



saveProject();



}



};









// =====================================
// GLASS OPACITY
// =====================================


document
.getElementById(
"opacityControl"
)
.oninput=function(){



if(!selectedObject)
return;



selectedObject.style.background =

`rgba(255,255,255,${this.value/100})`;



saveProject();



};









// =====================================
// GLASS BLUR
// =====================================


document
.getElementById(
"blurControl"
)
.oninput=function(){



if(!selectedObject)
return;



selectedObject.style.backdropFilter =

`blur(${this.value}px)`;



saveProject();



};









// =====================================
// RADIUS
// =====================================


document
.getElementById(
"radiusControl"
)
.oninput=function(){



if(!selectedObject)
return;



selectedObject.style.borderRadius =
this.value+"px";



saveProject();


};









// =====================================
// UPDATE CONTROLS
// =====================================


function updateControls(){


if(!selectedObject)
return;



let width =
document.getElementById(
"widthControl"
);



let height =
document.getElementById(
"heightControl"
);



width.value =
selectedObject.offsetWidth;



height.value =
selectedObject.offsetHeight;



}









// =====================================
// KEYBOARD DELETE
// =====================================


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









// =====================================
// START
// =====================================


window.addEventListener(
"load",
()=>{


activateEditorObjects();


});
