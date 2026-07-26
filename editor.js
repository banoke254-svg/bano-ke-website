let editorMode = false;

let selectedObject = null;

let resizeHandle = null;



const editorToggle =
document.getElementById("editorToggle");


const editorPanel =
document.getElementById("editorPanel");





editorToggle.onclick = function(){


editorMode = !editorMode;


editorPanel.style.display =
editorMode ? "block" : "none";



if(editorMode){

enableObjects();

}

else{

disableObjects();

}



};







function enableObjects(){


document
.querySelectorAll(".object")
.forEach(obj=>{


obj.onclick=function(e){

e.stopPropagation();

selectObject(this);


};



dragObject(obj);



});



}








function disableObjects(){


document
.querySelectorAll(".object")
.forEach(obj=>{


obj.classList.remove(
"selected"
);


obj.onclick=null;


});


}





function selectObject(obj){



if(selectedObject)

selectedObject.classList.remove(
"selected"
);



selectedObject=obj;


obj.classList.add(
"selected"
);



addResizeHandle(obj);



}





function addResizeHandle(obj){


removeResizeHandle();



resizeHandle =
document.createElement(
"div"
);



resizeHandle.className=
"resizeHandle";



obj.appendChild(
resizeHandle
);



resizeHandle.onmousedown =
resizeStart;



}





function removeResizeHandle(){


if(resizeHandle){

resizeHandle.remove();

resizeHandle=null;

}


}







function dragObject(obj){


obj.onmousedown=function(e){


if(!editorMode)return;


if(e.target.className==="resizeHandle")
return;



let startX =
e.clientX - obj.offsetLeft;


let startY =
e.clientY - obj.offsetTop;




document.onmousemove=function(e){



obj.style.left =
(e.clientX-startX)+"px";



obj.style.top =
(e.clientY-startY)+"px";



};




document.onmouseup=function(){


document.onmousemove=null;


};



};



}







function resizeStart(e){


e.stopPropagation();



let obj =
selectedObject;



let startWidth =
obj.offsetWidth;


let startHeight =
obj.offsetHeight;



let startX =
e.clientX;


let startY =
e.clientY;





document.onmousemove=function(e){


let newWidth =
startWidth +
(e.clientX-startX);



let newHeight =
startHeight +
(e.clientY-startY);



obj.style.width =
newWidth+"px";



obj.style.height =
newHeight+"px";



};





document.onmouseup=function(){


document.onmousemove=null;


};



}









// DELETE

function deleteSelected(){


if(selectedObject){


selectedObject.remove();


selectedObject=null;


}


}








// DUPLICATE


function duplicateSelected(){


if(!selectedObject)return;



let clone =
selectedObject.cloneNode(true);



clone.style.left =
(selectedObject.offsetLeft+40)+"px";


clone.style.top =
(selectedObject.offsetTop+40)+"px";



clone.classList.add(
"object"
);



document
.querySelector(".page.active")
.appendChild(clone);



dragObject(clone);



}









// ADD TEXT


function addText(){


let text =
document.createElement(
"div"
);



text.innerHTML=
"NEW TEXT";



text.className=
"object textObject";



text.style.position=
"absolute";


text.style.left="50%";


text.style.top="50%";



document
.querySelector(".page.active")
.appendChild(text);



dragObject(text);



}










// ADD EMOJI


function addEmoji(){


let emoji =
document.createElement(
"div"
);



emoji.innerHTML="🔥";


emoji.className=
"object";



emoji.style.position=
"absolute";


emoji.style.fontSize=
"100px";


emoji.style.left="50%";


emoji.style.top="50%";



document
.querySelector(".page.active")
.appendChild(emoji);



dragObject(emoji);


}









// IMAGE UPLOAD


function addImage(){



let input =
document.createElement(
"input"
);


input.type="file";


input.accept="image/*";



input.onchange=function(e){


let file =
e.target.files[0];


let reader =
new FileReader();



reader.onload=function(){


let img =
document.createElement(
"img"
);



img.src=
reader.result;



img.className=
"object";



img.style.width=
"300px";


img.style.position=
"absolute";


img.style.left="40%";


img.style.top="40%";



document
.querySelector(".page.active")
.appendChild(img);



dragObject(img);



};



reader.readAsDataURL(file);



};



input.click();


}









// GLASS PANEL


function addGlassPanel(){


let panel =
document.createElement(
"div"
);



panel.className=
"glassPanel object";



panel.style.left="40%";


panel.style.top="40%";



document
.querySelector(".page.active")
.appendChild(panel);



dragObject(panel);



}








// GLASS CONTROLS



document
.getElementById("opacityControl")
.oninput=function(){


if(selectedObject)

selectedObject.style.background =
`rgba(255,255,255,${this.value/100})`;


};






document
.getElementById("blurControl")
.oninput=function(){


if(selectedObject)

selectedObject.style.backdropFilter =
`blur(${this.value}px)`;


};





document
.getElementById("radiusControl")
.oninput=function(){


if(selectedObject)

selectedObject.style.borderRadius =
this.value+"px";


};









// SIZE CONTROLS


document
.getElementById("widthControl")
.oninput=function(){


if(selectedObject)

selectedObject.style.width =
this.value+"px";


};






document
.getElementById("heightControl")
.oninput=function(){


if(selectedObject)

selectedObject.style.height =
this.value+"px";


};








// SAVE


function saveWebsite(){


localStorage.setItem(
"banoWebsite",
document.body.innerHTML
);



alert(
"Website Saved"
);


}
