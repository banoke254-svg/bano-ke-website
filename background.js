// =====================================
// BANO BACKGROUND SYSTEM V3
// =====================================


let currentBackground = "";





// ===============================
// APPLY BACKGROUND
// ===============================


function applyBackground(){



let input =
document.getElementById(
"backgroundUpload"
);



let file =
input.files[0];



if(!file){


alert(
"Choose a background image first"
);


return;


}






let reader =
new FileReader();





reader.onload=function(e){



let page =
document.querySelector(
".page.active"
);



if(!page)
return;





let hero =
page.querySelector(
".hero"
);




hero.style.backgroundImage =

`

linear-gradient(
90deg,
rgba(0,0,0,.65),
rgba(0,0,0,.25)
),

url("${e.target.result}")

`;



hero.style.backgroundSize =
"cover";



hero.style.backgroundPosition =
"center";





// STORE PAGE BACKGROUND


page.dataset.background =
e.target.result;



alert(
"Background applied"
);



};




reader.readAsDataURL(file);



}









// ===============================
// REMOVE BACKGROUND
// ===============================



function removeBackground(){



let page =
document.querySelector(
".page.active"
);



if(!page)
return;



let hero =
page.querySelector(
".hero"
);



hero.style.backgroundImage="";



page.dataset.background="";



}








// ===============================
// BACKGROUND DARKNESS
// ===============================



function changeBackgroundDarkness(value){



let page =
document.querySelector(
".page.active"
);



if(!page)
return;



let hero =
page.querySelector(
".hero"
);



hero.style.setProperty(

"--darkness",

value

);



}









// ===============================
// BACKGROUND BLUR
// ===============================



function changeBackgroundBlur(value){



let page =
document.querySelector(
".page.active"
);



if(!page)
return;



let hero =
page.querySelector(
".hero"
);



hero.style.filter =

`blur(${value}px)`;



}








// ===============================
// RESTORE BACKGROUNDS
// ===============================



function restoreBackgrounds(){



document
.querySelectorAll(".page")
.forEach(page=>{



if(
page.dataset.background
){



let hero =
page.querySelector(
".hero"
);



hero.style.backgroundImage =

`

linear-gradient(
90deg,
rgba(0,0,0,.65),
rgba(0,0,0,.25)
),

url("${page.dataset.background}")

`;



hero.style.backgroundSize =
"cover";



hero.style.backgroundPosition =
"center";



}



});



}







window.addEventListener(
"load",
()=>{


restoreBackgrounds();



});
