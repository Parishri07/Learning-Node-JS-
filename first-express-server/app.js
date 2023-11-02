const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) =>{
    console.log("In middleware");
    next(); //Allows the request to continue in the next middleware in line
})

app.use((req, res, next) =>{
    console.log("In another middleware");
    res.send('<h1>Hello.. Welcome to my express server</h1>');
    //you travel from middleware to middleware using next() function. At the end of the last middleware you send a response
})

const server = http.createServer(app);

server.listen(3000);
