var mongo = require('mongodb');
var url = "mongodb://localhost:27017";
var MongoClient = require('mongodb').MongoClient;
var urlMongo = "mongodb://localhost:27017/comicbooks?socketTimeoutMS=90000";

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

const FindOne = (collection,obj) => {
    return new Promise(function (resolve,reject){
        MongoClient.connect(urlMongo, function(err, db) {
            if (err) throw err;
            var dbo = db.db("comicbooks");
            dbo.collection(collection).findOne(obj, function(err, result) {
            if (err) reject(err);
            resolve(result);
            });
        });
    });
}

const UpdateOne = (collection,objSelect,objUpdate) => {
    return new Promise(function (resolve,reject){
        MongoClient.connect(urlMongo, function(err, db) {
            if (err) throw err;
            var dbo = db.db("comicbooks");
            dbo.collection(collection).updateOne(objSelect,objUpdate, function(err, result) {
            if (err) reject(err);
            resolve(result);
            });
        });
    });
}

module.exports = {
    Find: Find,
    InsertOne: InsertOne,
    FindOne: FindOne,
    UpdateOne: UpdateOne
}