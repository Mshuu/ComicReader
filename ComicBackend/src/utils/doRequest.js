const request = require('request');

function doRequest(url){
    return new Promise(function (resolve, reject) {
        request(url, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
            } else {
                console.log(url);
                reject(error);
            }
        });
    });
}

module.exports = doRequest;