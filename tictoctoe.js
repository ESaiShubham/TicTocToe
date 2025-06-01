let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newGame = document.querySelector(".newGame-btn");
let wins = document.querySelector(".winner1");

const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,5,8],[6,4,2]];
let turnO = true;

boxes.forEach((box) => {
        box.addEventListener ("click", () => {
            if(turnO) {
                box.innerText = "O";
                turnO = false;
            }
            else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        });
});

const disabledbox = () => {
    for(let box of boxes) {
    box.disabled = true;
    };
};


const checkWinner = () => {
    for(let Pattern of winPattern) {
        let position1 = boxes[Pattern[0]].innerText;
        let position2 = boxes[Pattern[1]].innerText;
        let position3 = boxes[Pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != "") {
            if(position1 === position2 && position2 === position3) {
                showwinner(position1);
            }
            else {
                wins.innerText = "The Draw";
            }
        }
    }
};

let showwinner = (winner) => {
    wins.innerText = `winner is ${winner}`;
    disabledbox();
};





const resetGame = () => {
    turnO = true;
    enabledbox();
    wins.innerText = "";
};


const enabledbox = () => {
    for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    };
};

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
