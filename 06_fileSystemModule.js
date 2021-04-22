const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(err,files){
//     if (err) {
//         console.log("Error : " + err);
//     } else {
//         console.log("Files : " + files);
//     }
// });

// Reading file
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         console.error(err);
//     }
//     else{
//         console.log("Asynchronous read: " + data.toString());
//     }
// });

// Opening a file
// console.log("Going to open file!");
// fs.open('input2.txt', 'w+', function(err,fd){
//     if (err) {
//         console.log("Error : " + err);
//     }
//     else{
//         console.log("File opened successfully!");
//     }
// });

// Writing in file
// fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
//     if (err) {
//         return console.error(err);
//     }
// //    now reading file
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("Content: " + data.toString());
//     });
// });

// Opening and reading partial file and then closing
var buf = Buffer.alloc(1024);


fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }

    fs.read(fd, buf, 0, buf.length, 12, function(err, bytes){
        if (err){
            console.log(err);
        }
        console.log("Bytes read : " + bytes);
        
      // Print only read bytes to avoid junk.
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }

        // Closing file now
        fs.close(fd, function(err) {
            if (err) {
                console.log(err);
            }
            });
    });
});