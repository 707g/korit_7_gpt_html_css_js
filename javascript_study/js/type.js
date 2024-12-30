var name = "김사과";
console.log(name); // 김사과
console.log(typeof name); // string
var age = 62;
console.log(age); // 62
console.log(typeof age); // number
var address;
console.log(address); // undefined
console.log(typeof address); // undefined
address = 10;
console.log(address); // 10
console.log(typeof address); // number
address += "10";
console.log(address); // 1010
console.log(typeof address); // string
address = null;
console.log(address); // null
console.log(typeof address); // object
address = {
    si: "부산광역시",
    gungu: "부산진구"
};
console.log(address); // { si: '부산광역시', gungu: '부산진구' }
console.log(typeof address); // object

/*
    number(숫자 - 정수, 실수)
    string(문자열)
    boolean(논리 - 참, 거짓)
    object(객체) - null
    undefined(type x)
    NaN(Not a Number)
*/