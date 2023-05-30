/**
 * funtion -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/2%3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log(typeof((2 * 10 / 2 % 3).toString()));
console.log('----------------');

/**
 * 개발자가 가져야하는 습관 DRY
 * D: Don't
 * R: Repeat
 * Y: Yourself
 * >> 반복하지 말아라!
 */

/**
 * 만약 2가 아니라 3으로 바꾸고 싶다면?
 * >> 함수를 만들어라!
 */

//                파라미터
function calculate(number){
    console.log((number * 10 / 2 % 3).toString());
    console.log(typeof((number * 10 / 2 % 3).toString()));
}
/**
 * 파라미터와 아규먼트의 차이
 * 파라미터: 함수에서 입력 받는 값에 대한 정의를 Parameter라고 한다. -> number
 * 아규미터: 실제 입력하는 값은 argument라고 한다. -> 2
 */
calculate(2);
calculate(4);
console.log('----------------');

function multiply(x, y){
    console.log(x * y);
}

multiply(2, 4);
console.log('----------------');

//default Parameter -> y = 10
function multiply2(x, y = 10){
    console.log(x * y);
}

multiply2(2, 4);
multiply2(2); //y = 10이 적용
console.log('----------------');

/**
 * 반환받기
 * return 받기
 */
function multiply3(x, y){
    return x * y;
}

const result1 = multiply3(2, 4);
console.log(result1);

const result2 = multiply3(4, 8);
console.log(result2);
console.log('----------------');

/**
 * Arrow 함수
 */
const multiply4 = (x, y) => {
    return x * y;
}

console.log(multiply4(3, 4));
console.log('----------------');

//Arrow함수 더 간결하게 쓰는 법
const multiply5 = (x, y) => x * y;

console.log(multiply5(3, 4));
console.log('----------------');

//만약 파라미터가 한개라면
const multiply6 = x => x * 4;
console.log(multiply6(4));
console.log('----------------');

//한단계 복잡한 함수 선언
const multiply7 = x => y => z => `x: ${x}, y: ${y}, z: ${z}`;
console.log(multiply7(2)(5)(6));
console.log('----------------');

//위의 경우를 일반함수로 선언할 경우
function multiply8(x){
    return function(y){
        return function(z){
            return `x: ${x}, y: ${y}, z: ${z}`;
        }
    }
}
console.log(multiply8(3)(4)(5));
console.log('----------------');

//일반 함수 선언을 변수 선언하듯이 하는 방법
const multiplyTwo = function(x, y){
    return x * y;
}
console.log(multiplyTwo(4, 5));
console.log('----------------');

const multiplyThree = function(x, y, z){
    console.log(arguments);
    return x * y * z;
}
console.log(multiplyThree(4, 5, 6));
console.log('----------------');

//...arguments: 무한하게 parameter를 받을 수 있다.
const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3,4,5,6,7,8,9,10));
console.log('----------------');

//즉시 실행 정의 함수(immediately invoked function)
(function(x, y){
    console.log(x * y);
})(4, 5);
console.log('----------------');

console.log(typeof multiply);

//multiply라는 함수가 Object인가?
//instanceof: 좌측에 있는 값이 오른쪽에 있는 값과 같은 타입인가?
//       비교하려는 값           
console.log(multiply instanceof Object);