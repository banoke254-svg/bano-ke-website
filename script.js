const marble =
document.querySelector(".marble");


document.addEventListener(
"mousemove",
(e)=>{


let moveX =
(e.clientX/window.innerWidth-.5)*25;


let moveY =
(e.clientY/window.innerHeight-.5)*25;



marble.style.transform =
`
translate(${moveX}px,${moveY}px)
`;



});
