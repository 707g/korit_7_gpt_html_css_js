// 객체

const obj = {
    name: "김사과",
    age: 62,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`),
}

obj.print();

const obj2 = {
    name: "김사과",
    age: 62,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`),
}

console.log(obj === obj2); // false: 주소비교
console.log(JSON.stringify(obj) === JSON.stringify(obj2)); // true: 문자열 비교
console.log(typeof JSON.stringify(obj)); // string

/*
    object -> Json  JSON.stringfy(object)
    Json -> object  JSON.parse(json문자열)
    User 객체 생성
    username, password, name, email
*/

const user = {
    username: "",
    password: "",
    name: "",
    email: "",
    hobby: ["축구", "농구", "배구"],
    address: {
        si: "부산광역시",
        gungu: "부산진구"
    },
    printUserInfo: () => console.log("사용자 정보 출력"),
}

user.username = "daan";
user.password = 1234;
user.name = "김사과";
user.email = "daandaan707@gmail.com";

const userJson = JSON.stringify(user); // js -> json으로 변환 시킬 떄 function값은 나타나지 않는다. (key와 value값만 표현)
console.log(user);
console.log(userJson);
// console.log(userJson.name); // 객체가 아닌 문자열이기 떄문에 불가능
const converUser = JSON.parse(userJson);
console.log(converUser.username); // 객체로 다시 만들어 주었기 때문에 사용 가능
console.log(converUser);

const student = {
    name: "김사과",
    age: 62,
    address: "부산 동래구",
}

const key = "age";
const value = 63;

const student2 = {
    ... student,
    [key]: value,
}
console.log(student2);

