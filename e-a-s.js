const numberSquares = document.getElementById('numberofSquares');
let board = document.querySelector(".board");
let box = board.querySelectorAll('div');
let size = 16;
let numberofBoxes = size*size;
let rs = board.querySelectorAll("div");

function defaultBoard(size){
    board.style.gridTemplateColumns = "repeat($(size), 1fr)";
    //board.style.gridTemplateRows = "repeat($(size), 1fr)";
    box.forEach((div) => div.remove());
    for(let i = 0; i < numberofBoxes; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement("beforeend", square);
    }
    return;
}

defaultBoard(size);

function createSquares(size){
    numberSquares.addEventListener('click', (e) => {
        size = prompt("Enter the number of squares");
        console.log(size);
        checkNum(size);
        removeBoxes();
    })
}

function removeBoxes(){
    
}


function checkNum(size){
    while (size > 100 || size < 2){
        alert("Invalid number. Try Again");
        size = prompt("Enter number again");
    }
}