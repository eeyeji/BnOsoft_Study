/**
 * Getter and Setter
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * getter
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear(){
        return `${this.name}-${this.year}`;

    }

    /**
     * setter
     * 1) 값을 새로 저장할 때 사용
     * 정의한 값을 변환할 수 없다.
     */
    set setName(name){
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

console.log('-------------------------------------------');
yuJin.setName = '장원영';
console.log(yuJin);
console.log('-------------------------------------------');

class IdolModel2{
    //private값: 실제로 값을 저장은 하고 있지만 외부에서 access(접근) 하지 못하는 값
    #name;
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }
}
const yuJin2 = new IdolModel2('안유진', '2003');
console.log(yuJin2);

console.log('-------------------------------------------');

class IdolModel3{
    //private값: 실제로 값을 저장은 하고 있지만 외부에서 access(접근) 하지 못하는 값
    #name;
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }
    
    //private값 가져오는 방법
    get name(){
        return this.#name;
    }
    set name(name){
        this.#name = name;
    }
}
const yuJin3 = new IdolModel3('안유진', '2003');
console.log(yuJin3);
console.log(yuJin3.name);
yuJin3.name = '코드팩토리';
console.log(yuJin3.name);
console.log('-------------------------------------------');

