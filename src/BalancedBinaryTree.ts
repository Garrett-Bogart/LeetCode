import { TreeNode } from "./DataStructures/TreeNode";

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

const root2 = new TreeNode(1);
root2.right = new TreeNode(2)
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3)
root2.left.right = new TreeNode(3)
root2.left.left.left = new TreeNode(4)
root2.left.left.right = new TreeNode(4)

function isBalanced(root: TreeNode | null): boolean {
    if(!root) return true;
    const isBalanced = {balance: true};
    function traverseTree(root: TreeNode | null, isBalanced: {balance: boolean}): number{
        let LHeight = 1;
        let RHeight = 1;
        if(!root){
            return 0;
        }
        if(root && root.left){
            LHeight = 1 + traverseTree(root.left, isBalanced);
        }
        if(root && root.right){
            RHeight = 1 + traverseTree(root.right, isBalanced);
        }
    
        if(Math.abs(LHeight - RHeight) > 1){ 
            isBalanced.balance = false
            console.log('not balanced',isBalanced)
        }
        
        return LHeight >= RHeight ? LHeight : RHeight;
    }
    traverseTree(root, isBalanced);
    
    return isBalanced.balance;
};


console.log(isBalanced(root))