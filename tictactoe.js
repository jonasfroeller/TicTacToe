let counter = 0;
let someoneWon = false;
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let namePlayerOne;
let namePlayerTwo;
let colorPlayerOne;
let colorPlayerTwo;
let confirmedColor = 0;
let currentPlayer = 1;
let symbolSave;
let symbol;
let ticTacPosition = 0;
let gameMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

document.getElementsByClassName('whosTurn')[0].innerHTML = `<i> Player Ones Turn </i>`;

function setItem(boxElement, x, y) {

    //console.log(boxElement);

    if (someoneWon == false) {
        if (currentPlayer == 1 && boxElement.innerHTML == "") {

            gameMatrix[x][y] = 1;
            currentPlayer = 2;
            boxElement.innerHTML = "x";
            boxElement.style = "opacity: 0.9;"
            boxElement.style = `border: 0.25em solid ${colorPlayerOne};`;
            if (namePlayerOne != "") {
                document.getElementsByClassName('whosTurn')[0].innerHTML = namePlayerTwo + "s Turn";
            } else {
                document.getElementsByClassName('whosTurn')[0].innerHTML = "Player Twos Turn";
            }

            console.log(gameMatrix[x][y]);

        } else if (currentPlayer == 2 && boxElement.innerHTML == "") {

            console.log(boxElement);

            gameMatrix[x][y] = 10;
            currentPlayer = 1;
            boxElement.innerHTML = "o";
            boxElement.style = "opacity: 0.9;"
            boxElement.style = `border: 0.25em solid ${colorPlayerTwo};`;
            if (namePlayerOne != "") {
                document.getElementsByClassName('whosTurn')[0].innerHTML = namePlayerOne + "s Turn";
            } else {
                document.getElementsByClassName('whosTurn')[0].innerHTML = "Player Ones Turn";
            }

            console.log(gameMatrix[x][y]);
        }
    }

    console.log("x: " + x + " / y: " + y);
    console.log(gameMatrix);

    checkWinner();
}

function checkWinner() {
    console.log(gameMatrix);

    // Wenn ein Spieler gewonnen hat: curser -> not-allowed / onclick = nothing
    // Bug: Wenn einmal gewonnen und reset - Keiner kann mehr gewinnen...

    counter++;
    if (counter >= 5) {

        // waagerecht
        if ((gameMatrix[0][0] + gameMatrix[0][1] + gameMatrix[0][2]) == 3) {
            console.log("Player one won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerOne}`;
                scorePlayerOne++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player one won the game!");
            }, 100);
        } else if ((gameMatrix[0][0] + gameMatrix[0][1] + gameMatrix[0][2]) == 30) {
            console.log("Player two won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerTwo}`;
                scorePlayerTwo++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player two won the game!");
            }, 100);
        }

        if ((gameMatrix[1][0] + gameMatrix[1][1] + gameMatrix[1][2]) == 3) {
            console.log("Player one won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerOne}`;
                scorePlayerOne++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player one won the game!");
            }, 100);
        } else if ((gameMatrix[1][0] + gameMatrix[1][1] + gameMatrix[1][2]) == 30) {
            console.log("Player two won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerTwo}`;
                scorePlayerTwo++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player two won the game!");
            }, 100);
        }

        if ((gameMatrix[2][0] + gameMatrix[2][1] + gameMatrix[2][2]) == 3) {
            console.log("Player one won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerOne}`;
                scorePlayerOne++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player one won the game!");
            }, 100);
        } else if ((gameMatrix[2][0] + gameMatrix[2][1] + gameMatrix[2][2]) == 30) {
            console.log("Player two won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerTwo}`;
                scorePlayerTwo++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player two won the game!");
            }, 100);
        }



        // senkrecht
        if ((gameMatrix[0][0] + gameMatrix[1][0] + gameMatrix[2][0]) == 3) {
            console.log("Player one won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerOne}`;
                scorePlayerOne++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player one won the game!");
            }, 100);
        } else if ((gameMatrix[0][0] + gameMatrix[1][0] + gameMatrix[2][0]) == 30) {
            console.log("Player two won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerTwo}`;
                scorePlayerTwo++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player two won the game!");
            }, 100);
        }

        if ((gameMatrix[0][1] + gameMatrix[1][1] + gameMatrix[2][1]) == 3) {
            console.log("Player one won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerOne}`;
                scorePlayerOne++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player one won the game!");
            }, 100);
        } else if ((gameMatrix[0][1] + gameMatrix[1][1] + gameMatrix[2][1]) == 30) {
            console.log("Player two won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerTwo}`;
                scorePlayerTwo++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player two won the game!");
            }, 100);
        }

        if ((gameMatrix[0][2] + gameMatrix[1][2] + gameMatrix[2][2]) == 3) {
            console.log("Player one won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerOne}`;
                scorePlayerOne++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player one won the game!");
            }, 100);
        } else if ((gameMatrix[0][2] + gameMatrix[1][2] + gameMatrix[2][2]) == 30) {
            console.log("Player two won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerTwo}`;
                scorePlayerTwo++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player two won the game!");
            }, 100);
        }


        //diagonal
        if ((gameMatrix[0][0] + gameMatrix[1][1] + gameMatrix[2][2]) == 3) {
            console.log("Player one won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerOne}`;
                scorePlayerOne++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player one won the game!");
            }, 100);
        } else if ((gameMatrix[0][0] + gameMatrix[1][1] + gameMatrix[2][2]) == 30) {
            console.log("Player two won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerTwo}`;
                scorePlayerTwo++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player two won the game!");
            }, 100);
        }

        if ((gameMatrix[0][2] + gameMatrix[1][1] + gameMatrix[2][0]) == 3) {
            console.log("Player one won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerOne}`;
                scorePlayerOne++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player one won the game!");
            }, 100);
        } else if ((gameMatrix[0][2] + gameMatrix[1][1] + gameMatrix[2][0]) == 30) {
            console.log("Player two won the game!");
            counter = 0;
            if (someoneWon == false) {
                document.getElementsByClassName('winner')[0].innerHTML = `Winner: ${namePlayerTwo}`;
                scorePlayerTwo++; someoneWon = true;
                displayScore();
            }
            setTimeout(() => {
                alert("Player Two won the game!");
            }, 100);
        }

        else if (counter >= 9 && someoneWon != true) {
            counter = 0;
            someoneWon = true;
            setTimeout(() => {
                alert("Nobody Wins!");
            }, 100);
            console.log("Nobody Wins!");

        }
    }

    /*
    switch (gameMatrix) {
        case ((gameMatrix[0][0] + gameMatrix[0][1] + gameMatrix[0][2]) == 3) || ((gameMatrix[0][0] + gameMatrix[0][1] + gameMatrix[0][2]) == 6):
            break;
        case gameMatrix[1][0] == gameMatrix[1][1] == gameMatrix[1][2]:

            break;
            case gameMatrix[2][0] == gameMatrix[2][1] == gameMatrix[2][2]:

            break;
        case gameMatrix[0][0] == gameMatrix[1][1] == gameMatrix[2][2]:

            break;
        case gameMatrix[2][0] == gameMatrix[1][1] == gameMatrix[0][2]:

            break;
        case gameMatrix[0][0] == gameMatrix[1][0] == gameMatrix[2][0]:

            break;
        case gameMatrix[0][1] == gameMatrix[1][1] == gameMatrix[2][1]:

            break;
        case gameMatrix[0][2] == gameMatrix[1][1] == gameMatrix[2][2]:

            break;
        default:
            displayLanguage = "Not Defined ";
            console.log("Doesn't work");
            break;
    }
    */
}

function chooseName() {
    namePlayerOne = document.getElementById('namePlayerOne').value;
    namePlayerTwo = document.getElementById('namePlayerTwo').value;
    console.log("Player 1: " + namePlayerOne + " Color: [" + colorPlayerOne + "]");
    console.log("Player 2: " + namePlayerTwo + " Color: [" + colorPlayerTwo + "]");

    checkIfConfigured();
}

function chooseColor() {
    confirmedColor += 1; // Noch ausbaufähig
    colorPlayerOne = document.getElementById('colorPlayerOne').value;
    colorPlayerTwo = document.getElementById('colorPlayerTwo').value;
    console.log("Player 1: " + namePlayerOne + " Color: [" + colorPlayerOne + "]");
    console.log("Player 2: " + namePlayerTwo + " Color: [" + colorPlayerTwo + "]");
    checkIfConfigured();
}

function checkIfConfigured() {
    if (namePlayerOne == "") {
        namePlayerOne = "Player 1";
    } else if (namePlayerTwo == "") {
        namePlayerTwo = "Player 2";
    }

    if (namePlayerOne != "" && namePlayerTwo != "" && confirmedColor >= 2) {
        document.getElementsByClassName('playerConfigurations')[0].style = "display: none;";
        document.getElementsByClassName('buttonClassic')[0].style = "display: block;";
    }
}

function returnToConfigs() {
    document.getElementsByClassName('playerConfigurations')[0].style = "display: flex;";
}

function hideConfigs() {
    document.getElementsByClassName('playerConfigurations')[0].style = "display: none;";
}

function newGame() {
    someoneWon = false;

    gameMatrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    for (let j = 0; j < document.getElementsByClassName('box').length; j++) {
        document.getElementsByClassName('box')[j].innerHTML = "";
        document.getElementsByClassName('box')[j].style = ""
    }
}

function displayScore() {
    document.getElementsByClassName('scorePlayerOne')[0].innerHTML = `${namePlayerOne}: ${scorePlayerOne}`;
    document.getElementsByClassName('scorePlayerTwo')[0].innerHTML = `${namePlayerTwo}: ${scorePlayerTwo}`;

    for (let i = 0; i < document.getElementsByClassName('box').length; i++) {
        document.getElementsByClassName('box')[i].style = "cursor: not-allowed;";
    }
}