/**
 * Operators(연산자)
 * 
 * 1. 산술 연산자
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);
console.log('-------------------------');

console.log(10 * (10 + 10));
console.log('-------------------------');

/**
 * Operators(연산자)
 * 2.증가와 감소
 */

let number = 1 ; 
number++;
console.log(number);

number--;
console.log(number);
console.log('-------------------------');

/**
 * 연사자의 위치
 */
let result = 1;

console.log(result);
result = number++; //number를 ++하기 전에 result가 number를 먼저 저장함
console.log(`result: ${result}, number: ${number}`);
console.log('-------------------------');

result = number--;
console.log(`result: ${result}, number: ${number}`);
console.log('-------------------------');

result = ++number;
console.log(`result: ${result}, number: ${number}`);
console.log('-------------------------');

result = --number;
console.log(`result: ${result}, number: ${number}`);
console.log('-------------------------');
/**
 * 숫자 타입이 아닌 타입에 +, -를 사용하면 어떻게 될까?
 */

let sample = '99';
console.log(+sample); //실제 넘버값이 될 수 있는 string에 +를 붙이면 타입이 number로 변환할 수 있다.
console.log(typeof +sample);
console.log('-------------------------');

console.log(sample);
console.log(typeof sample);
console.log('-------------------------');

sample = true;
console.log(+sample); //true라는 boolean값에 해당하는 1로 타입과 값이 변환됨
console.log(typeof +sample);
console.log('-------------------------');

sample = false;
console.log(+sample); //false라는 boolean값에 해당하는 0로 타입과 값이 변환됨
console.log(typeof +sample);
console.log('-------------------------');

sample = '안유진';
console.log(+sample); // NaN: 숫자가 아니다. Not a Number
console.log('-------------------------');

sample = '99';
console.log(-sample);
console.log(typeof -sample);
console.log('-------------------------');

/**
 * Operators(연산자)
 * 3. 할당 연산자(assigment operator)
 * 계산을 한 다음 다시 저장을 한다.
 */

number = 100;
console.log(number);
console.log('-------------------------');

number += 10;
console.log(number);
console.log('-------------------------');

number -= 10;
console.log(number);
console.log('-------------------------');

number *= 10;
console.log(number);
console.log('-------------------------');

number /= 10;
console.log(number);
console.log('-------------------------');

number %= 10;
console.log(number);
console.log('-------------------------');

/**
 *  Operators(연산자)
 * 4. 비교 연산자
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

//1) 값의 비교 -> 굉장히 이상함
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
console.log('-------------------------');

//!=: 다르다
console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log('-------------------------');

//2) 값과 타입의 비교 - 변환되는 값이 같더라도 타입이 다르면 false가 나옴 -> ===
console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
console.log('-------------------------');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log('-------------------------');

/**
 *  Operators(연산자)
 * 5. 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);

console.log(100 >= 1);
console.log(100 <= 1);
console.log('-------------------------');

/**
 *  Operators(연산자)
 * 6. 삼항 조건 연산자(ternary operator)
 */
console.log(10 > 0? '10이 0보다 크다' : '10이 0보다 작다');  
console.log('-------------------------');

/**
 *  Operators(연산자)
 * 6. 논리 연산
 * 1) &&: 모두 true여야 true를 반환한다.
 * 2) ||: 하나만 true여도 true를 반환한다.
 */
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);
console.log('-------------------------');
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);
console.log('-------------------------');
console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);
console.log(10 > 1 && 20 < 2);
console.log('-------------------------');
console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log(10 > 1 || 20 < 2);
console.log('-------------------------');

/**
 *  Operators(연산자)
 * 7. 단축평가(short circuit evaluation)
 * &&를 사용했을 때 좌측이 true이면 우측 값 반환
 * &&를 사용했을 때 좌측이 false이면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true이면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false이면 우측 값 반환
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(true && '아이브');
console.log(false && '아이브');
console.log('-------------------------');

console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log('-------------------------');

/**
 *  Operators(연산자)
 * 8. 지수 연산자
 */
console.log(2**2);
console.log(10**3)
console.log('-------------------------');

/**
 *  Operators(연산자)
 * 9. null 연산자
 */
let name;
console.log(name);

name = name ?? '코드팩토리'; //좌측값이 null이거나 undefined일 때 오른쪽 값을 반환해라
console.log(name);

name = name ?? '아이브';
console.log(name);
console.log('-------------------------');

let name2;
name2 ??= '코드팩토리';
console.log(name2);