
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
//left t1
const t4 = new TreeNode(2)
const t2 = new TreeNode(1, t4, null)
const t3 = new TreeNode(4, null, t2)

//right t1

const t7 = new TreeNode(2, null, null)
const t6 = new TreeNode(4, t7, null)
const t5 = new TreeNode(1, null, t6)

const r1 = new TreeNode(5, t3, t5)


//left t2
const a4 = new TreeNode(2)
const a2 = new TreeNode(4, null, a4)
const a3 = new TreeNode(1, a2, null)

//right t1

const a7 = new TreeNode(2, null, null)
const a6 = new TreeNode(1, null, a7)
const a5 = new TreeNode(4, a6, null)

const r2 = new TreeNode(5, a3, a5)
//q =[2,2,2,2,null,2,null]
//p =[2,2,2,null,2,null,null,2]

function levelOrderTaversal(root: TreeNode | null): any[]{
    if(!root) return [];
    const numberList = [];
    const queue = [];
    queue.push(root);

    while(queue.length > 0){
        let node = queue.shift()
        if(node && node.val){
            numberList.push(node.val) ;
        }
        if(node && node.left){
            queue.push(node.left)
        }
        if(node && node.right){
            queue.push(node.right)
        }
        if(node && !node.right){
            numberList.push(null)
        }
    }
    return numberList;
}
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const t1 = levelOrderTaversal(p);
    const t2 = levelOrderTaversal(q);
    if(t1.length != t2.length) return false;
    let same = true;
    //console.log(t1, t2)
    for(let i = 0; i < t1.length; i++){
        if(t1[i] != t2[i]){ 
            same = false;
            break;
        }
    }
    return same;
};

console.log(isSameTree(r1, r2))