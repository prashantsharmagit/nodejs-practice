var x=;
//Check error
var url = "http://mylogger.io/log";

function log(message){
    // send an http request
    console.log(message);
}

module.exports.log = log;       //module.exports will export log as a function not as an object
// console.log(module);
