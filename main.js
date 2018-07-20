///TEST FILE For Sort Function
another = require('./index.js');
arr = [];


for( i =0; i < 10; i++) {
    arr.push(Math.round(Math.random()*10));
}

console.log('Random Array')

arr.forEach(element => {
   console.log(element); 
});

console.log('Sorted Array');

sortedArr = another.sort(arr);

sortedArr.forEach(element=> {
    console.log(element);
});