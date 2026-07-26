let editor=false;


let selected=null;



const button =
document.getElementById(
"editorToggle"
);


const panel =
document.getElementById(
"editorPanel"
);



button.onclick=()=>{


editor=!editor;


panel.style.display =
editor ? "block":"none";



document.querySelectorAll(
".moveable, h1, p, img"
)
.forEach(item=>{


if(editor){


item.classList.add(
"editing"
);


item.onmousedown=
dragStart;



}

else{


item.classList.remove(
"editing"
);


item.onmousedown=null;


}



});


};





function dragStart(e){


selected=this;



let offsetX =
e.clientX-selected.offsetLeft;


let offsetY =
e.clientY-selected.offsetTop;



document.onmousemove=(e)=>{


if(selected){


selected.style.position="absolute";


selected.style.left =
e.clientX-offsetX+"px";


selected.style.top =
e.clientY-offsetY+"px";


}



}



document.onmouseup=()=>{


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
"moveable editing";



text.style.position=
"absolute";

text.style.left="50%";

text.style.top="50%";

text.style.fontSize=
"50px";


text.style.color=
"white";


document.body.appendChild(text);


text.onmousedown=
dragStart;


}







function addEmoji(){


let emoji =
document.createElement(
"div"
);


emoji.innerHTML="🔥";


emoji.className=
"moveable editing";


emoji.style.position=
"absolute";


emoji.style.fontSize=
"100px";


emoji.style.left="50%";

emoji.style.top="50%";


document.body.appendChild(
emoji
);



emoji.onmousedown=
dragStart;


}






document.getElementById(
"imageUpload"
)
.onchange=(e)=>{


let file=e.target.files[0];


let reader =
new FileReader();



reader.onload=()=>{


let img =
document.createElement(
"img"
);



img.src =
reader.result;


img.className=
"moveable editing";


img.style.width=
"200px";


img.style.position=
"absolute";


img.style.left="50%";


img.style.top="50%";


document.body.appendChild(
img
);



img.onmousedown=
dragStart;



}



reader.readAsDataURL(file);



}







function saveLayout(){


let data=[];


document.querySelectorAll(
".moveable"
)
.forEach(el=>{


data.push({

html:el.outerHTML,

x:el.style.left,

y:el.style.top


});


});



localStorage.setItem(
"bano_editor",
JSON.stringify(data)
);



alert(
"Saved!"
);


}







function clearLayout(){


localStorage.removeItem(
"bano_editor"
);


location.reload();


}






window.onload=()=>{


let saved =
localStorage.getItem(
"bano_editor"
);


if(saved){


console.log(
"Layout found"
);


}



}
