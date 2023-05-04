//프로미스 생성 
const fetch = function (b) {
  return new Promise(function (resolve, reject) {
    console.log("aaaaa");
    // http 프로토콜을 이용하여 서버랑 통신
    if (b) {
      // 성공한다면 받은 데이타를 resolve 의 인자로 넘김다
      resolve("인증됨");
    } else {
      // 실패한다면 원인 코드를 reject 의 인자로 넘김다
      reject("인증안됨");
    }
  });
}
//프로미스 실행 
fetch(true)
  .then(function (result) {
    console.log(result); // result  인증됨 
  })
  .catch(function (err) {
    console.log(err);// err   인증안됨 
  });

console.log("finallllllllllllll");
