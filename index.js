
const express = require('express');

const server = express();
// gives us an instance of a serve powered by express.

// The next code snippets is the configuration of this server.

server.get('/', (req, res) => {
    res.send('Hello world');
});

// endpoint that returns a list of hobbits:
server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id: 1, 
            name: 'Samwise Gamgee'
        },
        {
            id: 2,
            name: 'Frodo Baggins'
        }
    ];

    res.status(200).json(hobbits);
})

// A port that the client can listen to when accessing the web server.
// A server can have more than one service running. Each service will have their own ports.
// Emails are port 25 and apis for clients are port 80.

// We can't use any these ports because we are privately developing an api.
server.listen(3000, () => {
    console.log('api running in port 3000') 
})