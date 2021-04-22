const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("Total memory : " + totalMemory);

//Template String
// ES6 / ES2015 : ECMAScript 6

console.log(`Total memory   :   ${totalMemory}`);
console.log(`Free memory    :   ${freeMemory}`);