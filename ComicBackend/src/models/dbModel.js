var mongo = require('mongodb');
var url = "mongodb://localhost:27017";
var MongoClient = require('mongodb').MongoClient;
var urlMongo = "mongodb://localhost:27017/comicbooks";

const InsertOne = (collection,object) => {
    mongo.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("comicbooks");
        dbo.collection(collection).insertOne(object, function (err, res) {
            if (err) throw err;
            console.log("inserted");
            db.close();
        });
    });
}

const Find = (collection,obj) => {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(urlMongo, function (err, db) {
            if (err) throw err;
            var dbo = db.db("comicbooks");
            dbo.collection(collection).find(obj).toArray(function (err, result) {
                if (err) reject(error);
                resolve(result);
                db.close();
            });
        });
    });
}

module.exports = {
    Find: Find,
    InsertOne: InsertOne
}