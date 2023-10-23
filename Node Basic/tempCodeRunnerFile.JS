var s1=setTimeout(function(){
    i++;
    console.log(i);
    if(i==5){
        clearTimeout(si);
    }
},5000);
