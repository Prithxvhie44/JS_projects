
// This script demonstrates the use of arrays in JavaScript
var arr= [1,2,3,4,5,"Prithviraj ",true,[]];
console.log(arr);


// Using forEach to iterate over the array and log each value incremented by 2
arr.forEach(function(val){
    console.log(val+2);

})


// Using map to create a new array with each value incremented by 10
var arr1=[1,2,3,4,5];
var m=arr1.map(function(val){
    return val+10;
})

console.log(m);

// Using filter to create a new array with values greater than 2
var f=arr1.filter(function(val){
    return val>2;
})

console.log(f);

var f1=arr1.find(function(val){
    if (val===2){
        return true;
    }
})

console.log(f1);

var i=arr.indexOf(2);
console.log(i);

