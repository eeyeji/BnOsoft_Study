/**
 * Sync theory
 */


/**
 * ● Sync Programming(동기 프로그래밍)
 *   콘솔에 'Hello' 출력 
 *   → 2초가 걸리는 작업 시작 
 *   → 위 작업 시작 후 (작업이 끝나기 전) 바로 'World' 출력 
 *   → 2초가 걸리는 작업 완료 후 '완료' 출력
 */

//오래걸리는 작업
function longWork(){

    //이 코드가 실행이 되는 시점의 현재날짜와 시간 가져오기
    const now = new Date();

    /**
     * milliseconds since epoch
     * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 
     * 밀리초로 반환한다.
     */
                   
    const milliseconds = now.getTime();

    //                                     2초뒤 계산
    const afterTwoSeconds = milliseconds + 2 *1000;

    // 현재  while loop이 실행되는 시간의 milliseconds를 가져옴 < 현재시간이 afterTwoSeconds보다 작은지 확인
    while(new Date().getTime() < afterTwoSeconds){
        //만약 값이 false가 된다면 2초뒤라는 것이 확인!
        //즉, 2초동안 while loop이 계속 실행됨
        //이때, while loop이 실행되는 동안 다른 코드를 전혀 실행할 수 없음

    }

    console.log('완료');
}

console.log('Hello');
longWork();
console.log('World');