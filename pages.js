// ======================================
// BANO PAGE SYSTEM V5
// ======================================


let currentPage = 0;



let pageChanging = false;






// ======================================
// GET PAGES
// ======================================


function getPages(){


return document.querySelectorAll(
".page"
);


}









// ======================================
// ADD PAGE
// ======================================


function addPage(){



let website =
document.getElementById(
"website"
);



let page =
document.createElement(
"section"
);



page.className =
"page";



page.innerHTML = `


<div class="hero">


<h1 class="editable textObject">

NEW BANO PAGE

</h1>


<p class="editable textObject">

NEW SECTION

</p>



</div>


`;




website.appendChild(
page
);



activateEditorObjects();



markChanged();




alert(
"New page added"
);



}









// ======================================
// REMOVE PAGE
// ======================================


function removePage(){



let pages =
getPages();



if(pages.length <= 1){


alert(
"Cannot remove the last page"
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



markChanged();



}









// ======================================
// NEXT PAGE
// ======================================


function nextPage(){



if(pageChanging)
return;



let pages =
getPages();



if(pages.length<=1)
return;





pageChanging=true;





// MARBLE MOTION

if(typeof animateHeroMarble === "function"){

animateHeroMarble(
"next"
);

}






let oldPage =
pages[currentPage];



oldPage.classList.remove(
"active"
);







currentPage++;





if(currentPage >= pages.length){


currentPage=0;


}





let newPage =
pages[currentPage];



newPage.classList.add(
"active"
);


setTimeout(()=>{


let newMarble =
newPage.querySelector(
".hero-marble"
);



if(newMarble){


newMarble.style.animation =
"marbleAppear 1s ease";


}



},100);





playPageTransition(
newPage
);






setTimeout(()=>{


pageChanging=false;


},1400);



}









// ======================================
// PREVIOUS PAGE
// ======================================


function previousPage(){



if(pageChanging)
return;



let pages =
getPages();



if(pages.length<=1)
return;





pageChanging=true;





if(typeof animateHeroMarble === "function"){


animateHeroMarble(
"previous"
);



}





pages[currentPage]
.classList.remove(
"active"
);





currentPage--;





if(currentPage<0){


currentPage =
pages.length-1;


}





let newPage =
pages[currentPage];



newPage.classList.add(
"active"
);





playPageTransition(
newPage
);






setTimeout(()=>{


pageChanging=false;


},1400);



}









// ======================================
// PAGE TRANSITION
// ======================================


function playPageTransition(page){



let type =
document.getElementById(
"pageTransition"
).value;





page.classList.remove(

"fade",

"zoom",

"morph",

"slide"

);





void page.offsetWidth;





page.classList.add(
type
);





setTimeout(()=>{


page.classList.remove(
type
);


},1400);



}









// ======================================
// SCROLL CONTROL
// ======================================


let scrollLock=false;




window.addEventListener(
"wheel",
(e)=>{



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


},1500);



});









// ======================================
// KEYBOARD CONTROL
// ======================================


document.addEventListener(
"keydown",
(e)=>{



if(e.key==="ArrowDown"){


nextPage();


}




if(e.key==="ArrowUp"){


previousPage();


}



});
