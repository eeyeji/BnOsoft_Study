/**
 * 타입 변환
 * Type Conversion
 * 
 * 1)명시적: 이 타입을 저 타입으로 바꾸라라고 강제로 명령하는 듯한 느낌
 * 2)암묵적
 */

let age = 32; //age의 타입은 number

//명시적으로 타입변환
//age의 타입을 number -> string으로 변환하는 방법
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
console.log('----------------------');

//암묵적으로 타입변환
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); //2가 String타입으로 변환됨
console.log('98' * 2); //String에는 *라는 개념이 없기 때문에 98을 암묵적으로 number 타입으로 변환함
console.log('98' - 2); //String에는 -라는 개념이 없기 때문에 98을 암묵적으로 number 타입으로 변환함
console.log('----------------------');

/**
 * 명시적 변환 몇가지 더 배우기
*/
//String타입으로 변환
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());
console.log('----------------------');

//number 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0')); //정수로 변환
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); //실수로 변환
console.log(typeof +'1', +'1');
console.log('----------------------');

/**
 * boolean 타입으로의 변환
 */
console.log(!'x'); //String''안에 값이 들어있으면 boolean 기준으로 봤을 때 true이다.
console.log(!!'x');
console.log(!!''); //String''안에 값이 없으면 boolean 기준으로 봤을 때 false 출력
console.log('----------------------');

console.log(!!0); //숫자 0은 boolean 기준으로 false를 출력한다.
console.log(!!'0');
console.log('----------------------');

console.log(!!'false'); // true
console.log(!!false); // false
console.log(!!undefined); //undefined 값은 실제 boolean으로 변경했을 때 false로 출력된다.
console.log(!!null); // null도 false로 출력
console.log('----------------------');

console.log(!!{}); // object는 값이 들어있든 안들어있든 무조건 true
console.log(!![]); // array도 값이 들어있든 안들어있든 무조건 true
console.log('----------------------');

/**
 * 1) 아무 글자도 없는 String
 * 1) 값이 없는 경우 - null, undefined...
 * 3) 0
 * 
 * >> 모두 false를 반환한다
 */