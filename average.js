var nums = [3,4,5,6,7,897,21,54,442,4];
var average = 1;
var sum = 0;

for(i=0;i<nums.length;i++) {
    sum += nums[i];
}

average = sum / nums.length;

console.log(average);