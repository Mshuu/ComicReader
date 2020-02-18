var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var mongo = require('mongodb');
var url = "mongodb://localhost:27017";
var request = require('request');
var opds = "http://l2.mml2.net:2202";
let xmlParser = require('xml2json');
var MongoClient = require('mongodb').MongoClient;
var urlMongo = "mongodb://localhost:27017/comicbooks";
var utils = require("./utils");
let ReadController = require('./controllers/readController.js');
let HomeController = require('./controllers/homeController.js');

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('GetHome', () => {HomeController.GetHome(socket)});

  socket.on('GetReads', (msg) => {ReadController.getReads(msg,socket)});

  socket.on('disconnect', () => {console.log("user disconnected")});

  socket.on('UpdateReads', (msg) => {ReadController.updateReads(msg)});

  socket.on('GetSpecificRead', (msg) => {ReadController.getSpecificRead(msg,socket)});

  socket.on('GetIssues',async function(msg){
      RequestIssue(msg,socket);
  });
  socket.on('Testing2',function(msg){
      console.log(msg);
  });
  socket.on("GetIssue",function(msg){
      GetIssue(msg.id,msg.page);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

setInterval(GetBooksOPDS,300000);

function RequestIssue(id,socket){
    MongoClient.connect(urlMongo, function(err, db) {
        if (err) throw err;
        var dbo = db.db("comicbooks");
        dbo.collection("books").findOne({id: id}, function(err, res) {
          if (err) console.log(err);
          if (res){
            socket.emit("ReturnIssue",JSON.parse(res.issues));
          }
          db.close();
        });
      }); 
}

async function GetBooksOPDS(socket){
    console.log("running");
    let res = await utils.doRequest(opds + "/opds-comics/1/");
    let json = xmlParser.toJson(res);
    console.log(res);
    let obj = JSON.parse(json);
    HandleBooks(obj.feed.entry,socket);
}

async function GetIssue(id,page){
    var url = opds + "/opds-comics/comicreader/" + id + "?page=" + page + "&width=1080";
    let res = await utils.doRequest(url);

}

async function HandleBooks(books,socket){
    let finalBooks = [];
    for (var i=0;i<books.length;i++){
        var book = {"title":books[i].title, "id": books[i].id,"updated": books[i].updated, "issues": []};
        GetBookIssues(book,books[i].id);
    }
}
async function GetBookIssues(book,id){
    try {
        var url = opds + "/opds-comics/" + id + "/?displayFiles=true";
        let res = await utils.doRequest(url);
        let json = xmlParser.toJson(res);
        let obj = JSON.parse(json);
        obj.feed.tempId = id;
        book.issues = JSON.stringify(obj.feed.entry);
        book.issueCount = obj.feed.entry.length;
        book.blah=[{"hello":"yues"}];
        MongoClient.connect(urlMongo, function(err, db) {
            if (err) throw err;
            var dbo = db.db("comicbooks");
            dbo.collection("books").findOne({"id": book.id}, function(err, result) {
              if (err) throw err;
              if (result){
                MongoClient.connect(urlMongo, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db("comicbooks");
                    dbo.collection("books").updateOne({"id":book.id},{ $set: {issues: book.issues}}, function(err, res) {
                      if (err) console.log(err);
                      db.close();
                    });
                  });
              } else {
                MongoClient.connect(urlMongo, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db("comicbooks");
                    dbo.collection("books").insertOne(book, function(err, res) {
                      if (err) console.log(err);
                      db.close();
                    });
                  }); 
              }
              db.close();
            });
          });
          /**
        MongoClient.connect(urlMongo, function(err, db) {
            if (err) throw err;
            var dbo = db.db("comicbooks");
            dbo.collection("books").insertOne(book, function(err, res) {
              if (err) console.log(err);
              db.close();
            });
          });
          **/
    } catch(e){
        console.log(e);
    }

}