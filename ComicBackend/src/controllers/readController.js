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

module.exports.getReads = getReads;