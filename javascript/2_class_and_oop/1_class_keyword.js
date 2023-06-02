/**
 * Class Keyword
 * 
 * 클래스의 정의
 * >> 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는  일종의 틀이다.
 * >> 정보를 일반화해서 정리하는 방법이다.
 */
//클래스의 이름은 대문자로 시작하는 것이 개발자들 사이에서의 약속

//하나의 값을 default로 지정해줄 때
class IdolModelDefault{
    name = '안유진'; //1
    year = '2003';

}

const yuJin_default = new IdolModelDefault('안유진', '2003');
console.log(yuJin_default);
console.log('---------------------------------------------------');

//여러 값들을 각각 넣어주고 싶을 때 - constructor 필요
class IdolModel{
    name; //1, 속성을 정의하는 것은 optional이다. 안해도 같은 결과 나옴
    year;

    constructor(name, year){ //2
        this.name = name; //this.1 = 2;
        this.year = year;
    }

    //메소드를 정의하는 방법
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

//constructor - 생성자

const yuJin = new IdolModel('안유진', '2003');
console.log(yuJin);
const gaeul = new IdolModel('가을', '2002');
console.log(gaeul);
const ray = new IdolModel('레이', '2004');
console.log(ray);
const wonYoung = new IdolModel('장원영', '2004');
console.log(wonYoung);
const liz = new IdolModel('리즈', '2004');
console.log(liz);
const eseo = new IdolModel('이서', '2007');
console.log(eseo);

console.log(yuJin.name);
console.log(yuJin.year);
console.log(yuJin.sayName());
console.log(wonYoung.sayName());
console.log('---------------------------------------------------');

console.log(typeof IdolModel);
console.log(typeof yuJin);