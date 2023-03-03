function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeStockPrice(price) {
    const tmp = random(0, 1);
    const effectPrice = random(100, price/10);
    return tmp == 0 ? random(price - effectPrice, price) : random(price, price + effectPrice);
}

let dogePrice = 20000;
let samsungPrice = 20000;
let teslaPrice = 20000;
function stockSystem(io) {

    dogePrice = changeStockPrice(dogePrice);
    samsungPrice = changeStockPrice(samsungPrice);
    teslaPrice = changeStockPrice(teslaPrice);

    io.sockets.emit('msg', {
        dogePrice, samsungPrice, teslaPrice
    });
    console.log({
        dogePrice, samsungPrice, teslaPrice
    });
}

function init() {
    return { dogePrice, samsungPrice, teslaPrice };
}

module.exports = {
    init, stockSystem
}