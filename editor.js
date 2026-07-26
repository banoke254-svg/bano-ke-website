let editorMode=false;

let selectedObject=null;

let dragging=false;

let offsetX=0;
let offsetY=0;



const editorToggle=document.getElementById("editorToggle");

const editorPanel=document.getElementById("editorPanel");



editorToggle.onclick=function(){

editorMode=!editorMode;

editorPanel.style.display=
editorMode ? "block":"none";

activateEditorObjects();

};





function activateEditorObjects(){


document.querySelectorAll(
".editable,.glass"
)
.forEach(obj=>{


obj.onmousedown=function(e){


if(!editorMode)return;


selectObject(obj);


dragging=true;


offsetX=
e.clientX-obj.offsetLeft;


offsetY=
e.clientY-obj.offsetTop;



e.preventDefault();


};



});



}






function selectObject(obj){


if(selectedObject)

selectedObject.classList.remove(
"selected"
);



selectedObject=obj;


selectedObject.classList.add(
"selected"
);



updateControls();


}






document.onmousemove=function(e){


if(!dragging || !selectedObject)
return;



selectedObject.style.left=
(e.clientX-offsetX)+"px";



selectedObject.style.top=
(e.clientY-offsetY)+"px";



};





document.onmouseup=function(){


if(dragging){

saveProject();

}


dragging=false;


};










function deleteSelected(){


if(selectedObject){


selectedObject.remove();


selectedObject=null;


saveProject();


}



}









function addText(){


let t=document.createElement("h1");


t.innerHTML="NEW TEXT";


t.className="editable textObject";


t.style.position="absolute";


t.style.left="40%";


t.style.top="40%";


document.querySelector(
".page.active .hero"
)
.appendChild(t);



activateEditorObjects();



}









function addGlassPanel(){


let panel=document.createElement("div");


panel.className="editable glass";


panel.style.position="absolute";


panel.style.width="300px";


panel.style.height="200px";


panel.style.left="40%";


panel.style.top="40%";



document.querySelector(
".page.active .hero"
)
.appendChild(panel);



activateEditorObjects();



}









document.getElementById(
"widthControl"
).oninput=function(){


if(!selectedObject)return;


selectedObject.style.width=
this.value+"px";


};







document.getElementById(
"heightControl"
).oninput=function(){


if(!selectedObject)return;


selectedObject.style.height=
this.value+"px";


};









document.getElementById(
"fontControl"
).oninput=function(){


if(
selectedObject &&
selectedObject.classList.contains(
"textObject"
)
){


selectedObject.style.fontSize=
this.value+"px";


}



};










document.getElementById(
"opacityControl"
).oninput=function(){


if(!selectedObject)return;



selectedObject.style.background=
`rgba(255,255,255,${this.value/100})`;



};










document.getElementById(
"blurControl"
).oninput=function(){


if(!selectedObject)return;


selectedObject.style.backdropFilter=
`blur(${this.value}px)`;



};










document.getElementById(
"radiusControl"
).oninput=function(){


if(!selectedObject)return;


selectedObject.style.borderRadius=
this.value+"px";



};










function updateControls(){


if(!selectedObject)return;


document.getElementById(
"widthControl"
).value=
selectedObject.offsetWidth;



document.getElementById(
"heightControl"
).value=
selectedObject.offsetHeight;



}





window.addEventListener(
"load",
()=>{


activateEditorObjects();


});
