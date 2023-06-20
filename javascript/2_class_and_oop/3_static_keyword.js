/**
 * Static Keyword
 */

class IdolModel{
    name;
    year;
    static groupName = '아이브';

    constructor(name, year){
        this.name = name;
        this.year = year;
        
    }    
    
    static returnGroupName(){
        return '아이브';
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName());
console.log('------------------------------------')


/**
 * factory constructor
 * 단순히 하나의 constructor형태로만 instance를 반환받지 않고
 * 미리 어떤 데이터를 입력받아 instance를 만들지
 * template화 해서 정의를 해놓을 수 있는 장점이 있다.
 * 
 */

class IdolModel2{
    name;
    year;
    
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel2(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel2(
            list[0],
            list[1],
        )

    }
}


const yuJin2 = IdolModel2.fromObject({

    name: '안유진',
    year: 2003,
});
console.log(yuJin2);

const wonYoung = IdolModel2.fromList(
    [
        '장원영',
        2003,
    ]
);

console.log(wonYoung);