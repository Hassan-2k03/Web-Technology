/* var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("HTTP Module");
}).listen(8080);
console.log("Server running at http://localhost:8080/");
 */
//url 

var url = require('url');
var adr = 'http://localhost:8080/pesu.htm?year=2023&month=october';
var q = url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query; 
console.log(qdata.month);
console.log(qdata.year);
