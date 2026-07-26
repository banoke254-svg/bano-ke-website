// =====================================
// BANO PROJECT SAVE / LOAD SYSTEM V3
// =====================================


const PROJECT_KEY = "BANO_PROJECT_V3";




// =====================================
// SAVE PROJECT
// =====================================


function saveProject(){


let project = {


currentPage:
window.currentPage || 0,


pages: []

};






document
.querySelectorAll(".page")
.forEach(page=>{


let pageData = {


background:
page.dataset.background || "",


objects: []

};






page
.querySelectorAll(".editable")
.forEach(obj=>{


let data = {


type:
obj.tagName,


class:
obj.className,



html:
obj.innerHTML,



src:
obj.src || "",



x:
obj.style.left,



y:
obj.style.top,



width:
obj.style.width || "",



height:
obj.style.height || "",



fontSize:
obj.style.fontSize || "",



opacity:
obj.style.opacity || "",



animation:
obj.classList.contains("bounce")
?
"bounce"
:
obj.classList.contains("float")
?
"float"
:
obj.classList.contains("pulse")
?
"pulse"
:
""



};





pageData.objects.push(data);



});





project.pages.push(pageData);



});






localStorage.setItem(

PROJECT_KEY,

JSON.stringify(project)

);



alert(
"BANO PROJECT SAVED"
);



}









// =====================================
// LOAD PROJECT
// =====================================


function loadProject(){



let saved =

localStorage.getItem(
PROJECT_KEY
);



if(!saved){


alert(
"No saved project found"
);


return;


}





let project =

JSON.parse(saved);





let website =

document.getElementById(
"website"
);




website.innerHTML="";





project.pages.forEach(
(pageData,index)=>{



let page =

document.createElement(
"section"
);



page.className="page";



if(index === project.currentPage){


page.classList.add(
"active"
);


}








// BACKGROUND RESTORE


if(pageData.background){


page.style.backgroundImage =

pageData.background;


}






let hero =

document.createElement(
"div"
);



hero.className="hero";





page.appendChild(hero);






pageData.objects.forEach(
(objData)=>{



let element;



// IMAGE


if(
objData.type === "IMG"
){



element =
document.createElement(
"img"
);



element.src =
objData.src;



}



// TEXT


else{


element =
document.createElement(
"div"
);



element.innerHTML =
objData.html;



}






element.className =
objData.class;



element.classList.add(
"editable"
);





element.style.position =
"absolute";



element.style.left =
objData.x;



element.style.top =
objData.y;



element.style.width =
objData.width;



element.style.height =
objData.height;



element.style.fontSize =
objData.fontSize;






// RESTORE ANIMATION


if(objData.animation){


element.classList.add(
objData.animation
);


}






hero.appendChild(
element
);




});








website.appendChild(
page
);



});







// refresh editor

if(
typeof activateEditorObjects === "function"
){

activateEditorObjects();

}





alert(
"BANO PROJECT LOADED"
);



}








// =====================================
// AUTO LOAD
// =====================================


window.addEventListener(
"load",
()=>{


let saved =

localStorage.getItem(
PROJECT_KEY
);



if(saved){


loadProject();


}



});
