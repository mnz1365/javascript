var x = [3,4,45,67,4,32,233,454,34,2];
var lower = 0;
var greater = 0;
var counter = 0;

for(i=0;i<x.length;i++) {
    for(j=0;j<x.length;j++) {
        if(x[i] > x[j]) {
            counter++;
        }
    }
    if(counter == 0) {
        lower = x[i];
    }
    counter = 0;
}

for(i=0;i<x.length;i++) {
    if(x[i]>greater) {
        greater = x[i];
    }
}

console.log(x);
console.log("the lowest number in array: "+lower+" the greatest number in array "+greater);