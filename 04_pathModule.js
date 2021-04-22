
const path = require('path');

var bac = path.basename('D:/QAIT/NodeJS Practice/01_app.js');
var currentFile = path.parse(__filename);
var currentFile1 = path.format(currentFile);
console.log(bac);
console.log(currentFile);
console.log(currentFile1);