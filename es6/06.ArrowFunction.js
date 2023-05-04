
// arrow function (화살표 함수)
// function(param) {code} 형태를 축약
// (param) => {code}
// 함수 이름이 없는 익명 함수 이므로 사용시 변수에 담아서 사용.
// (param) => {code};
// param => {code};
// () => {code};
// () => code;
// () => ({key: value});
const func1 = function () {
  console.log('익명 함수');
};
func1();

const func2 = () => {
  console.log('화살표 함수');
};
func2();

const func3 = function (num) {
  console.log('익명 함수', num);
};
func3(3);

const func4 = (num) => {
  console.log('화살표 함수1', num);
};
func4(4);

const func5 = num =>
  console.log('화살표 함수', num);
;
func5(5);

const func6 = function (num1, num2) {
  console.log('익명 함수', num1, num2);
};
func6(6, 7);

const func7 = (num1, num2) => {
  console.log('화살표 함수', num1, num2);
};
func7(6, 7);

// 불가능.
// const func8 = num1, num2 => {
//   console.log('화살표 함수', num1, num2);
// };
// func8(6, 7);

const func8 = function (num) {
  return num * num;
};
console.log(func8(10));

const func9 = (num) => {
  return num * num;
};
console.log(func9(10));

const func10 = (num) => num * num;
console.log(func10(10));

// parameter와 화살표 사이에 개행이 불가능.
// 문법적으로 틀렸기 때문에 prettier에 의해 자동 정렬이 안된다.
// const func11 = num
// => num * num;
// console.log(func11(10));

// 아래는 가능. (prettier에 의해서 자동으로 정렬이 된다.)
const func12 = (num) => (
  num * num
);
console.log(func12(9));
