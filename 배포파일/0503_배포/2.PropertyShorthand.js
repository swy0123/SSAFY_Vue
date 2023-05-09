// Propery Shorthand (단축 속성명)
// 객체를 정의 할 때 객체의 key값과 value값이 같을경우, 각각 표기하지 않고 한번만 표기.

// ES6 이전
// const id = "ssafy";
// const name = "이시영";
// const age = 31;
// const user = {
//     id: id,
//     name: name,
//     age: age
// }
// console.log(user)

//property shorthand(단축 속성명)
// ES6 이후 - 값의 이름이 같으면 생략 가능
const id = "ssafy";
const name = "이시영";
const age = 32;
const user = {
    id,
    name,
    age
}
console.log(user)
