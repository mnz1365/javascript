function replaceIt(myword) {
    var txt = "hello my name is john";
    var newTxt = "";
    txt = txt.split(" ");
    for(i=0;i<txt.length;i++) {
        if(txt[i] == "john") {
            newTxt += myword;
        } else {
            newTxt += txt[i];
        }
        if(txt.length > i+1) {
            newTxt += " ";
        }
    }
    
    console.log(newTxt);

}

replaceIt("joe");