console.log("Buffer");

var buf1=new Buffer.alloc(4);
console.log(buf1);
buf1.write('PESU');
console.log(buf1.toString());
console.log(buf1.length);
//Copy
var buf2=new Buffer.alloc(4);
buf2.write('PES');
console.log(buf2.toString());
buf1.copy(buf2);
console.log(buf2.toString());
//Equals--Compare
var res=buf1.compare(buf2);
if(res<0)
{
	console.log(buf1+"before"+buf2);
}
else if(res==0)
{
	console.log(buf1+" equals "+buf2);
}
else
{
	console.log(buf1+"after"+buf2);
}
console.log("End");



 