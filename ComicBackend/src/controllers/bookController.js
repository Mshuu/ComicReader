var utils = require("../utils");
let xmlParser = require('xml2json');
let dbModel = require('../models/dbModel.js');
const opds = "http://opds.mml2.net:2202";


const GetBooksOPDS = async() => {
    try {
        let res = await utils.doRequest(opds + "13408");
        let json = xmlParser.toJson(res);
        let obj = JSON.parse(json);
        HandleBooks(obj.feed.entry);
    } catch(e){
        console.log(e);
    }
}
const HandleBooks = (books) => {
    for (var i=0;i<books.length;i++){
        var book = {"title":books[i].title, "id": books[i].id,"updated": books[i].updated, "issues": []};
        GetBookIssues(book,books[i].id);
    }
}

const GetBookIssues = async(book,id) => {
    try {
        let url = opds + "/opds-comics/" + id + "/?displayFiles=true";
        let res = await utils.doRequest(url);
        let json = xmlParser.toJson(res);
        let obj = JSON.parse(json);
        obj.feed.tempId = id;
        book.issues = JSON.stringify(obj.feed.entry);
        book.issueCount = obj.feed.entry.length;
        book.blah=[{"hello":"yues"}];
        let result2 = await dbModel.FindOne("books",{id: book.id});
        if (result2){
            await dbModel.UpdateOne("books",{id: book.id}, { $set: {issues: book.issues}});
        }
        if (!result2){
            dbModel.InsertOne("books",book);
        }

    } catch(e){
        console.log(e);
    }
}

module.exports = {
    GetBooksOPDS: GetBooksOPDS,
    HandleBooks: HandleBooks,
    GetBookIssues: GetBookIssues
}