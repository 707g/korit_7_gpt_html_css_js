const obj = {
    data1: "d1",
    data2: 10,
    data3: [1, 2, 3, 4],
};

const obj2 = {
    ...obj,
    data2: 20,
};

// 비구조 할당(구조 분해)
// const data1 = obj.data1;
// const data2 = obj.data2;
const {data1: d1, data2: d2} = obj;
console.log(d1, d2);

const nums = [1, 2, 3, 4, 5];
const [n1, n2, n3] = nums;
console.log(n1, n2, n3);

const {data1: dd1, ...obj3} = obj;
console.log(obj3); // { data2: 10, data3: [ 1, 2, 3, 4 ] }

const [n4, n5, ...newNums] = nums;
console.log(newNums); // [ 3, 4, 5 ]
// 배열에서 rest가 쓰일 때는 순서대로만 쓸 수 있다.