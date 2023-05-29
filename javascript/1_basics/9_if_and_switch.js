//If and Switch
let number = 5;

if(number % 2 == 0){
    console.log('number 변수는 짝수입니다.');
}
else{
    console.log('number 변수는 홀수입니다.');
}

if(number % 2 == 0){
    console.log('2의 배수입니다.');
}
else if(number % 3 == 0){
    console.log('3의 배수입니다.');
}
else if(number % 5 == 0){
    console.log('5의 배수입니다');
}
else{
    console.log('2 또는 3 또는 5의 배수가 아닙니다.');
}

const englishDay = 'monday';

let koreanDay;

//변수 englishDay를 중심으로
switch(englishDay){
    case 'monday': //englishDay가 monday일 경우
        koreanDay = '월요일'; //koreanDay는 월요일로 지정
        break; //해당되는 값을 찾았을 때 빠져나와라
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'wednesday':
        koreanDay = '수요일';
        break;
    case 'thursday':
        koreanDay = '목요일';
        break;
    case 'friday':
        koreanDay = '금요일';
        break;
    default:
        koreanDay = '주말';
        break;

}

console.log(`koreanDay는 ${koreanDay}입니다`);