function applyBackground(){


let input=document.getElementById(
"backgroundUpload"
);



let file=input.files[0];


if(!file){

alert("Select image first");

return;

}




let reader=new FileReader();



reader.onload=function(e){


let page=document.querySelector(
".page.active"
);



let hero=page.querySelector(
".hero"
);



hero.style.backgroundImage=

`
linear-gradient(
90deg,
rgba(0,0,0,.6),
rgba(0,0,0,.2)
),
url(${e.target.result})
`;



hero.style.backgroundSize="cover";

hero.style.backgroundPosition="center";



page.dataset.background=e.target.result;



saveProject();



};



reader.readAsDataURL(file);


}







function removeBackground(){


let page=document.querySelector(
".page.active"
);


let hero=page.querySelector(
".hero"
);


hero.style.backgroundImage="";

page.dataset.background="";


saveProject();


}
