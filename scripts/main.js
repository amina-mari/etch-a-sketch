let container = document.querySelector(".container");
let inputAsk = document.querySelector(".input-pixels");
let buttonClear = document.querySelector(".button-clear");
let buttonPixels = document.querySelector(".button-pixels");
let pixels;

buttonPixels.addEventListener("click", function() {
    container.innerHTML = " "
    pixels = parseInt(inputAsk.value);
    makeGrid();
})

buttonClear.addEventListener("click", function() {
    for(let i = 0; i < container.children.length; i++){
        container.children[i].style.backgroundColor = "rgb(127, 255, 212)"; 
    }
    // container.innerHTML = " ";
    // makeGrid();
});

function makeGrid(){
    if(pixels > 100) return;
    if(!Number.isInteger(pixels)) return;

    for(let i = 0; i < pixels*pixels; i++){
        let div = document.createElement('div');
        div.style.width = 300/pixels + "px";
        div.style.height = 300/pixels + "px";
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "black";
        })
        container.appendChild(div);
    }
}
