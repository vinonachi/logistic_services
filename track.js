const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

let currentPosition = { lat: -34.397, lng: 150.644 };

app.get('/location', (req, res) => {
    res.json(currentPosition);
});

// Simulate real-time updates
setInterval(() => {
    currentPosition = {
        lat: -34.397 + Math.random() * 0.01,
        lng: 150.644 + Math.random() * 0.01
    };
    io.emit('locationUpdate', currentPosition);
}, 5000);

http.listen(3000, () => {
    console.log('Server is running on port 3000');
});
