let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
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
    
}


function resetAll() {
    for (let row = 0; row <= 2; row++) {
        for(let column = 0; column <= 2; column++) {
            let actualField = document.getElementById(`r${row}c${column}`);
            actualField.innerHTML = '';
            actualField.style.pointerEvents = 'auto';
        }
    }
}