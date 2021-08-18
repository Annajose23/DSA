/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let largest = candies[0];
    for(i=1; i<= candies.length;i++){
        if(candies[i]>largest){
            largest = candies[i]
        }
    }
    console.log(largest);
    let result = [];
    candies.forEach(c=>{
        if(largest-c<= extraCandies){
            result.push(true)
        }else{
            result.push(false)
        }
    })
    console.log(result);
    return result;
};

kidsWithCandies([12,1,12],10)
//5,6,8,4,6
//-1,0,2,-2,0