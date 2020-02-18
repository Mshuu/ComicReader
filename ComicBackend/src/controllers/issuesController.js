let dbModel = require('../models/dbModel.js');

const RequestIssue = async(id,socket) => {
    try {
        let result = await dbModel.FindOne("books",{id: id});
        if (result){
            socket.emit("ReturnIssue",JSON.parse(res.issues));
        }
    } catch(e){
        console.log(e);
    }
}
module.exports = {
    RequestIssue: RequestIssue
}