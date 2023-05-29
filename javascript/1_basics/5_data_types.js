/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과    -> 다른 타입들이 구성이 될 수 있는 가장 작은 단위 : 숫자, 알파벳...
 * 한개의 오브젝트 타입이 있다.
 * 
 * Primitive Type
 * 1) 숫자(Number)
 * 2) 문자열(String)
 * 3) Boolean(불리언: 참과 거짓)
 * 4) undefined(언디파인드)
 * 5) null (널)
 * 6) Symbol(심볼)
 * 
 * Object(객체) Type
 * 7) Object, Funcion, Array
 */

//1) Number
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-----------------------');

//무한대 값
const infinity = Infinity;
//마이너스 무한대 값
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

//2)String 타입
const codeFactory = '코드팩토리';
console.log(typeof codeFactory);
console.log('-----------------------');

//글자 안에 ''를 넣고 싶을 때 - ""를 넣고 싶을 때는 반대로 ''안에 ""를 쓰면 됨
const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Templage Literal
 
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시(\)를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 *    ->  큰따옴표, 작음따옴표 다 넣고 싶을 때 앞에 \' or \" 쓰기
 *    -> ``를 쓰면 입력한 그대로 출력 
 */
const iveYuJin1 = '아이브\n안유진'
const iveYuJin2 = '아이브\t안유진'
const iveYuJin3 = '아이브\\안유진'
const iveYuJin4 = '아이브\t\'안유진\''
const iveYuJin5 = '아이브\t\"안유진\"'

console.log(iveYuJin1);
console.log(iveYuJin2);
console.log(iveYuJin3);
console.log(iveYuJin4);
console.log(iveYuJin5);

const iveAnYuJin = `아이브 "안유진"`
console.log(iveAnYuJin);
console.log(typeof iveAnYuJin);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);
console.log('-----------------------');

//3)Boolean 타입
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('-----------------------');

/**
 * 4)undefined 타입
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는 건 지양해야한다.
 */
let noInt; // let noInt = undefined;
console.log(noInt);
console.log(typeof noInt);
console.log('-----------------------');

/**
 * 5) null 타입
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용된다.
 * -> typeof 실행시 object로 나오는 것은 일종의 버그(bug)
 */
let init = null;
console.log(init);
console.log(typeof init);
console.log('-----------------------');

/**
 * 6) Symbol 타입
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 == test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 == symbol2);
console.log('-----------------------');

/**
 * 7) Object 타입
 * 
 * Map이라는 타입과 매우 비슷하다.
 * 키:벨류의 쌍으로 이루어져 있다.
 * key:value
 */
const dictionary = {
    red:'빨간색',
    orange:'주황색',
    yellow:'노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);
console.log('-----------------------');

/**
 * Array 타입 
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */
const iveMembersArray = [
    '안유진', 
    '가을',
    '리즈',
    '이서',
    '장원영',
    '레이'
]

console.log(iveMembersArray);

/**
 * index
 * 0부터 시작
 * 1씩 올라감
 */
console.log(iveMembersArray[0]);

//특정 인덱스의 값 변경하는 법
iveMembersArray[0] = '코드팩토리';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시 한다. C
 * 
 * dynamic typing - > 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다. JS
 */