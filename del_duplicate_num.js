var n1 = [1,4,6,8,9,7,3,56,8,9,6,4,2];
var n2 = [];
var counter = 0;

for(i=0;i<n1.length;i++) {
    for(j=0;j<n1.length;j++) {
        if(i != j) {
            if(n1[i] == n1[j]) {
                counter = counter + 1;
            }
        }
    }
    if(counter == 0) {
        n2.push(n1[i]);

    } else {
        counter = 0;
    }
}

console.log(n2);