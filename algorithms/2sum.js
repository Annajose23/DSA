/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    if(nums.length === 0) return null;
    let p1 = 0;
    let p2 = 1;
    while(p2>p1){
        if(nums[p1] + nums[p2] === target){
            return [p1,p2]
        }else if(p2 === nums.length-1){
            p1++;
            p2 = p1+1;
        }else{
            p2++;
        }
    }
};

console.log(twoSum([2,7,11,15],22));
twoSum([3,2,3],6)