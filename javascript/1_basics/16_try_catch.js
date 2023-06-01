/**
 * try...catch
 * 
 * 1) 에러를 발생시킬때 -> 던진다고한다. (throw)
 * 2) 에러를 명시적으로 인지할 때 -> 잡는다고 한다.(catch)
 */

function runner(){
    try{
        console.log('Hello');
    
        //new: 새로운 객체를 생성
        throw new Error('큰 문제가 생겼습니다.');
        
        console.log('Code Factory');
    } catch(e){  // try문에서 오류 발생시 그 다음 실행하는 코드
        console.log('-----catch-----');
        console.log(e); //에러내용 출력
    } finally{   // try문에서 오류가 나든 안나든 무조건 실행하는 코드
        console.log('-----finally-----');
    } //finally는 써도 되고 안써도 됨
}
runner();
