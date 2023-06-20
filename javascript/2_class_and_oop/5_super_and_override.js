/**
 * Super and Override
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this. year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`
    }
}

class FemaleIdolModel extends IdolModel{
    //노래, 춤...을 적을 수 있는 프롬프트(prompt)
    part;

    constructor(name, year, part){
        // this.name = name;
        // this.year = year;
        super(name, year);

        this.part = part;
    }

    //재정의
    sayHello(){
        //return `안녕하세요 ${this.name}입니다.${this.part}을 맡고 있습니다.`
        return `${super.sayHello()} ${this.part}을 맡고 있습니다.`
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());