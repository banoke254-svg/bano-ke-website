let editor=false;


let selected=null;



const toggle =
document.getElementById(
"editorToggle"
);



const panel =
document.getElementById(
"editorPanel"
);





toggle.onclick=function(){


editor=!editor;



if(editor){


panel.style.display="block";


enableEditor();


}

else{


panel.style.display="none";


disableEditor();


}


}





function enableEditor(){


document
.querySelectorAll(
".editable-object"
)

.forEach(element=>{


element.classList.add(
"editing"
);


element.onmousedown =
drag;



});


}






function disableEditor(){


document
.querySelectorAll(
".editable-object"
)

.forEach(element=>{


element.classList.remove(
"editing"
);


element.onmousedown=null;


});



}








function drag(e){



selected=this;



let offsetX =
e.clientX -
selected.offsetLeft;



let offsetY =
e.clientY -
selected.offsetTop;





document.onmousemove=function(e){


if(selected){



selected.style.position=
"absolute";



selected.style.left =
(e.clientX-offsetX)
+"px";



selected.style.top =
(e.clientY-offsetY)
+"px";



}


}




document.onmouseup=function(){


selected=null;


document.onmousemove=null;


}



}








function addText(){



let text =
document.createElement(
"div"
);



text.innerHTML=
"NEW TEXT";


text.className=
"editable-object editing";



text.style.position=
"absolute";


text.style.left="50%";


text.style.top="50%";


text.style.fontSize="50px";


text.style.color="white";



document.body.appendChild(text);



text.onmousedown=drag;


}









function addEmoji(){


let emoji =
document.createElement(
"div"
);



emoji.innerHTML="🔥";


emoji.className=
"editable-object editing";



emoji.style.position=
"absolute";


emoji.style.fontSize=
"100px";


emoji.style.left="50%";


emoji.style.top="50%";



document.body.appendChild(
emoji
);



emoji.onmousedown=drag;



}









document
.getElementById(
"imageUpload"
)

.onchange=function(e){



let file =
e.target.files[0];



let reader =
new FileReader();




reader.onload=function(){



let img =
document.createElement(
"img"
);



img.src =
reader.result;



img.className=
"editable-object editing";



img.style.position=
"absolute";


img.style.width=
"250px";



document.body.appendChild(img);



img.onmousedown=drag;



}




reader.readAsDataURL(file);



}








function saveLayout(){


let objects=[];



document
.querySelectorAll(
".editable-object"
)

.forEach(el=>{


objects.push({

html:el.outerHTML,

left:el.style.left,

top:el.style.top


});


});



localStorage.setItem(

"banoLayout",

JSON.stringify(objects)

);



alert(
"Layout saved"
);



}








function clearLayout(){


localStorage.removeItem(
"banoLayout"
);


location.reload();


}
