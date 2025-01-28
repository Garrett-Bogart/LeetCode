import { TreeNode } from "./DataStructures/TreeNode";

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const root = createNode(nums);
    return root;
};

function createNode(nums: number[]): TreeNode | null {
    if(nums.length == 1) return new TreeNode(nums[0]);
    if(nums.length == 0) return null;
    const middle = Math.floor(nums.length/2);
    const root = new TreeNode(nums[middle])
    const leftSlice = nums.slice(0, middle);
    const rightSlice = nums.slice(middle+1);
    root.left = createNode(leftSlice);
    root.right = createNode(rightSlice);
    return root;
};

//console.log(sortedArrayToBST([-10,-3,0,5,9]))
//console.log(sortedArrayToBST([-10,-3,0,5,9, 10]))
console.log(sortedArrayToBST([1,3]))
console.log(sortedArrayToBST([1]))
console.log(sortedArrayToBST([]))