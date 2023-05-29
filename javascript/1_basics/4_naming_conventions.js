/**
 * Naming Conventions(이름 짓는 법)
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용할 수 있다.
 * 2) 특수기호는 언더스코어(_)와 달러($)를 사용할 수 있다.
 * 3) 숫자로 이름을 시작할 수 없다.
 *      1Name, 2Hello -> x
 * 4) 키워드는 변수명으로 사용할 수 없다.
 *      var var = 'hi'; -> x | var name = 'var' -> o
 */

let codefactory = '코드팩토리';
var $ive = '아이브';
const _yuJin = '안유진';

console.log('codefactory');
console.log('$ive');
console.log('_yuJin');

// let 1name = 'no';   -> x
// let const = 'impossible';  -> x

/**
 * Naming Convention 2 (에러는 나지 않지만 개발자들과의 약속)
 * 1) camelCase(낙타표기법): 대부분의 언어에서 많이 사용 
 * 2) snake_case: 띄어쓰기가 있을 때 _ 사용, 파이썬같은 언어에서 사용 
 * 3) PascalCase: C# 같은 마이크로소프트 계열의 언어에서 사용함
 */

const anYuJin = '안유진';
console.log(anYuJin);