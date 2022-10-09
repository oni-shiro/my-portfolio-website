console.log("in javascript");
// let isOpen = true;
// const ctaButton = document.querySelector("#hamburger");
// // const closed = document.getElementById("close");
// // closed.addEventListener("click",(e)=>{
// //     console.log("----");
// ctaButton.addEventListener("click",(e)=>{
//     e.preventDefault();
//     if(!isOpen){
//         console.log("in if");
//         ctaButton.classList.remove("ri-menu-2-line");
//         ctaButton.classList.add("ri-close-fil");
//         isOpen = true;
//         console.log(isOpen);
//     }else{
//         console.log("in else");
//         ctaButton.classList.remove("ri-close-fil");
//         ctaButton.classList.add("ri-menu-2-line");
//         isOpen = false;
//         console.log("in false--",isOpen);

//     }
// })
//-----------------
const nav = document.querySelector(".nav");
const ham = document.querySelector(".ham");
let isClicked = false;
ham.addEventListener("click",()=>{
    console.log("clicked")
    if(isClicked ===false){
        nav.classList.add("slide");
        isClicked = true;
        setTimeout(()=>{
            ham.classList.add("ham-toggle");
        },500);
        console.log("if :")
    }else if(isClicked===true){
        nav.classList.remove("slide");
        isClicked = false;
        setTimeout(()=>{
            ham.classList.toggle("ham-toggle");
        },500);
        console.log("else :")
    }

})