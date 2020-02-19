var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

let ReadController = require('./controllers/readController.js');
let HomeController = require('./controllers/homeController.js');
let BookController = require("./controllers/bookController.js");
let IssuesController = require("./controllers/issuesController.js");

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('GetHome', () => {HomeController.GetHome(socket)});

  socket.on('GetReads', (msg) => {ReadController.getReads(msg,socket)});

  socket.on('disconnect', () => {console.log("user disconnected")});

  socket.on('UpdateReads', (msg) => {ReadController.updateReads(msg)});

  socket.on('GetSpecificRead', (msg) => {ReadController.getSpecificRead(msg,socket)});

  socket.on('GetIssues', (msg) => IssuesController.RequestIssue(msg,socket));

});

http.listen(2083, function(){
  console.log('listening on *:2083');
});

setInterval(BookController.GetBooksOPDS,300000);

BookController.GetBooksOPDS();