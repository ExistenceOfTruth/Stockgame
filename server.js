const PORT = 3000;
const routes = require('./routes/route');
const { stockSystem } = require('./func');

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use('/', routes);
app.use(require('express').static('public'));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

const startInterval = (seconds, callback) => {
    callback();
    return setInterval(callback, seconds * 1000);
};

http.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
    startInterval(1, () => {
        stockSystem(io);
    });
});