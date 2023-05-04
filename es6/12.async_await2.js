// 비동기 호출에서의 문제점

// var authorize1 = function () {
//     var promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('끝1~~~~~~~');
//         }, 3000);
//     });
    

//     // promise 비동기 호출
//     promise.then((n) => console.log(n));
//     // end1이 먼저 호출
//     console.log("end1..........");

//     // // 해결책 1) 비동기 문제 해결을 위해 then 콜백함수에서 구현
//     // promise.then((n) => {
//     //     console.log(n);
//     //     console.log("end1..........");
//     // });

// }
// authorize1();


// 해결책 2) async await 호출방식
//await 키워드는 async 키워드를 이용하여 생성한 함수 안에서 쓸수 있고 이를 만나면 프라미스가 완료 될때까지 기다린다.
let authorize2 = async function () {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('resolve~~~~~~~');
            reject('reject~~~~~~~~~');
        }, 3000);
    });

    //console.log(promise);

    // promise 적 호출
    try {
        let result = await promise;

        console.log(result);
        console.log("end2..........");
    } catch (err) {
        console.log("err..........");
        console.log(err)
    }
}

authorize2();

