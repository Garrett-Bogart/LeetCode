
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
const t4 = new TreeNode(4, null, null)
const t2 = new TreeNode(3, null, null)
const t3 = new TreeNode(2, t2, t4)

//right t1

const t7 = new TreeNode(4, null, null)
const t6 = new TreeNode(3, null, null)
const t5 = new TreeNode(2, t7, t6)

const r1 = new TreeNode(1, t3, t5)


//left t2
const a4 = new TreeNode(2)
const a2 = new TreeNode(3, null, null)
const a3 = new TreeNode(2, null, a2)

//right t1

const a7 = new TreeNode(2, null, null)
const a6 = new TreeNode(3, null, null)
const a5 = new TreeNode(0, null, null)

const r2 = new TreeNode(1, null, null)
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

function levelOrderTaversal1(root: TreeNode | null): any[]{
    if(!root) return [];
    const numberList = [];
    const queue = [];
    queue.push(root);

    while(queue.length > 0){
        let node = queue.shift()
        if(node && node.right){
            queue.push(node.right)
        }
        if(node && node.val){
            numberList.push(node.val) ;
        }
        if(node && node.left){
            queue.push(node.left)
        }
        if(node && !node.left){
            numberList.push(null)
        }
        
    }
    return numberList;
}

function isSymmetric(p: TreeNode | null): boolean {
    if(p?.left == null && p?.right == null) return true;
    if(p?.left && p?.right){
        const t1 = levelOrderTaversal(p.left);
        const t2 = levelOrderTaversal1(p.right);
        console.log(t1, t2)
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
    }
    return false;
};

console.log(isSymmetric(r2))