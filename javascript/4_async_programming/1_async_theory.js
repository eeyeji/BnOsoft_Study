/**
 * Async_theory(비동기프로그래밍)
 *
 */

function longWork(){
    //2초동안 기다렸다가 왼쪽의 함수가 실행이 된다
    setTimeout(()=>{
        //비동기로 실행되는 함수
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork(); //2초동안 기다리던 중에 아래의 코드가 먼저 실행이 됨
console.log('World');

/**
 * console.log('Hello'); → longWork() → console.log('World'); → console.log('완료');
 * 
 * 비동기 함수인 setTimeout을 실행이 되자마자 thread가 다시 사용이 가능해진다
 */