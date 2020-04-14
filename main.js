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

    primaryCard.forEach(card => {
        card.classList.toggle("bg-card-background-light");
    })
    
    console.log(themeTextCtl.innerHTML)
    if(themeTextCtl.innerHTML == "Dark") {
        themeTextCtl.innerHTML = "Light" 
    } else {
        themeTextCtl.innerHTML = "Dark" 
    }
    
})