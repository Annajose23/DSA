var pathSum = function(root, targetSum) {
    if(!root){
        return [];
    }
    
    let result = [];
    
    function helper(node, target, prevPath){
        prevPath.push(node.val);
        if(!node.left && !node.right && node.val === target){
            result.push(prevPath);
        }
        if(node.left){
            helper(node.left, target-node.val, prevPath.slice())
        }
        if(node.right){
            helper(node.right, target-node.val, prevPath.slice())
        }
    }
    
    helper(root, targetSum, [])
    return result;
};