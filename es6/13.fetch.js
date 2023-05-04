        // 웹개발을 할때, AJAX 라는 비동기적인 통신 방법을 통해 클라이언트 쪽에서 서버에 추가 정보를 요청하여 가져올수 있게 합니다.
        // fetch API는그런 AJAX 통신 기술의 일종으로 별도의 라이브러리를 추가하지 않더라도 최신 브라우저에 내장되어 있기 때문에, 함수를 JavaScript에서 호출하는 것으로 손쉽게 사용 가능합니다.

        // fetch() 사용법
        // fetch() 함수는 2개의 인자를 받습니다.
        // fetch(url, [options])
        // url (필수) : 접근하고자 하는 url

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((data) => console.log(data));

        // get 방식
        // fetch('TARGET URL') // url 입력, GET메서드임
        //     .then(res => res.json())  //응답 결과를 json으로 파싱
        //     .then(data => {

        //         //***여기서 응답 결과로 실행할 동작을 정의하면 됨***
        //         // [ data.키값 ] 이런 형태로 value 추출 가능 

        //         console.log(data); //응답 결과를 console 창에 출력

        //     })
        //     .catch(err => { // 오류 발생시 오류를 담아서 보여줌
        //         console.log('Fetch Error', err);
        //     });
        // // post 방식  

        // let formData = new FormData();
        // formData.append('key', 'value'); // key-value (키-값)의 형태로 데이터 추가함

        // fetch('TARGET URL', { // url 입력 및 [options] 값 설정
        //     method: 'post',
        //     body: formData  //전송할 데이터 body에 추가
        // })
        //     .then(res => res.json()) //응답 결과를 json으로 파싱
        //     .then(data => {

        //         //***여기서 응답 결과로 실행할 동작을 정의하면 됨***
        //         // [ data.키값 ] 이런 형태로 value 추출 가능 

        //         console.log(data); //응답 결과를 console 창에 출력

        //     })
        //     .catch(err => { // 오류 발생시 오류를 담아서 보여줌
        //         console.log('Fetch Error', err);
        //     });
