// ======================================
// BANO PROJECT SAVE SYSTEM V5
// ======================================


const BANO_PROJECT_KEY =
"BANO_PROJECT_DATA";





// ======================================
// SAVE PROJECT
// ======================================


function saveProject(){



let project = {


pages: [],


currentPage:
window.currentPage || 0


};






document
.querySelectorAll(".page")
.forEach(page=>{



let pageData={



background:
page.dataset.background || "",



objects: []



};







page
.querySelector(".hero")
.querySelectorAll(
".editable,.glass"
)
.forEach(obj=>{





let object={



tag:
obj.tagName,



className:
obj.className,



html:
obj.innerHTML,



src:
obj.src || "",



left:
obj.style.left,



top:
obj.style.top,



width:
obj.style.width,


height:
obj.style.height,



fontSize:
obj.style.fontSize,



background:
obj.style.background,



blur:
obj.style.backdropFilter,



radius:
obj.style.borderRadius,



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





pageData.objects.push(
object
);




});






project.pages.push(
pageData
);



});







localStorage.setItem(

BANO_PROJECT_KEY,

JSON.stringify(project)

);






projectChanged=false;



let status =
document.getElementById(
"saveStatus"
);



if(status){

status.innerHTML =
"✓ Saved";

}



alert(
"BANO PROJECT SAVED"
);



}











// ======================================
// LOAD PROJECT
// ======================================


function loadProject(){



let saved =

localStorage.getItem(
BANO_PROJECT_KEY
);



if(!saved){



alert(
"No saved project"
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



page.className =
"page";



if(index===0){

page.classList.add(
"active"
);

}



page.dataset.background =
pageData.background || "";







let hero =
document.createElement(
"div"
);



hero.className =
"hero";







// RESTORE BACKGROUND


if(
pageData.background
){



hero.style.backgroundImage =

`

linear-gradient(
90deg,
rgba(0,0,0,.6),
rgba(0,0,0,.2)
),

url(${pageData.background})

`;



hero.style.backgroundSize =
"cover";



}







page.appendChild(hero);









// RESTORE OBJECTS


pageData.objects.forEach(
(data)=>{



let obj;






if(data.tag==="IMG"){



obj =
document.createElement(
"img"
);



obj.src =
data.src;



}

else{


obj =
document.createElement(
"div"
);



obj.innerHTML =
data.html;



}








obj.className =
data.className;



obj.classList.add(
"editable"
);





obj.style.position =
"absolute";



obj.style.left =
data.left;



obj.style.top =
data.top;



obj.style.width =
data.width;



obj.style.height =
data.height;



obj.style.fontSize =
data.fontSize;



obj.style.background =
data.background;



obj.style.backdropFilter =
data.blur;



obj.style.borderRadius =
data.radius;







if(data.animation){


obj.classList.add(
data.animation
);



}





hero.appendChild(
obj
);



});







website.appendChild(
page
);



});






// restart editor



if(
typeof activateEditorObjects === "function"
){



activateEditorObjects();



}






alert(
"BANO PROJECT LOADED"
);



}











// ======================================
// AUTO LOAD
// ======================================


window.addEventListener(
"load",
()=>{


let saved =

localStorage.getItem(
BANO_PROJECT_KEY
);



if(saved){


loadProject();


}



});
