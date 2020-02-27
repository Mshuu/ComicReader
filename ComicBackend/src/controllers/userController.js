const dbModel = require('../models/dbModel.js');

const updateOPDS = async(msg2) => {
    const msg = JSON.parse(msg2);
    try {
        let foundUser = await dbModel.FindOne("users",{userId: msg.userId});
        if (foundUser){
            await dbModel.UpdateOne("users",{userId: msg.userId}, { $set: {opds: msg.opds}});
        }
        if (!foundUser){
            dbModel.InsertOne("users",{userId: msg.userId,opds: msg.opds});
        }
    } catch (e) {
      console.log(e);
    }
}

const giveOPDS = async(msg,socket) => {
    console.log(msg);
    try{
        let foundUser = await dbModel.FindOne("users",{userId: msg});
        if (foundUser){
            console.log(foundUser)
            socket.emit("GotOPDS",foundUser.opds);
        }
    } catch(e){
        console.log(e);
    }
}

module.exports = {
    updateOPDS: updateOPDS,
    giveOPDS: giveOPDS
}
  