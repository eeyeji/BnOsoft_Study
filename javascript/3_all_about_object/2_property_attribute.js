/**
 * Property Attribute
 * 
 * 프로퍼티(Property): object(객체)를 선언했을 때 안에 들어있는 값
 * 
 * Property Attribute: 프로퍼티를 추가를 하면 자동으로 생성되는 속성
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 
 *    설정할 때 호출되는 함수로 구성된 프로퍼티
 *    예를 들면 getter와 setter
 * 
 */

const yuJin = {
    name: '안유진', // property
    year: 2003,
}

//      클래스 or 생성자 함수        
//                           static 함수
//                                         property attribute를 알고 싶은 객체
//                                                  정보를 가져오고 싶은 프로퍼티의 키 값
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
console.log(Object.getOwnPropertyDescriptors(yuJin));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는 지 여부, false로 설정하면 프로퍼티 값을 수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
 *                  단, writable이 true인 경우 값 변경과 writable을 변경하는 건 가능하다.
 */

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log('------------------------------------------');
//데이터 프로퍼티의 프로퍼티 액세서 확인하기
console.log(yuJin2);

//getter
console.log(yuJin2.age);

//setter
yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year); //setter
console.log('------------------------------------------');

//액세서 프로퍼티인 getter와 setter의 프로퍼티 액트리뷰트 출력하기
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
// 액세서 프로퍼티는 value라는 프로퍼티 액트리뷰트가 존재하지 않고
// get과 set이라는 프로퍼티 액트리뷰트가 존재하고, 
// 이 프로퍼티 액트리뷰트는 실제 get / set 함수를 의미한다.

console.log('------------------------------------------');
// yuJin2라는 변수에 새로운 키를 추가하고 싶을 때  .... 1
yuJin2.height = 172;

// yuJin2라는 변수에 새로운 키를 추가하고 싶을 때  .... 2
//yuJin2['height'] = 172; 

console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log('------------------------------------------');
// 프로퍼티 액트리뷰트 재정의 방법
Object.defineProperty(yuJin2, 'weight', {
    value: 50,
    //value만 설정하고 나머지는 입력을 안 했을 경우: false값이 들어감
    writable: true,
    enumerable: true,
    configurable: true,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'weight'));
console.log('------------------------------------------');

yuJin2.height = 180;
console.log(yuJin2);

/**
 * Writable
 */
Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 172; //그대로 180으로 출력됨...writable이 false이기 때문에
console.log(yuJin2);
console.log('------------------------------------------');

/**
 * Enumerable - 열거관련
 */
console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2, 'name', {
    enumerable: false,
});


console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
console.log('------------------------------------------');

console.log(Object.keys(yuJin2));

for(let key in yuJin2){
    console.log(key);
}

console.log(yuJin2);
console.log(yuJin2.name); //name값은 존재함 다만 열거를 할 수 없을 뿐
console.log('------------------------------------------');


/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height',{
    writable: true, // 값 또는 writable은 변경 가능함
    configurable: false, //configurable을 false로 설정했기때문에 후에 enumerable을 false로 변경할 수 없다.
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height',{
    value: 172,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height',{
    writable: false, //configurable이 false일 때 writable을 false에서 true로 바꾸는 것은 불가능 하다.
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));