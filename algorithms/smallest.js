function solution(A) {
    var ans = 0;
    var count = 0;
    for (var i = 0; i < A.length; i++) {
        if (ans > A[i]) {
            count++;
            ans = A[i];
        }
    }
    return count;
}

console.log(solution([-3,5,-2,6,1]));