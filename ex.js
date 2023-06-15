let num_list = [12, 4, 15, 46, 38, 1, 14, 56, 32, 10];
let answer= [];



num_list.sort(function(comp1, comp2) {
    return comp1 - comp2; 
});
console.log(num_list.slice(5));
