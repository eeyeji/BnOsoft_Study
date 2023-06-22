// /**
//  * Callback
//  */

// function waitAndRun(){
//     setTimeout(()=>{
//         console.log('끝');
//     }, 2000);
// }

// waitAndRun();

// //만약에 2초를 기다린 다음에 
// //또 2초를 기다리고 
// //마지막으로 또 2초를 기다린 다음에 
// //함수를 실행하고 싶은 경우

// function waitAndRun2(){ //좋지 않은 코드임 -> 가독성 문제
//     setTimeout(()=>{
//         console.log('1번 콜백 끝');
//         setTimeout(()=>{
//             console.log('2번 콜백 끝');
//             setTimeout(()=>{
//                 console.log('3번 콜백 끝');
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }

// waitAndRun2();

/**
 * Promise
 * >> 위의 문제를 해결하기 위해 나옴
 */
//                                  파라미터 이름은 바뀌어도 되지만 순서는 바뀌면 안됨(기능이 다르기 때문)
// const timeoutPromise = new Promise((resolve, reject)=>{
// //   timeoutPromise는 Promise라는 객체이다    
//     setTimeout(()=>{
//         resolve('완료');
//     }, 2000);
// });

// //                  resolve함수에서 넣어준 값이 res라는 파라미터에 들어가게 됨
// timeoutPromise.then((res)=>{
//     //resolve함수가 실행이 되는 순간 then이라는 메소드가 실행이 된다.
//     console.log('-------then-------');
//     console.log(res);
// });


//------------------------------------------------------------------
//Promise를 반환하는 함수 만들기

//------------------------------------------------------
// //resolve - then
// const getPromise = (seconds)=>new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('완료');
//     }, seconds*1000);
// });

// //1초 기다리는 함수 넣어보기
// getPromise(3)
//     .then((res)=>{
//         console.log('----first then----')
//         console.log(res);

//         //1초를 또 기다렸다가 Promise를 실행하고 싶은 경우
//         // return으로 원하는 Promise 반환하면 된다.
//         return getPromise(3);
//         //이후 Promise가 끝나는 시점을 감지하고 싶다면
//     }).then((res)=>{
//         console.log('----second then----')
//         console.log(res);

//         return getPromise(4);
//     }).then((res)=>{
//         console.log('----third then----')
//         console.log(res);

//         return getPromise(4);
//     });

//------------------------------------------------------
// //reject - catch
// //         에러가 났을 때

// const getPromise = (seconds)=>new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('에러');
//     }, seconds*1000);
// });


// getPromise(3)
//     .then((res)=>{
//         console.log('----first then----')
//         console.log(res);
//     })
//     .catch((res)=>{
//         console.log('----first catch----');
//         console.log(res);
//     });

//---------------------------------------------------------
// //따라서

// const getPromise = (seconds)=>new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //조건
//         if(xxx){
//             resolve('성공');
//         }else{
//             reject('에러');
//         }

//     }, seconds*1000);
// });

//----------------------------------------------------------
//finally
const getPromise = (seconds)=>new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('에러');
    }, seconds*1000);
});


getPromise(3)
    .then((res)=>{
        console.log('----first then----')
        console.log(res);
    })
    .catch((res)=>{
        console.log('----first catch----');
        console.log(res);
    })

    //finally는 콜백함수의 아규먼트를 받지 않는다.
    .finally(()=>{
        //대신에 then이든 catch든 무조건 실행됨.
        console.log('-------finally-------');
    });


// //비동기의 특성상 
// //서로 의존하고 있다면 순서대로 실행되지만,
// //서로 의존하고 있지 않다면 동시에 실행시켜 속도를 더 빠르게 할 수 있다.
// Promise.all([
//   //실행하고 싶은 Promise대로 넣으면 됨
//   //이때 가장 느린 함수 기준으로 then or catch가 불린다. 
//     getPromise(1),
//     getPromise(4),
//     getPromise(1),  
// ]).then((res)=>{
//    console.log(res); 
// });