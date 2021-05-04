let container = document.querySelector(".container");
let inputAsk = document.querySelector(".input-pixels");
let buttonClear = document.querySelector(".button-clear");
let buttonPixels = document.querySelector(".button-pixels");
let pixels;

makeGrid(10);

buttonPixels.addEventListener("click", function() {
    container.innerHTML = " "
    pixels = parseInt(inputAsk.value);
    makeGrid(pixels);
})

buttonClear.addEventListener("click", function() {
    for(let i = 0; i < container.children.length; i++){
        container.children[i].setAttribute("data-cleared", "true");
        container.children[i].style.backgroundColor = "rgb(255, 255, 255)"; 
    }
    // container.innerHTML = " ";
    // makeGrid();
});

function makeGrid(pixels){
    if(pixels > 100) return;
    if(!Number.isInteger(pixels)) return;

    for(let i = 0; i < pixels*pixels; i++){
        let div = document.createElement('div');
        div.style.width = 300/pixels + "px";
        div.style.height = 300/pixels + "px";
        div.setAttribute("data-cleared", "false")
        let opacity = 0;
        
        div.addEventListener("mouseover", function() {
            if(div.getAttribute("data-cleared") === "true") {
                opacity = 0;
                div.setAttribute("data-cleared", "false");
            }
            if(opacity === 1) return;
            opacity += 0.1;
            div.style.backgroundColor = "rgba(0, 0, 0, "+ opacity +")";
        })
        container.appendChild(div);
        console.dir(div);
    }
}
