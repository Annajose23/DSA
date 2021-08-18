/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var goodNodes = function(root) {
    let count = 0;
    
    function traverse(node,max){
        if(node === null){
            return
        }
        if(node.val >= max){
            count+=1;
        }
        traverse(node.left, Math.max(node.val,max));
        traverse(node.right, Math.max(node.val,max));
    }
    if(root){
        traverse(root, root.val);
    }
    return count;
};