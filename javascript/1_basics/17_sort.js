let num_list = [12, 4, 15, 46, 38, 1, 14, 56, 32, 10];
let answer= [];

//숫자형도 문자형 오름차순으로 정렬되기 때문에 function필요
num_list.sort(function(comp1, comp2) {
    return comp1 - comp2; 
});
console.log(num_list.slice(5));