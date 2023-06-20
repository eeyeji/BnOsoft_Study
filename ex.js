// let strArr = ["a","bc","d","efg","hi"];
// var answer = 0;
// var length_arr = [];
// var cnt_arr = [];
// for(let i = 0; i < strArr.length; i++){
//     length_arr.push(strArr[i].length);
// }

// for(let i = 0; i<length.length; i++){
    
// }
// console.log(length_arr);
// console.log(answer);	

let num_list = [12, 4, 15, 1, 14];
var answer = [];


for(let i = 0; i < num_list.length; i++){
    let cnt = 0;
    while(true){
        if(num_list[i] % 2 == 0){
            num_list[i] = num_list[i] / 2;
            cnt += 1;
        }else{
            num_list[i] = (num_list[i] - 1) / 2;
            cnt += 1;
            if(num_list[i] == 1){
                answer += cnt;
                break;
            }
        }
    }   
}

console.log(answer);