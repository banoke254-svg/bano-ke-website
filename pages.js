// =============================
// BANO PAGE SYSTEM V2
// =============================


let pages = [];

let currentPage = 0;



// LOAD WHEN STARTING

window.onload=function(){

loadWebsite();

};





function createPage(){


let page =
document.createElement("section");


page.className="page";


page.innerHTML=`

<div class="hero">

<h1 class="editable text">

NEW BANO PAGE

</h1>


</div>

`;



document
.getElementById("website")
.appendChild(page);



pages =
document.querySelectorAll(".page");



alert(
"New page created"
);



saveWebsite();


}







function nextPage(){


pages =
document.querySelectorAll(".page");



if(pages.length <=1){

alert("Create another page first");

return;

}



pages[currentPage]
.classList.remove(
"active"
);



currentPage++;



if(currentPage >= pages.length){

currentPage=0;

}



pages[currentPage]
.classList.add(
"active"
);



}








function applyTransition(){


let type =
document.getElementById(
"transition"
).value;



let page =
document.querySelector(
".page.active"
);



page.classList.remove(
"fade",
"zoom",
"morph",
"slide"
);



void page.offsetWidth;



page.classList.add(type);



setTimeout(()=>{


page.classList.remove(type);


},1000);



}








// =============================
// SAVE SYSTEM
// =============================


function saveWebsite(){



let data =
document.getElementById(
"website"
).innerHTML;



localStorage.setItem(

"BANO_WEBSITE",

data

);



localStorage.setItem(

"BANO_PAGE",

currentPage

);



alert(
"BANO website saved"
);



}








// =============================
// LOAD SYSTEM
// =============================


function loadWebsite(){



let saved =
localStorage.getItem(
"BANO_WEBSITE"
);



if(saved){



document
.getElementById(
"website"
)
.innerHTML=saved;



currentPage =
Number(
localStorage.getItem(
"BANO_PAGE"
)
)
||0;



let pages =
document.querySelectorAll(
".page"
);



pages.forEach(p=>{

p.classList.remove(
"active"
);


});



if(pages[currentPage])

pages[currentPage]
.classList.add(
"active"
);



}



}
