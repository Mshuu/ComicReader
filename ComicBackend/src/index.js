var app = require('express')();
const fs = require('fs');
const options = {
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('cert.pem')
};
const https = require('https').createServer(app,options);
var io = require('socket.io')(https);

let ReadController = require('./controllers/readController.js');
let HomeController = require('./controllers/homeController.js');
let BookController = require("./controllers/bookController.js");
let IssuesController = require("./controllers/issuesController.js");
let UserController = require("./controllers/userController.js");

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('GetHome', () => {HomeController.GetHome(socket)});

  socket.on('GetReads', (msg) => {ReadController.getReads(msg,socket)});

  socket.on('disconnect', () => {console.log("user disconnected")});

  socket.on('UpdateReads', (msg) => {ReadController.updateReads(msg)});

  socket.on('GetSpecificRead', (msg) => {ReadController.getSpecificRead(msg,socket)});

  socket.on('GetIssues', (msg) => IssuesController.RequestIssue(msg,socket));

  socket.on('UpdateOPDS', (msg) => {UserController.updateOPDS(msg)});

  socket.on('GiveOPDS', (msg) => {UserController.giveOPDS(msg,socket)});

});

https.listen(3000, function(){
  console.log('listening on *:3000');
});

setInterval(BookController.GetBooksOPDS,300000);

BookController.GetBooksOPDS();