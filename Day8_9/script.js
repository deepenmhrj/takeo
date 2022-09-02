const arr = [1, 3, 4, 5];

const filterOutput = arr.filter((value) => value > 3);

console.log(filterOutput);

const reduceOutput = arr.reduce((acc, currentValue) => { return acc + currentValue }, 0);

console.log(reduceOutput);