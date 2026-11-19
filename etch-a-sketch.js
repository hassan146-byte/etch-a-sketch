// Etch a Sketch

const container = document.getElementById("container");


function createGrid(n) {
    for (let row = 0; row < n; row ++) {
        for (let column = 0; column < n; column ++) {
            let div1 = document.createElement("div");
            div1.classList.add("grid");
            div1.style.width = `${1200/n}px`;
            div1.style.height = `${1200/n}px`;
            div1.style.border = "1px solid black";
            container.appendChild(div1)
        
    }
}
}

createGrid(16);
