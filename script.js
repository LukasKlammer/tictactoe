let field = [
    [0/0, 0/1, 0/2],
    [1/0, 1/1, 1/2],
    [2/0, 2/1, 2/2],
];

let actualPlayer = 'cross';


function init() {
    document.getElementById('actual-player').innerHTML = actualPlayer;
}


function placeMove(row, column) {
    let actualField = document.getElementById(`r${row}c${column}`);
    setPlayerToArray(row, column);
    actualField.style.pointerEvents = 'none';
    draw();
    document.getElementById('actual-player').innerHTML = actualPlayer;
    checkWinner();
}


function setPlayerToArray(row, column) {
    if (actualPlayer == 'cross') {
        field[row][column] = 'cross';
        actualPlayer = 'circle';
    }
    else if (actualPlayer == 'circle') {
        field[row][column] = 'circle';
        actualPlayer = 'cross';
    }
}


function draw() {
    for (let row = 0; row <= 2; row++) {
        for(let column = 0; column <= 2; column++) {
            let actualField = document.getElementById(`r${row}c${column}`);
            if (field[row][column] == 'cross') {
                actualField.innerHTML = `<img class="shape" src="./img/cross.png"></img>`;
            }
            else if (field[row][column] == 'circle') {
                actualField.innerHTML = `<img class="shape" src="./img/circle.png"></img>`;
            }
        }
    }
}


function checkWinner() {
    let winner;
    
    // check rows
    if (field[0][0] == field[0][1] && field[0][0] == field[0][2]) {
        winner = field[0][0];
    }
    else if (field[1][0] == field[1][1] && field[1][0] == field[1][2]) {
        winner = field[1][0];
    }
    else if (field[2][0] == field[2][1] && field[2][0] == field[2][2]) {
        winner = field[2][0];
    }

    // check columns
    else if (field[0][0] == field[1][0] && field[0][0] == field[2][0]) {
        winner = field[0][0];
    }
    else if (field[0][1] == field[1][1] && field[0][1] == field[2][1]) {
        winner = field[0][1];
    }
    else if (field[0][2] == field[1][2] && field[0][2] == field[2][2]) {
        winner = field[0][2];
    }

    // check diagonal
    else if (field[0][0] == field[1][1] && field[0][0] == field[2][2]) {
        winner = field[0][0];
    }
    else if (field[0][2] == field[1][1] && field[0][2] == field[2][0]) {
        winner = field[0][2];
    }

    gameWinActions(winner);
}


function gameWinActions(winner) {
    if (winner != undefined) {
        deactivateGame();
        document.getElementById('winner').innerHTML = winner;
        document.getElementById('winner-headline').classList.add('show-winner');
        document.getElementById('winner').classList.add('show-winner');
        document.getElementById('actual-player').innerHTML = 'game-over';
    }
}


function deactivateGame() {
    for (let row = 0; row <= 2; row++) {
        for(let column = 0; column <= 2; column++) {
            let actualField = document.getElementById(`r${row}c${column}`);
            actualField.style.pointerEvents = 'none';
        }
    }
}


function resetAll() {
    for (let row = 0; row <= 2; row++) {
        for(let column = 0; column <= 2; column++) {
            field[row][column] = `${row}/${column}`;
            let actualField = document.getElementById(`r${row}c${column}`);
            actualField.innerHTML = '';
            actualField.style.pointerEvents = 'auto';
        }
    }
    document.getElementById('winner').innerHTML = '';
    document.getElementById('winner-headline').classList.remove('show-winner');
    document.getElementById('winner').classList.remove('show-winner');
}