function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeStockPrice(price) {
    const tmp = random(0, 1);
    const effectPrice = random(100, price/10);
    return tmp == 0 ? random(price - effectPrice, price) : random(price, price + effectPrice);
}

function doge(io) {
    let startPrice = 200000;
    const send = (io) => {
        startPrice = changeStockPrice(startPrice);
        io.sockets.emit('msg', startPrice);
        console.log(`doge | ${startPrice}`);
    }
    send(io);
}

function samsung(io) {
    let startPrice = 200000;
    const send = (io) => {
        startPrice = changeStockPrice(startPrice);
        io.sockets.emit('msg', startPrice);
        console.log(`samsung | ${startPrice}`);
    }
    send(io);
}

function tesla(io) {
    let startPrice = 200000;
    const send = (io) => {
        startPrice = changeStockPrice(startPrice);
        io.sockets.emit('msg', startPrice);
        console.log(`tesla | ${startPrice}`);
    }
    send(io);
}

module.exports = {
    doge, samsung, tesla
}