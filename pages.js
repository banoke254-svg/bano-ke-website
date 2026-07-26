// ===========================
// BANO PAGE SYSTEM
// ===========================


let pageNumber = 1;


let currentPage = 1;






function createPage(){


pageNumber++;



let newPage =
document.createElement(
"section"
);



newPage.className =
"page";



newPage.innerHTML = `

<div class="hero">

<h1 class="editable text">

NEW PAGE

</h1>


</div>

`;



document
.getElementById("website")
.appendChild(newPage);



alert(
"Created Page "+pageNumber
);



}








function nextPage(){



let pages =
document.querySelectorAll(
".page"
);



pages[currentPage-1]
.classList.remove(
"active"
);



currentPage++;



if(currentPage > pages.length){

currentPage=1;

}



pages[currentPage-1]
.classList.add(
"active"
);



}








function applyTransition(){



let transition =
document.getElementById(
"transition"
).value;



let pages =
document.querySelectorAll(
".page"
);



let active =
document.querySelector(
".page.active"
);



active.classList.remove(
"fade",
"zoom",
"morph",
"slide"
);



void active.offsetWidth;



active.classList.add(
transition
);



}









// SAVE PAGES


function savePages(){


localStorage.setItem(

"banoPages",

document.getElementById(
"website"
).innerHTML

);



alert(
"Pages saved"
);



}









// LOAD PAGES


window.addEventListener(
"load",
()=>{


let saved =
localStorage.getItem(
"banoPages"
);



if(saved){



document.getElementById(
"website"
).innerHTML=saved;



}


}

);
