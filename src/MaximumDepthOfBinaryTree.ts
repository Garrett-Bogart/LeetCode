import { TreeNode } from "./DataStructures/TreeNode";
const case3 = new TreeNode(1)
case3.left = new TreeNode(2);
case3.left.left = new TreeNode(4);
case3.left.right = new TreeNode(5);
case3.right = new TreeNode(3);

const case2 = new TreeNode(1);
case2.right = new TreeNode(2);

const case1 = new TreeNode(3);
case1.left = new TreeNode(9)
case1.right = new TreeNode(20);
case1.right.left = new TreeNode(15);
case1.right.right = new TreeNode(7)




function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    let maxDepth = traverseTree(root);
    return maxDepth ?? 0;
};

function traverseTree(node: TreeNode | null): number{
    let lDepth = 0;
    let rDepth = 0;
    if(!node) return -1;
    if(node.left){
        lDepth = traverseTree(node.left)
    }
    
    if(node.right){
        rDepth = traverseTree(node.right)
    }
    return Math.max(lDepth, rDepth) + 1;
}

console.log(maxDepth(case1));
console.log(maxDepth(case2));
console.log(maxDepth(case3));