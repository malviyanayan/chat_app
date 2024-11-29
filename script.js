const navMenu = document.getElementById("nav-op-disp");
const hiddenMenu = document.getElementById("hidden-menu");

navMenu.addEventListener('click',()=>{
    document.getElementById("nav-menu-clicked").style.display = "block";
    navMenu.style.display = "none";
    hiddenMenu.style.display = "block";
});

hiddenMenu.addEventListener("click",()=>{
    document.getElementById("nav-menu-clicked").style.display = "none";
    navMenu.style.display = "block";
})