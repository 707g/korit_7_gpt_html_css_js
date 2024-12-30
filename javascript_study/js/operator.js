/*
    [연산자]

    1) 산술 연산자
        : +, -, *, /, %, **(제곱)
*/
console.log(5 ** 2);

/*
    2) 증감 연산자
        : ++, --

    3) 비교 연산자
        : <, <=, >, >=, ==, !=, ===, !==
        - javascript의 특징은 기본적으로 변수의 타입이 정해지지 않음
*/
console.log(1 == 1); // true
console.log(1 == "1"); // true: 타입 검사 x
console.log(1 === "1"); // false: 타입 검사 o
console.log(1 != "1") // false: 타입 검사 x
console.log(1 !== "1") // true: 타입 검사 o

/*
    4) 논리 연산자
        : &&, ||

            - 단축 평가

            논리 자료 값 || anything
            논리 자료 값 === true   => true
            논리 자료 값 === false  => anything

            논리 자료 값 && anything
            논리 자료 값 === true   => anything
            논리 자료 값 === false  => false

            null 병합 연산
            anything1 ?? anything2
            좌항(anything1) === null || 좌항(anything1) === undefined   => 우항(anything2)
            좌항(anything1) !== null && 좌항(anything1) !== undefined   => 좌항(anything1)
*/
console.log(1 === 1 || "김사과"); // true
console.log(1 !== 1 || "김사과"); // 김사과
console.log(1 === 1 && "김사과"); // 김사과
console.log(1 !== 1 && "김사과"); // false

console.log(null ?? "김사과"); // 김사과
console.log("김사과" ?? "이망고"); // 김사과

/*
    Not 연산
    !, !!

*/
console.log("=========== Not 연산 =============");
console.log(!""); // true
console.log(!0); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(![]); // false: 배열은 내부에 값이 없더라도 배열의 주소는 존재하기 때문에 true
console.log(typeof []);
console.log(![].length); // true

var name = "김사과";
if (!name) {
    console.log("이름이 비었습니다.");
}
if (!!name) {
    console.log("이름이 비어있지 않습니다.");
}
