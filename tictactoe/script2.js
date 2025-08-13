// let boxes = document.querySelectorAll(".container");
// let resetBtn = document.querySelector("#button");
// let newgamebtn = document.querySelector("#h-button");
// let mssgcontainer = document.querySelector(".mssg-container");
// let message = document.querySelector("#msg");
// let turnO = true; // playerx, playero
// const winPat = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];
// let gamefinshed = false;

// const resetgame = () => {
//     turnO = true;
//     gamefinshed = false; // Reset game state
//     enableboxes(); // Enable all boxes for new game
//     mssgcontainer.classList.add("hide");
//     boxes.forEach((box) => {
//         box.innerHTML = ""; // Clear all boxes
//         box.addEventListener("click", handleBoxClick, { once: true }); // Re-enable click listeners
//     });
// };

// const handleBoxClick = (event) => {
//     if (gamefinshed) return; // Do nothing if game is finished

//     const box = event.target;
//     if (turnO) {
//         // Player O
//         box.innerHTML = "O";
//         turnO = false;
//     } else {
//         // Player X
//         box.innerHTML = "X";
//         turnO = true;
//     }
//     checkwinner();
// };

// const checkwinner = () => {
//     for (let pattern of winPat) {
//         let pos1 = boxes[pattern[0]].innerText;
//         let pos2 = boxes[pattern[1]].innerText;
//         let pos3 = boxes[pattern[2]].innerText;

//         if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
//             if (pos1 === pos2 && pos2 === pos3) {
//                 console.log("winner");
//                 showwinner(pos1);
//                 gamefinshed = true;
//                 disableboxes(); // Disable further input after a win
//             }
//                 draw();
//         }
//     }
// };

// const disableboxes = () => {
//     boxes.forEach((box) => {
//         box.removeEventListener("click", handleBoxClick); // Remove click event listeners
//     });
// };

// const enableboxes = () => {
//     boxes.forEach((box) => {
//         box.addEventListener("click", handleBoxClick, { once: true }); // Add click event listeners back
//     });
// };

// let showwinner = (winner) => {
//     message.innerHTML = `Congratulations! The winner is ${winner}`;
//     mssgcontainer.classList.remove("hide");
// };

// newgamebtn.addEventListener("click", resetgame);
// resetBtn.addEventListener("click", resetgame);

// // Initialize game setup
// boxes.forEach((box) => {
//     box.addEventListener("click", handleBoxClick, { once: true });
// });

// const draw=()=>{
//     message.innerHTML=`YHOOO! myan The game is draw`;
//     mssgcontainer.classList.remove("hide");
// }

let boxes = document.querySelectorAll(".container");
let resetBtn = document.querySelector("#button");
let newgamebtn = document.querySelector("#h-button");
let mssgcontainer = document.querySelector(".mssg-container");
let message = document.querySelector("#msg");
let turnO = true; // Player O starts first
const winPat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let gamefinshed = false;

const resetgame = () => {
    turnO = true;
    gamefinshed = false; // Reset game state
    enableboxes(); // Enable all boxes for a new game
    mssgcontainer.classList.add("hide");
    boxes.forEach((box) => {
        box.innerHTML = ""; // Clear all boxes
        box.addEventListener("click", handleBoxClick, { once: true }); // Re-enable click listeners
    });
};

const handleBoxClick = (event) => {
    if (gamefinshed) return; // Do nothing if the game is finished

    const box = event.target;
    box.style.fontSize = "60px";
    box.style.color = "blue";
    if (turnO) {
        // Player O
        box.innerHTML = "O";
        turnO = false;
    } else {
        // Player X
        box.innerHTML = "X";
        turnO = true;
    }
    checkwinner();
};

const checkwinner = () => {
    let winnerDeclared = false;

    for (let pattern of winPat) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner");
                showwinner(pos1);
                gamefinshed = true;
                disableboxes(); // Disable further input after a win
                winnerDeclared = true;
                break;
            }
        }
    }

    // Check for a draw only if no winner has been declared
    if (!winnerDeclared && isDraw()) {
        showDraw();
        gamefinshed = true;
        disableboxes(); // Disable further input after a draw
    }
};

const isDraw = () => {
    // Check if all boxes are filled
    return [...boxes].every(box => box.innerText !== "");
};

const disableboxes = () => {
    boxes.forEach((box) => {
        box.removeEventListener("click", handleBoxClick); // Remove click event listeners
    });
};

const enableboxes = () => {
    boxes.forEach((box) => {
        box.addEventListener("click", handleBoxClick, { once: true }); // Add click event listeners back
    });
};

let showwinner = (winner) => {
    message.innerHTML = `Congratulations! The winner is ${winner}`;
    mssgcontainer.classList.remove("hide");
};

const showDraw = () => {
    message.innerHTML = `YHOOO!  The game is a draw`;
    mssgcontainer.classList.remove("hide");
};

newgamebtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);

// Initialize game setup
boxes.forEach((box) => {
    box.addEventListener("click", handleBoxClick, { once: true });
});
