/**
 * copy by value: 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy by reference다
 */

let original = '안녕하세요';
let clone  = original;

console.log(original);
console.log(clone);
console.log('---------------------------------------');

clone += ' 안유진입니다.';
console.log(original);
console.log(clone);
//clone만 바꿨기때문에 original은 그대로 -> 1)
console.log(original === clone);
console.log('---------------------------------------');

let originalObj = {
    name: '안유진',
    group: '아이브',
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);
console.log('---------------------------------------');

cloneObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);
//cloneObj만 바꿨는데 originalObj도 바뀜 -> 2) -> 같은 메모리 공간을 참조하기 때문에
console.log(originalObj === cloneObj);
console.log('---------------------------------------');

originalObj = {
    name: '최지호',
    group: '코드팩토리',
};
cloneObj = {
    name: '최지호',
    group: '코드팩토리',
};

console.log(originalObj === cloneObj);
//Object안의 값이 같다고 해서 같은 값이라고 인식하는 것이 아니다. -> 다른 메모리 공간을 참조하기 때문에
console.log('---------------------------------------');

/**
 * Spread Operator
 * array에만 존재하는 것이 아니라 Object에서도 존재한다.
 */
const yuJin1 = {
    name: '안유진',
    group: '아이브',
};

const yuJin2 = yuJin1;

const yuJin3 = {
    name: '안유진',
    group: '아이브',
};

console.log(yuJin1 === yuJin2);
console.log(yuJin1 === yuJin3);
console.log(yuJin2 === yuJin3);

const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4); //copy by value
console.log(yuJin3 === yuJin4);

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리', //덮어씜
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [
    10,
    ...numbers,
]
console.log(numbers2);

