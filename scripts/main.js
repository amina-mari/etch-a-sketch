let container = document.querySelector(".container");

let promptAsk = prompt("How many squares, buddy?", "16");
let pixels = parseInt(promptAsk);

for(let i = 0; i < pixels*pixels; i++){
    let div = document.createElement('div');
    div.style.width = 300/pixels + "px";
    div.style.height = 300/pixels + "px";
    div.addEventListener("mouseover", function() {
        div.style.backgroundColor = "black";
    })
    container.appendChild(div);
}

console.log(container.children)