const dbModel = require('../models/dbModel.js');

const getReads = async(id,socket) => {
  try {
    let result = await dbModel.Find("readstatus", {
      userId: parseInt(id)
    });
    socket.emit("GotReads", result);
  } catch (e) {
    console.log(e);
  }
}

const updateReads = async(msg) => {
  console.log("reading");
  msg = JSON.parse(msg);
  try {
    let foundComic = await dbModel.FindOne("readstatus",{userId: msg.userId,issueId: msg.issueId});
    console.log(foundComic);
    if (foundComic){
      await dbModel.UpdateOne("readstatus",{userId: msg.userId,issueId:msg.issueId},{ $set: {page: msg.page}});
    }
    if (!foundComic){
      await dbModel.InsertOne("readstatus",{userId: msg.userId,issueId: msg.issueId,page: msg.page});
    }
  } catch(e){
    console.log(e);
  }
}


module.exports = {
  getReads: getReads,
  updateReads: updateReads
}