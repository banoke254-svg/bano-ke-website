let currentPage=1;


let pages=1;






function newPage(){


pages++;


let page =
document.createElement(
"section"
);



page.className=
"page";


page.id=
"page"+pages;



page.innerHTML=
`<div class="hero"></div>`;



document
.getElementById("website")
.appendChild(page);



}



function nextPage(){


let allPages =
document.querySelectorAll(".page");



allPages.forEach(p=>{

p.classList.remove("active");

});



currentPage++;



if(currentPage>allPages.length)

currentPage=1;




allPages[currentPage-1]
.classList.add("active");



}







function changePage(){


let effect =
document.getElementById(
"transitionSelect"
).value;



let active =
document.querySelector(
".page.active"
);



active.classList.add(
effect
);



setTimeout(()=>{


active.classList.remove(
effect
);


},1000);



}
