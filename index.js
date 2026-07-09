const container = document.querySelector(".container")
const canvasContainer = document.createElement("div")
canvasContainer.classList.add("working-canvas")


//Button to generate canvas

const button = document.createElement("button")
button.addEventListener('click', userRequiredCanvasSize)
button.innerText = "Generate Canvas";
button.classList.add('generate-canvas')
container.insertAdjacentElement("beforeend", button)

//Default canvas
let isCanvasCreated = false
function defaultCanvas(){
    let n = 35;
    for(let i = 0; i<n; i++){
        const rowDiv = document.createElement("div")
        rowDiv.classList.add("grid-row")
            for(let j=0; j<n; j++){
                const squareDiv = document.createElement("div")
                squareDiv.classList.add(`square-(${i},${j})`)
                rowDiv.append(squareDiv)
            }
        canvasContainer.appendChild(rowDiv)
        container.appendChild(canvasContainer)
    }
    colorSquares()
}

//Canvas creator after clicking button
function userRequiredCanvasSize(){
    isCanvasCreated = true

    canvasContainer.innerHTML = ''
    container.removeChild(canvasContainer)
    
    let n = prompt("enter dimension of canvas.")
        for(let i = 0; i<n; i++){
        const rowDiv = document.createElement("div")
        rowDiv.classList.add("grid-row")
            for(let j=0; j<n; j++){
                const squareDiv = document.createElement("div")
                squareDiv.classList.add(`square-(${i},${j})`)
                rowDiv.append(squareDiv)
            }
        canvasContainer.appendChild(rowDiv)
        container.appendChild(canvasContainer)
    }
    colorSquares()
}

//To color the squares of canvas
function colorSquares(){
     const squareDivs = document.querySelectorAll('[class*="square-"]');

    squareDivs.forEach((square) => {
        let isclicked = false;

        square.addEventListener('mouseenter', (event) => event.target.style.backgroundColor="green");

        square.addEventListener('mouseleave', (event) => {
             if(!isclicked){
                event.target.style.backgroundColor="white"
            }
        })
           
        square.addEventListener('click',(event) => {
            isclicked = true;
            event.target.style.backgroundColor="green"
        });
    })
}

//to create default canvas of size 35x35
if(!isCanvasCreated){
    defaultCanvas()
}