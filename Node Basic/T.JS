/**var i=1;
console.log(i);
var s1=setTimeout(function(){
    i++;
    console.log(i);
    if(i==5){
        clearTimeout(si);
    }
},5000);

var s2=setInterval(function(){
    i++;
    console.log(i);
    if(i==5){
        clearInterval(s2);
    }
},5000); */

/** setImmediate(function A() {
    setImmediate(function B() {
        console.log(1);
        setImmediate(function D() {
            console.log(2);
        });
    });
});

setImmediate(function C() {
    console.log(3);
    setImmediate(function E() {
        console.log(4);
    });
});
console.log("started....");
 */

/**var si=setImmediate(function(){
    console.log(1);
});
console.log(2);
clearImmediate(si); */

const Timeout= setTimeout(function a(){
    console.log("Timeout for 1000ms");
},1000);

Timeout.unref();
console.log("callback not invoked");
Timeout.ref();
