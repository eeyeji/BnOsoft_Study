/**
 * Object / 객체
 * 가장 많이 사용하고 중요한 데이터 타입 중 하나
 * 
 */

//객체 선언
let yujin = {
    //값 넣기
    //key: value pair
    name: '안유진',
    group: '아이브',
    //object 안에 함수 정의 - method(메소드)
    dance: function(){
        return '안유진이 춤을 춥니다.';
    }
};
console.log(yujin); // object는 정의하고 싶은 값들을 성격이 비슷한 값들끼리 묶는 역할을 해줌
console.log(yujin.name); //name키에 해당하는 안유진이라는 값을 출력해줌
console.log(yujin['name']);
console.log('-------------------------');

const key = 'name';
console.log(yujin[key]);
console.log('-------------------------');

console.log(yujin.dance());
console.log('-------------------------');

let yujin2 = {
    //값 넣기
    //key: value pair
    name: '안유진',
    group: '아이브',
    //object 안에 함수 정의 - method(메소드)
    dance: function(){
        return `${this.name}이 춤을 춥니다.`; //this: 함수가 정의되어있는 현재 객체를 지칭
    }
};
console.log(yujin2.dance());
console.log('-------------------------');

//     변수   =  값
const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 ={
   //[키에 해당하는 변수명]: 값에 해당하는 변수명,
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());
console.log('-------------------------');

//기존 값 변경하기
yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

//존재하지 않았던 키를 넣으면 새로 생성이 된다
yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

//삭제
delete yuJin2['englishName'];
console.log(yuJin2);
console.log('-------------------------');

/**
 * 객체의 특징
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */

const wonYoung = {
    name: '장원영',
    group: '아이브',
}

console.log(wonYoung);
//wonYoung = {}; -> const로 선언이 된 경우이기 때문에 값을 변경할 수 없다는 에러남 1)

wonYoung['group'] = '코드팩토리'; // 2)
console.log(wonYoung);

/**
 * 모든 key 값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 value 값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진';
const yuJin3 = {
    name, //키값과 벨류값이 같을 경우 하나만 입력 (name: name,)
};
console.log(yuJin3);