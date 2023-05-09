// Arrow Function (화살표 함수)
// function name(param) { }
// 위의 형식을 축약.
// 함수의 이름이 없는 익명함수 이므로 반드시 변수에 담아서 사용.
// const name = (param) => { };

// 매개변수 따른 설정
// () => {}; // 매개변수가 없을 경우.
// (param) => {}; // 매개변수가 한개 있을 경우. (param)의 소괄호 생략 가능.
// (param1, param2) => {}; // 매개변수가 여러개 있을 경우. (param1, param2)의 소괄호 생략 불가능.

// function body 설정.
// body의 내용이 한줄일 경우.
// (x) => {
//   return x + 10;
// };
// body의 내용이 한줄일 경우 {} 생략 가능하고 자동으로 결과값이 return된다. 위와 동일.
// (x) => x + 10;

// object return시 () 사용.
// () => {
//   return { id: "ssafy" };
// };
// () => ({ id: "ssafy" });

// // body가 여러줄일 경우 {}, return 생략 불가.
// (x) => {
//   const y = x + 100;
//   return y;
// };

function fun1(){
    return 100;
}
let result = fun1();
console.log(result)

const fun2 = ()=>{return 200};
result = fun2();
console.log(result)

function fun3(x) {
    return x+100;    
}
result = fun3(10);
console.log(result)

const fun4 = x=>{return x+200};
result = fun4(20);
console.log(result)

function fun5(x, y) {
    return x+y+100;    
}
result = fun5(10, 5);
console.log(result)

const fun6 = (x, y)=>x+y+200;
result = fun6(20, 4);
console.log(result)


function fun7() {
    return{
        id:"ssafy",
        name:"이시영"
    }
}
let user=fun7()
console.log(user.id)

let fun8 = () => ({id:"ssafy", name:"이시영"})
user = fun8();
console.log(user.id)



// Arrow Function에서는 this가 바인딩 되지 않음.
const id = "ssafy";
const name = "이시영";
const age = 32;
const users = {
    id,
    name,
    age,
    // info: function(){
    //     console.log(this.name + "("+this.id+") 나이 : "+this.age)
    // }
    //-----------undifined 출력
    info: ()=>{
        //여기서 this는 window 객체를 가리킴
        console.log(this.name + "("+this.id+") 나이 : "+this.age)
    }
}
console.log(users)
users.info()














// //한 줄
// fetch()
// .then(response=>response.json())
// .then(date=>make(date))

// //두 줄 이상
// fetch()
// .then(response=>{console.log(response); return response.json()})
// .then(date=>make(date))