class Node
    {
       constructor(value) {
           this.left = null;
           this.right = null;
           this.value = value;
        }
    }

var goodNodes = function(T) {
    let count = 0;
    
    function findVisibleNodes(node, maxVal) {
        if (!node) {
            return;
        }
        
        if (node.value >= maxVal) {
            count++;
        }
        
        findVisibleNodes(node.left, Math.max(node.val, max));
        findVisibleNodes(node.right, Math.max(node.val, max))
    }
    
    if (T !== null) {
        findVisibleNodes(T, T.val)   
    }

    return count;
};