function multiply(array) {
    var result = array.reduce((a, b) => a * b);
    if(result === 0){
        return 0;
    } else if(result > 0){
        return 1;
    }else{
        return -1;
    }
}

console.log(multiply([-5,-2,-3,5]))