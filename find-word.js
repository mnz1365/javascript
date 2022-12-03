var txt = "we are in winter";
var counter = 0;

txt = txt.split(" ");
for(i=0;i<txt.length;i++) {
    if(txt[i] == "winter") {
        counter++;
    } 
}

if(counter > 0) {
    console.log("the word is founded!");
}else {
    console.log("the word is not founded!");
}
counter = 0;