import { TreeNode } from './DataStructures/TreeNode';
function postorderTraversal(root: TreeNode | null): number[] {
    if(root == null) return [];
    let order:number[] = [];
    function traverse(node: TreeNode| null){
        if(node == null) return;
        //order.push(node.val)
        if(node?.left){
            traverse(node.left);
        }
        if(node?.right){
            traverse(node.right)
        }
        order.push(node.val)
    }
    traverse(root)
    return order;
};

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

let root1 = new TreeNode(1)
root1.left = new TreeNode(2)
root1.left.left = new TreeNode(4)
root1.left.right = new TreeNode(5)
root1.left.right.left = new TreeNode(6)
root1.left.right.right = new TreeNode(7)
root1.right = new TreeNode(3);
root1.right.right = new TreeNode(8)
root1.right.right.left = new TreeNode(9)

console.log(postorderTraversal(root))
console.log(postorderTraversal(root1))