const dropdown = document.querySelector(".dropdown_menu");
const togglebtn = document.querySelector(".side-bar");
const bar =document.querySelector(".fa-solid.fa-bars.fa-lg")
const xmark =document.querySelector(".fa-solid.fa-xmark.fa-lg.xmark");
const xmark1 = document.querySelector("#xmark");
bar.addEventListener("click", () => {
    dropdown.classList.add("open");
    xmark.classList.add("xmark1");
    bar.classList.add("bar");
});
const removeXmark= xmark1.onclick = () =>{
    dropdown.classList.remove("open");
    xmark.classList.remove("xmark1");
    bar.classList.remove("bar");
}
let navbar= document.querySelector(".navbar");
const scroll= ()=>{
    const scrollPos= window.scrollY;
    if(scrollPos > 500){
            navbar.classList.add("fixed_navbar");
            navbar.classList.remove("navbar");
       
} else {
        navbar.classList.add("navbar");
        navbar.classList.remove("fixed_navbar");
    
}
};

window.addEventListener("scroll", ()=>{
    scroll();
})
