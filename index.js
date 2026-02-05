const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end('<h1>Projet1</h1><a href="/about">About</a>');
    }

            else if(req.url === '/about') {
                res.writeHead(200, { 'Content-Type': 'text/html'});
                res.end('<h1>Contact me</h1><a href="/">Accueul</a>');}
                
            else {
                res.writeHead(404, { 'Content-Type': 'text/hml'});
                res.end('<h1>Page introuvable(404)</h1>');
            
            }
            }); 
            
    server.listen(8080, () => {
        console.log('Serveur lancé sur http://localhost:8080');
    });
           


