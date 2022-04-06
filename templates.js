function templateTableContent(row, column, sign) {
    return /*html*/ `
        <div id="overlay-r${row}c${column}" class="overlay d-none"></div>
        <img class="shape" src="./img/${sign}.png"></img>
    `;
}