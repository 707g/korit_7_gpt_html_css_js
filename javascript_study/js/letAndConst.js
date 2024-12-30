var a = 10;
console.log(a); // 10
var a = 20;
console.log(a); // 20
console.log(b); // undefined
var b = 30;
console.log(b); // 30
/*
    호이스팅
    : 선언과 정의가 먼저 실행되는 현상
*/

let c = "c data";               // 일반 변수
console.log(c); // c data
c = "c2 data";
console.log(c); // c2 data

const d = "d data";             // 상수
console.log(d); // d data
