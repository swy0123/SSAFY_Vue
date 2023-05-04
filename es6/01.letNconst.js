// let 예약어는 한번 선언한 똑같은 변수를 재선언할 수 없다.
// let a = 10;
// let a = 2

// const 예약어는 한번 할당한 값을 변경할 수 없다.
// const b = 20;
// b = 30; // Uncaught TypeError: Assignment to constant variable.

// 단 객체 { } 또는 배열 [ ]로 선언했을 경우 객체의 속성과 배열의 요소는 변경 가능.
const user = {
  name: '이세준',
  age: 25,
};
console.log(user.name); // 이세준
user.name = '홍길동';
console.log(user.name); // 홍길동

const num = [];
console.log(num); // []
num.push(10);
console.log(num); // [10]

// var의 유효범위 : 블록 단위로 제한, 함수 스코프(function scope)
var x = 100;
function print() {
  var x = 200;
  console.log(x);
}
print();
console.log(x);

// 문제는 for에서의 범위
var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log('i = ' + i);

// 해결 : let
// 호이스팅에서 제외.
var j = 10;
for (let j = 0; j < 5; j++) {
  // let 변수 j의 유효범위가 {}로 제한
  console.log(j);
}
console.log('j = ' + j);
