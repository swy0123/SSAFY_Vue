// SpreadSyntax (전개구문)
// spread operator는 반복 가능한(iterable) 객체에 적용할 수 있는 문법.
// 배열이나 문자열 등을 풀어서 요소 하나 하나로 전개시킬 수 있다.
const user1 = {id: "swy1"}
const user2 = {id: "swy2"}
const arr = [user1, user2]
console.log(arr)

const copyArr = [...arr];
console.log(copyArr)
const refArr = arr;
console.log(refArr)
console.log(copyArr === arr)
console.log(refArr === arr)
console.log(copyArr == arr)
console.log(refArr == arr)
console.log(JSON.stringify(copyArr) === JSON.stringify(arr))
console.log(JSON.stringify(refArr) === JSON.stringify(arr))

console.log("--------------------------")

user1.id = "ssafy9";
console.log(user1)
console.log(copyArr)

const addArr = [...arr, {id: "ssafy9"}];
console.log(addArr)
addArr.push({id: "ssafy10"})
console.log(addArr)
console.log(addArr.push({id:"qwe"}).toString())

console.log("--------------------------")

let team1 = ["서울", "대전"]
let team2 = ["구미", "광주", "부울경"]
let teamOne = [...team1, ...team2];
console.log(teamOne)
let team3 = ["서울", ...team2, "대전"]
console.log(team3)

const copyUser = {...user1};
console.log(copyUser)

const u1 = {id1: "ssafy1"};
const u2 = {id2: "ssafy2"};
const u = {...u1, ...u2};
console.log(u)

const num = [1, 3, 5, 7];
function plus(a, b, c) {
    return a + b + c;
}
let result = plus(...num);
console.log(result)