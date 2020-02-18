const dbModel = require('../models/dbModel.js');

const GetHome = async(socket) => {
    try {
        let result = await dbModel.Find("books",{});
        socket.emit("GotHome",result);
    } catch(e){
        console.log(e);
    }
}

module.exports = {
    GetHome: GetHome
}