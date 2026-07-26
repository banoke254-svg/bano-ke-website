// ======================================
// BANO BACKGROUND SYSTEM V5
// ======================================



let currentBackground = "";




// ======================================
// APPLY BACKGROUND
// ======================================


function applyBackground(){



let input =
document.getElementById(
"backgroundUpload"
);



let file =
input.files[0];



if(!file){


alert(
"Please select a background image"
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



currentBackground =
e.target.result;





hero.style.backgroundImage =

`

linear-gradient(
90deg,
rgba(0,0,0,.55),
rgba(0,0,0,.25)
),

url("${currentBackground}")

`;



hero.style.backgroundSize =
"cover";



hero.style.backgroundPosition =
"center";





// SAVE DATA ONLY
// NOT PROJECT SAVE


page.dataset.background =
currentBackground;




if(typeof markChanged === "function"){

markChanged();

}



};




reader.readAsDataURL(file);



}









// ======================================
// REMOVE BACKGROUND
// ======================================


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



if(typeof markChanged === "function"){

markChanged();

}



}









// ======================================
// BACKGROUND DARKNESS
// ======================================


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

"--overlay",

value

);



hero.style.backgroundImage =

`

linear-gradient(
90deg,
rgba(0,0,0,${value}),
rgba(0,0,0,${value/2})
),

${hero.style.backgroundImage.split(",url")[1] || ""}

`;




markChanged();



}









// ======================================
// BACKGROUND BLUR
// ======================================


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



markChanged();



}









// ======================================
// RESTORE BACKGROUND
// ======================================


function restoreBackgrounds(){



document
.querySelectorAll(
".page"
)
.forEach(page=>{



let image =
page.dataset.background;



if(!image)
return;




let hero =
page.querySelector(
".hero"
);





hero.style.backgroundImage =

`

linear-gradient(
90deg,
rgba(0,0,0,.55),
rgba(0,0,0,.25)
),

url("${image}")

`;



hero.style.backgroundSize =
"cover";



hero.style.backgroundPosition =
"center";



});



}






window.addEventListener(
"load",
()=>{


restoreBackgrounds();


});
