function countZeros(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0){
            count++;
        }
    }return count;
}

console.log(countZeros([1,1,1,0,0,0]));
/*
1. check first element
2. if 1, 
*/