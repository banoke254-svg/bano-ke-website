/* ===========================
   BANO WEBSITE
   Marble Mouse Effect
=========================== */

const marble = document.querySelector(".hero-marble");

document.addEventListener("mousemove", function(event){

    const x = (event.clientX / window.innerWidth - 0.5) * 40;

    const y = (event.clientY / window.innerHeight - 0.5) * 40;

    marble.style.transform =
        `translate(${x}px, ${y}px)`;

});
