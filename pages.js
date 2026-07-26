// =====================================
// BANO PAGE SYSTEM V3
// =====================================


let currentPage = 0;

let transitionType = "fade";





// GET ALL PAGES


function getPages(){

return document.querySelectorAll(".page");

}







// ===============================
// CREATE PAGE
// ===============================


function addPage(){


let pages = getPages();


let newPage =
document.createElement("section");



newPage.className =
"page";



newPage.dataset.page =
pages.length + 1;




newPage.innerHTML = `

<div class="hero">


<h1 class="editable textObject">

NEW PAGE

</h1>



<p class="editable textObject">

BANO KE SECTION

</p>



</div>

`;




document
.getElementById("website")
.appendChild(newPage);




activateEditorObjects();



alert(
"New page created"
);



saveProject();



}








// ===============================
// REMOVE PAGE
// ===============================


function removePage(){


let pages =
getPages();



if(pages.length <=1){


alert(
"You need at least one page"
);


return;


}



let active =
document.querySelector(
".page.active"
);



active.remove();





currentPage=0;



getPages()[0]
.classList.add(
"active"
);



saveProject();



}








// ===============================
// NEXT PAGE
// ===============================


function nextPage(){


animateHeroMarble("next");



let pages =
getPages();



if(pages.length<=1)
return;




let oldPage =
pages[currentPage];



oldPage.classList.remove(
"active"
);



currentPage++;



if(currentPage>=pages.length){

currentPage=0;

}



let newPage =
pages[currentPage];



newPage.classList.add(
"active"
);



playTransition(
newPage
);



}



let newPage =
pages[currentPage];



newPage.classList.add(
"active"
);



playTransition(
newPage
);



}









// ===============================
// PREVIOUS PAGE
// ===============================


function previousPage(){


let pages =
getPages();



pages[currentPage]
.classList.remove(
"active"
);



currentPage--;



if(currentPage <0){

currentPage =
pages.length-1;

}



let newPage =
pages[currentPage];



newPage.classList.add(
"active"
);



playTransition(
newPage
);



}








// ===============================
// TRANSITION ENGINE
// ===============================


function playTransition(page){



page.classList.remove(

"fade",
"zoom",
"morph",
"slide"

);



void page.offsetWidth;




page.classList.add(
transitionType
);




setTimeout(()=>{


page.classList.remove(
transitionType
);



},1200);



}








// ===============================
// SCROLL PAGE CONTROL
// ===============================


let scrollLock=false;



window.addEventListener(
"wheel",
function(e){



if(scrollLock)
return;



if(
Math.abs(e.deltaY)<20
)
return;



scrollLock=true;



if(e.deltaY>0){

nextPage();

}

else{


previousPage();


}




setTimeout(()=>{


scrollLock=false;


},1200);



});









// ===============================
// KEYBOARD CONTROL
// ===============================



document.addEventListener(
"keydown",
function(e){



if(e.key==="ArrowDown"){


nextPage();


}



if(e.key==="ArrowUp"){


previousPage();


}



});
