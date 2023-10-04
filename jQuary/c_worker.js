var i = 0;
function timecout() {
    i+=1;
    postMessage(i);
    setTimeout("timeout()", 1000);
}
timecout();