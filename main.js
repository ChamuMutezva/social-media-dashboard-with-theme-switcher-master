const switchCtl = document.querySelector(".slider");
const themeTextCtl = document.querySelector(".themeTextCtl");
const bodyTag = document.querySelector("body");
console.log(bodyTag);

switchCtl.addEventListener("click", () => {
    console.log("Toggle button clicked")
    bodyTag.classList.toggle("bg-background-light")
    console.log(themeTextCtl.innerHTML)
    if(themeTextCtl.innerHTML == "Dark") {
        themeTextCtl.innerHTML = "Light" 
    } else {
        themeTextCtl.innerHTML = "Dark" 
    }
    
})