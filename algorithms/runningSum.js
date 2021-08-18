/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let result = [];
    let sum = 0;
    let p = 0;
    for(let i=0; i<nums.length; i++){
        sum = sum + nums[p];
        p++;
        result.push(sum);
    }
    console.log(result);
};

runningSum([1,2,3,4,5])