/**
 * Loops
 * 
 * 1)for
 * 2)while
 */
//기준을 잡을 변수선언; 조건(언제까지 반복할지); for loop이 실행될 때마다 어떤 행동을 취할건지
for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log('--------------------');

for(let i = 10; i > 0; i--){
    console.log(i);
}
console.log('--------------------');

for(let i = 0; i < 3; i++){
    for(let j = 3; j > 0; j--){
        console.log(i, j);
    }
}
console.log('--------------------');

// *을 이용해서 6x6의 정사각형을 출력해라

let square = '';
let side = 6;

for(let i = 0; i < side; i++){
    for(let j =0; j < side; j++){
        square += '*';
    }
    if(i<side-1){
        square += '\n';
    }
    
}

console.log(square);
console.log('--------------------');

/**
 * for...in
 * looping을 할 때마다 key값을 받을 수 있다.
 */
const yujin = {
    name: '안유진',
    year: 2003, 
    group: '아이브',
}

for(let key in yujin){
    console.log(key); //키 값 출력
}
console.log('--------------------');

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
for(let key in iveMembersArray){
    console.log(key); //인덱스 값이 출력됨
    console.log(`${key}: ${iveMembersArray[key]}`);
}
console.log('--------------------');

/**
 * for...of
 * looping을 할 수 있는 값들에서만 사용할 수 있다.
 * >> 리스트(array)에서 사용가능
 */
for(let value of iveMembersArray){
    console.log(value); //value 값 출력
}
console.log('--------------------');

/**
 * While
 * 조건을 먼저 판단을 한 다음 조건이 true일 경우에 body를 실행을 시킴
 */
let number = 0;

while(number < 10){
    number++;
}
console.log(number);
console.log('--------------------');

/**
 * do...while
 * 먼저 body를 실행한 뒤 조건에 해당하는지 판단함
 */
number = 0;
do{
    number++;
}while(number < 10){
    console.log();
}
console.log(number);
console.log('--------------------');

/**
 * break
 * loop을 깨트린다.
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
console.log('--------------------');

number = 0;
while(number < 10){
    if(number === 5){
        break;
    }
    number++; //0에서 1을 증가한 1부터 출력이 된다.
    console.log(number);
}
console.log('--------------------');

/**
 * continue
 * continue 다음 코드는 실행하지 않고 다음 루프부터 진행
 */
for(i=0;i<10;i++){
    if(i===5){
        continue; //5는 스킵하고 다시 6부터 출력 -> continue의 영향으로 console.log를 지나지 않고 다음 루프로 진행
    }
    console.log(i)
}
console.log('--------------------');

number = 0;
while(number < 10){
    number++;
    if(number === 5){
        continue;
    }
    console.log(number);
}