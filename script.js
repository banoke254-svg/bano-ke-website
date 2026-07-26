let editor=false;

let selected=null;



const editorButton=
document.getElementById("editorButton");


const tools=
document.getElementById("editorTools");





editorButton.onclick=function(){

editor=!editor;


tools.style.display =
editor ? "block":"none";


}





document.addEventListener(
"click",
function(e){


if(!editor)return;



if(
e.target.classList.contains("editable") ||
e.target.classList.contains("glassObject")
){


selectObject(e.target);


}


});





function selectObject(obj){


if(selected)

selected.classList.remove("selected");



selected=obj;


selected.classList.add("selected");


}







document.addEventListener(
"keydown",
function(e){


if(
e.key==="Delete" &&
selected
){

selected.remove();

selected=null;

}



});









function dragObject(obj){


let startX;

let startY;


obj.onmousedown=function(e){


if(!editor)return;


startX=e.clientX-obj.offsetLeft;

startY=e.clientY-obj.offsetTop;



document.onmousemove=function(e){


obj.style.position="absolute";


obj.style.left=
e.clientX-startX+"px";


obj.style.top=
e.clientY-startY+"px";


}


document.onmouseup=function(){

document.onmousemove=null;

}



}


}





function activateAll(){


document
.querySelectorAll(".editable,.glassObject")
.forEach(obj=>{


dragObject(obj);



});



}



activateAll();








function addText(){


let t=document.createElement("div");


t.innerHTML="NEW TEXT";


t.className="editable";


t.style.position="absolute";


t.style.fontSize="50px";


t.style.left="50%";


t.style.top="50%";


document.body.appendChild(t);


dragObject(t);


}







function addEmoji(){


let e=document.createElement("div");


e.innerHTML="🔥";


e.className="editable";


e.style.position="absolute";


e.style.fontSize="100px";


e.style.left="50%";


e.style.top="50%";


document.body.appendChild(e);


dragObject(e);



}







function addGlass(){


let panel=document.createElement("div");


panel.className="glassObject";


panel.style.left="40%";


panel.style.top="40%";


document.body.appendChild(panel);



dragObject(panel);


}








function addImage(){


let input=document.createElement("input");


input.type="file";


input.accept="image/*";


input.onchange=function(e){


let file=e.target.files[0];


let reader=new FileReader();



reader.onload=function(){


let img=document.createElement("img");


img.src=reader.result;


img.className="editable";


img.style.width="250px";


img.style.position="absolute";


img.style.left="50%";


img.style.top="50%";



document.body.appendChild(img);


dragObject(img);


}


reader.readAsDataURL(file);


}



input.click();



}








function deleteObject(){


if(selected){


selected.remove();


selected=null;


}


}






function savePage(){


alert(
"Layout saved"
);


}
