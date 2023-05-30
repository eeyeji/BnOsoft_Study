/**
 * Methods(methods: 클래스안에 귀속되는 함수들을 지칭)
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]
console.log(iveMembers);
console.log('-------------------------------------------------------------------');
/**
 * push()
 * 실행하는 대상 array의 마지막에 값을 추가할 수 있다.
 * 새롭게 변경된 array의 길이를 반환한다.
 */

//iveMembers.push('코드팩토리'); //직접적으로 변경
console.log(iveMembers.push('코드팩토리')); //변경된 새로운 array의 길이 출력
console.log(iveMembers);
console.log('-------------------------------------------------------------------');

/**
 * pop()
 * 파라미터를 넣을 필요없이 바로 실행
 * 마지막 element를 삭제하는 데에 사용
 * 그리고 그 삭제된 값을 반환해주는 것이 pop()의 기능
 */
console.log(iveMembers.pop());
console.log(iveMembers);
console.log('-------------------------------------------------------------------');

/**
 * shift()
 * 첫번째 element를 삭제하는 데에 사용
 * 그리고 그 삭제된 첫번째 값을 반환해주는 것이 shift()의 기능
 */
console.log(iveMembers.shift());
console.log(iveMembers);
console.log('-------------------------------------------------------------------');

/**
 * unshift()
 * 첫번째 위치에 값을 넣어줌
 * 새로 변경된 array의 길이를 반환
 */
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);
console.log('-------------------------------------------------------------------');

/**
 * splice()
 * 첫번째 값: 어떤 인덱스부터 삭제할 지 지정
 * 두번째 값: 해당 인덱스부터 몇개의 인덱스를 삭제하고 싶은 지 지정
 * 
 */
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);
console.log('-------------------------------------------------------------------');

// 위의 함수들을 알아는 둬야하지만 실무에서는 잘 사용하지 않음

//iveMembers 리셋
iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]
console.log(iveMembers);
console.log('-------------------------------------------------------------------');

/**
 * concat()
 * concat()과 push()의 차이
 * >> 원래 array를 변경하지 않고 다른 메모리 공간에 새로운 array를 생성하여 저장(반환)하는 개념
 */
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);
console.log('-------------------------------------------------------------------');

/**
 * slice()
 * 원래 array가 변경되지 않음(splice와 차이점 1)
 * 첫번째 값: 몇번 인덱스부터 삭제할 지 지정
 * 두번째 값: 몇번 인덱스 전까지 삭제할 지 지정(splice와 차이점 2)
 * 따라서 범위는 첫번째 값에 해당하는 인덱스 이상 두번째 값에 해당하는 인덱스 미만
 */
console.log(iveMembers.slice(0, 3));
console.log(iveMembers); //원래 array가 변경되지 않음
console.log('-------------------------------------------------------------------');

/**
 * spread operator
 * ... + 리스트명
 * 리스트에 해당하는 모든 값들이 펼쳐져서 선언한 새로운 리스트에 저장이 됨
 */
let iveMembers2 = [
    ...iveMembers, //...: spread operator
];

console.log(iveMembers2);
console.log('-------------------------------------------------------------------');

//sperad operator를 안한 경우: 리스트 안에 리스트인 형태로 출력
let iveMembers3 = [
    iveMembers, //...: spread operator
];

console.log(iveMembers3);
console.log('-------------------------------------------------------------------');

let iveMembers4 = iveMembers;
console.log(iveMembers4); //spread operator를 한 경우와 같은 결과
console.log(iveMembers4 === iveMembers);
console.log('-------------------------------------------------------------------');

//spread operator를 할 경우
//완전히 새로운 array가 생성되는 것과 같기 때문에 기존 array와 같은지 비교하면 false가 나온다.
console.log([
    ...iveMembers,
] === iveMembers); 
console.log('-------------------------------------------------------------------');

/**
 * join() : 실무에서 많이 씀!!!!
 * , 를 기준으로 모든 값들을 합칠 수 있다.(Default)
 * 모든 값들을 String으로 엮을 때 주로 사용
 */
console.log(iveMembers.join());
console.log(typeof(iveMembers.join()));
console.log('-------------------------------------------------------------------');

console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));
console.log('-------------------------------------------------------------------');

/**
 * sort()
 * 정렬 함수
 * 오름차순으로 정렬해주는 함수
 * 반환값은 존재하지 않음 -> 출력을 해볼 필요가 없음
 */
iveMembers.sort();
//console.log(iveMembers.sort()); -> 반환값은 존재하지 않음 -> 출력을 해볼 필요가 없음
console.log(iveMembers);
console.log(iveMembers.reverse()); // .reverse(): 내림차순으로 정렬해주는 함수
console.log('-------------------------------------------------------------------');

let numbers =[
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

/**
 * a, b를 비교했을 때
 * 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
 * 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */

numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers); //오름차순으로 정렬됨
console.log('-------------------------------------------------------------------');

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers); //내림차순으로 정렬됨
console.log('-------------------------------------------------------------------');

/**
 * map(): array에 있는 모든 값들을 순회를 하면서 각각의 값들을 변형시키는 역할
 */
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`)); 

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브: ${x}`;
    }
    else{
        return x;
    }
}));
console.log(iveMembers); //기존 array를 바꾸지 않고 새로운 array를 반환한다는 것을 알 수 있음
console.log('-------------------------------------------------------------------');

/**
 * element를 찾는 기능 1
 *  filter()
 * true에 해당하는 모든 값들을 다 찾아서 반환함
 */
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => true)); //반환값에 들어감
console.log(numbers.filter((x) => false)); //반환값에 들어가지 않음
console.log(numbers.filter((x) => x % 2 === 0));
console.log('-------------------------------------------------------------------');

/**
 * element를 찾는 기능 2
 *  find()
 * 순서대로 보다가 해당되는 첫번째 값만 반환
 */
console.log(numbers.find((x) => x % 2 ===0));
console.log('-------------------------------------------------------------------');

/**
 * element를 찾는 기능 3
 * findIndex()
 * find()와 같은 원리지만 인덱스를 반환한다.
 */
console.log(numbers.findIndex((x) => x % 2 ===0));
console.log('-------------------------------------------------------------------');

/**
 * element를 찾는 기능 4
 * reduce()
 * .reduce(콜백함수, 초기값);
 * 1. 초기값인 0이 p에 입력된다.
 * 2. numbers 어레이의 첫번째 값인 1이 n에 입력된다.
 * 3. p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4. 3에서 반환한 값(1)이 p에 입력된다.
 * 5. 어레이의 두 번째 값인 8이 n에 입력된다.
 * 6. p + n 즉, 1 + 8의 결과값인 9가 반환된다.
 * 7. 6에서 반환한 값(9)가 p에 입력된다.
 * 8. numbers 리스트의 모든 값들을 다 순회할 때까지 반복 결국 모든 값을 다 더한 25가 반환된다.
 */
console.log(numbers.reduce((p, n) => p + n, 0));
console.log('-------------------------------------------------------------------');