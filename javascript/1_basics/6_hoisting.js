//Hoisting

console.log('Hello');
console.log('World');
console.log('----------------');

// console.log(name); //->에러 안남 / undefined
// var name = '코드팩토리';
// console.log(name);
// 아래와 같이 작성한 것처럼 위 코드가 실행이 된다.
var name;
console.log(name);
name = '코드팩토리';
console.log(name);
/**
 * Hoisting은 무엇인가?
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * let(값을 미리 가져오는 버그를 방지할 수 있음 / let의 특성상 hoisting이 안되는 것처럼 보일 수 있음),
 * const도 hoisting 가능
*/



