var utils = require("../utils");
let xmlParser = require('xml2json');
let dbModel = require('../models/dbModel.js');
const opds = "http://l2.mml2.net:2202";


const GetBooksOPDS = async() => {
    try {
        let res = await utils.doRequest(opds + "/opds-comics/1/");
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
        let res = await utils.doRequest(url);
        let json = xmlParser.toJson(res);
        let obj = JSON.parse(json);
        obj.feed.tempId = id;
        book.issues = JSON.stringify(obj.feed.entry);
        book.issueCount = obj.feed.entry.length;
        book.blah=[{"hello":"yues"}];
        let book = await dbModel.FindOne("books",{id: book.id});
        if (book){
            await dbModel.UpdateOne("books",{id: book.id}, { $set: {issues: book.issues}});
        }
        if (!book){
            dbModel.InsertOne("books",{book});
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