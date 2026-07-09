const container = document.querySelector(".container")

let n = 35;

for(let i = 0; i<n; i++){
    const rowDiv = document.createElement("div")
    rowDiv.classList.add("grid-row")
        for(let j=0; j<n; j++){
            const squareDiv = document.createElement("div")
            squareDiv.classList.add(`square-(${i},${j})`)
            rowDiv.append(squareDiv)
        }
    container.append(rowDiv)
}

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
    }
);

