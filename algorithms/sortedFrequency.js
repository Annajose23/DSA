function sortedFrequency(arr, target){
    // add whatever parameters you deem necessary - good luck!
   let result = {};
   for(let i of arr){
       if(!result[i]){
           result[i] = 1;
       } else{
           result[i]++;
       }
   }
   return result[target]===undefined? -1:result[target];
    
  }

  sortedFrequency([1,2,2,3,3,3,3,4,5],3)