var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data', function (chunk) {
    writerStream.write(chunk);
});
readerStream.on('end', function () {
    console.log("Write completed");
});
readerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log("Program Ended");