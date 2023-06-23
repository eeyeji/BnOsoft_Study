/**
 * Async / Await
 */

const getPromise = (seconds)=>new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('완료')
    }, seconds * 1000);
});

async function runner(){
    const result1 = await getPromise(1);
    console.log(result1);
}

runner(); //await을 했을 때 thread가 막히지 않는다는 뜻.
