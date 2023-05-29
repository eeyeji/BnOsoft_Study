/**
 * 변수(variable) 선언하기
 * 1) var - 더이상 쓰지 않는다
 * 2) let - 재선언 불가능, 재할당 가능
 * 3) const - 재선언 불가능, 재할당 불가능
 */

//1. var
var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

//2. let
let ive ='아이브';
console.log(ive);
/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */
ive = '안유진';
console.log(ive);

//3. const
const newJeans = '뉴진스';
console.log(newJeans);
/**
 * const는 값을 추후 변경할 수 없다
 * 재할당시 에러남
 */
// newJeans = '코드팩토리'; -> 재할당시 에러남


/**
 * 선언과 할당
 * 1) 선언: 변수를 선언하는 것
 * var name; //선언
 * 
 * 2) 할당: 값을 넣어주는 것
 * var name = '코드팩토리'; //할당
 */

let girlFriend;
console.log(girlFriend); //undefined라는 값으로 출력됨 -> 변수가 선언이 되었지만 값이 정의가 되지 않았다라는 뜻
//var과 let는 값을 할당해 주지 않으면 자동으로 초기값으로 undefined로 할당이 됨
//const는 선언할 때 무조건 값을 할당(초기화)해줘야함