const marble =
document.querySelector(".marble");


document.addEventListener(
"mousemove",
(e)=>{


let x =
(e.clientX / window.innerWidth - .5)*20;


let y =
(e.clientY / window.innerHeight - .5)*20;


marble.style.transform =
`
translate(${x}px,${y}px)
`;



});
