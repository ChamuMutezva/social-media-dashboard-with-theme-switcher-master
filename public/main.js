const switchCtl = document.querySelector(".slider");
const themeTextCtl = document.querySelector(".themeTextCtl");
const bodyTag = document.querySelector("body");
const headerTag = document.querySelector("header");
const primaryCard = Array.from(document.querySelectorAll(".primary__card"));

console.log(primaryCard);

switchCtl.addEventListener("click", () => {
    console.log("Toggle button clicked");
    bodyTag.classList.toggle("bg-background-light");
    headerTag.classList.toggle("bg-header-background");
    switchCtl.classList.toggle("switchLight");
    primaryCard.forEach(card => {
        card.classList.toggle("bg-card-background-light");
    })
    
    console.log(themeTextCtl.innerHTML)
    if(themeTextCtl.innerHTML == "Light") {
        themeTextCtl.innerHTML = "Dark" 
    } else {
        themeTextCtl.innerHTML = "Light" 
    }
    
})