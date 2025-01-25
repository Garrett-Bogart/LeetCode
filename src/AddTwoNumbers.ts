
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
//[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
function createNodeList(l: number[]){
    const root = new ListNode(0);
    let readableOutput = '';
    let current = root;

    for(let i = 0; i < l.length; i++){
        if(i == 0){
            root.val = l[i]
            readableOutput = ''+ l[i]
        }
        else{
            readableOutput = readableOutput+ l[i]
            current.next = new ListNode(l[i]);
            current = current.next;
        }
    }
    console.log(readableOutput);
    return root;
}

function readNodeList(l: ListNode | null){
    const root = l;
    let current: ListNode | null = root;
    let readableOutput = '';

    while(current != null){
        readableOutput = readableOutput + current.val;
        current = current!.next;
    }
    console.log(readableOutput);
    return root;
}
let l1 = createNodeList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
let a1 = createNodeList([5,6,4]);

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(l1 == null && l2 == null) return null;
    if(l1 != null && l2 == null) return l1;
    if(l1 == null && l2 != null) return l2;

    let l1_current = l1;
    let l1Val = '';
    let l2_current = l2;
    let l2Val = '';
    let remainder = 0;
    let newList: ListNode | null = null;
    let n_current: ListNode | null = newList;

    while(l1_current != null || l2_current != null){
        let sum = 0;
        if(l1_current != null){
            sum = l1_current.val;
        }
        if(l2_current != null){
            sum = sum + l2_current.val;
        }
        sum = sum + remainder;
        if(sum >= 10){
            remainder = Math.floor(sum/10);
            sum = sum -10;
        }
        else{
            remainder = 0;
        }
        const t = new ListNode(sum);
        if(newList == null){
            newList = t;
            n_current = newList;
        }
        else{
            n_current!.next = t;
            n_current = n_current!.next;
        }  
        if(l1_current != null){
            l1_current = l1_current.next;
        }
        if(l2_current != null){
            l2_current = l2_current.next;
        }
    }
    if(remainder != 0){
        n_current!.next = new ListNode(remainder);
    }
    readNodeList(newList);
    return newList;
};
console.log(addTwoNumbers(l1, a1))