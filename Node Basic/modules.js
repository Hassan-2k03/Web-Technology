/* //console module
console.log("Terminal log");
console.error(new Error("Error message"));
console.warn("Warning message");

//timer module
console.time("Timer");
function timer_eg() {
    console.log("Timer module");
}
var tobj = setTimeout(timer_eg, 2000); */

// file system module

var fs = require("fs");
var data = fs.readFileSync('C:\Users\mh192\OneDrive\Documents\Semester 3\Web-Technology\Node Basic\test.txt');
console.log(data.toString());
console.log("Ended");


