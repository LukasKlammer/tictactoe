let field = [
    [0 / 0, 0 / 1, 0 / 2],
    [1 / 0, 1 / 1, 1 / 2],
    [2 / 0, 2 / 1, 2 / 2],
];

let actualPlayer = 'cross';


function init() {
    document.getElementById('actual-player').innerHTML = `<span>it's your turn @ </span> <img class="info-image" src="./img/${actualPlayer}.png"></img>`;
    document.getElementById('winner').innerHTML = '';
    document.getElementById('winner-box').classList.remove('show-winner');
}


function placeMove(row, column) {
    let actualField = document.getElementById(`r${row}c${column}`);
    setPlayerToArray(row, column);
    actualField.style.pointerEvents = 'none';
    draw();
    document.getElementById('actual-player').innerHTML = `<span>it's your turn @ </span><img class="info-image" src="./img/${actualPlayer}.png"></img>`;
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
        for (let column = 0; column <= 2; column++) {
            let actualField = document.getElementById(`r${row}c${column}`);
            if (field[row][column] == 'cross') {
                let sign = 'cross';
                actualField.innerHTML = templateTableContent(row, column, sign);
            }
            else if (field[row][column] == 'circle') {
                let sign = 'circle';
                actualField.innerHTML = templateTableContent(row, column, sign);
            }
        }
    }
}


function checkWinner() {
    let winner;

    // check rows
    if (field[0][0] == field[0][1] && field[0][0] == field[0][2]) {
        winner = field[0][0];
        showWinnerLine('r0c0', 'r0c1', 'r0c2');
    }
    else if (field[1][0] == field[1][1] && field[1][0] == field[1][2]) {
        winner = field[1][0];
        showWinnerLine('r1c0', 'r1c1', 'r1c2');
    }
    else if (field[2][0] == field[2][1] && field[2][0] == field[2][2]) {
        winner = field[2][0];
        showWinnerLine('r2c0', 'r2c1', 'r2c2');
    }

    // check columns
    else if (field[0][0] == field[1][0] && field[0][0] == field[2][0]) {
        winner = field[0][0];
        showWinnerLine('r0c0', 'r1c0', 'r2c0');
    }
    else if (field[0][1] == field[1][1] && field[0][1] == field[2][1]) {
        winner = field[0][1];
        showWinnerLine('r0c1', 'r1c1', 'r2c1');
    }
    else if (field[0][2] == field[1][2] && field[0][2] == field[2][2]) {
        winner = field[0][2];
        showWinnerLine('r0c2', 'r1c2', 'r2c2');
    }

    // check diagonal
    else if (field[0][0] == field[1][1] && field[0][0] == field[2][2]) {
        winner = field[0][0];
        showWinnerLine('r0c0', 'r1c1', 'r2c2');
    }
    else if (field[0][2] == field[1][1] && field[0][2] == field[2][0]) {
        winner = field[0][2];
        showWinnerLine('r0c2', 'r1c1', 'r2c0');
    }
    gameWinActions(winner);
}


function gameWinActions(winner) {
    if (winner != undefined) {
        deactivateGame();
        document.getElementById('winner').innerHTML = `<img class="info-image" src="./img/${winner}.png"></img>`;
        document.getElementById('winner-box').classList.add('show-winner');
        document.getElementById('actual-player').innerHTML = `<img class='game-over' src="./img/game_over.jpg"></img>`;
    }
}


function showWinnerLine(cell1, cell2, cell3) {
    document.getElementById('overlay-' + cell1).classList.remove('d-none');
    document.getElementById('overlay-' + cell2).classList.remove('d-none');
    document.getElementById('overlay-' + cell3).classList.remove('d-none');
}


function deactivateGame() {
    for (let row = 0; row <= 2; row++) {
        for (let column = 0; column <= 2; column++) {
            let actualField = document.getElementById(`r${row}c${column}`);
            actualField.style.pointerEvents = 'none';
        }
    }
}


function resetAll() {
    for (let row = 0; row <= 2; row++) {
        for (let column = 0; column <= 2; column++) {
            field[row][column] = `${row}/${column}`;
            let actualField = document.getElementById(`r${row}c${column}`);
            actualField.innerHTML = '';
            actualField.style.pointerEvents = 'auto';
        }
    }
    init();
}