/*
    배열

*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers);
}

for (let num of numbers) {
    console.log(num);
}

numbers.forEach((num) => console.log(num));

numbers.push(10);
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers.pop()); // 10
console.log(numbers.includes(5)); // true   // 값을 포함하고 있는지 확인(java: contains)
console.log(numbers.indexOf(5)); // 4       // 값의 위치(index)
console.log(numbers.lastIndexOf(4)); // 3   // 뒤에서부터 값의 위치 (index)
console.log(numbers.concat([11, 12, 13, 14, 15])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]    // 두 배열의 병합
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNumbers = numbers.concat([11, 12, 13, 14, 15]);
console.log(newNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]
const newNumbers2 = [ ...numbers, 11, 12, 13, 14, 15];
console.log(newNumbers2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]
const newNumbers3 = numbers.slice(5);
console.log(newNumbers3); // [ 6, 7, 8, 9 ]
const newNumber4 = numbers
.slice(0, numbers.indexOf(4))
.concat(numbers.slice(numbers.indexOf(4) + 1));
console.log(newNumber4); // [1, 2, 3, 5, 6, 7, 8, 9]
const newNumber5 = numbers.splice(3, 1);
console.log(newNumber5); // [ 4 ]
console.log(numbers); // [1, 2, 3, 5, 6, 7, 8, 9]
const newNumber6 = numbers.splice(4, 2, 11, 12, 13);
console.log(newNumber6); // [ 6, 7 ]
console.log(numbers); // [1, 2, 3, 5, 11, 12, 13, 8, 9]
numbers.splice(4, 0, 20, 21);
console.log(numbers); // [1, 2, 3, 5, 20, 21, 11, 12, 13, 8, 9]