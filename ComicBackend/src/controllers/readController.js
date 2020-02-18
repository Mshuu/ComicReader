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
  msg = JSON.parse(msg);
  try {
    let foundComic = await dbModel.FindOne("readstatus",{userId: msg.userId,issueId: msg.issueId});
    console.log(foundComic);
    if (foundComic){
      await dbModel.UpdateOne("readstatus",{userId: msg.userId,issueId:msg.issueId},{ $set: {page: msg.page}});
    }
    if (!foundComic){
      dbModel.InsertOne("readstatus",{userId: msg.userId,issueId: msg.issueId,page: msg.page});
    }
  } catch(e){
    console.log(e);
  }
}

const getSpecificRead = async(msg,socket) => {
  msg = JSON.parse(msg);
  try{
    let result = await dbModel.FindOne("readstatus",{userId: msg.userId,issueId:msg.issueId});
    if (result){
      socket.emit("GotSpecificRead",result.page);
    }
    if (!result){
      socket.emit("GotSpecificRead",0);
    }
  } catch(e){
    console.log(e);
  }

}

module.exports = {
  getReads: getReads,
  updateReads: updateReads,
  getSpecificRead: getSpecificRead
}