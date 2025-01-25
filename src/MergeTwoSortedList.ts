class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }
 }
 const nodeThree = new ListNode(4);
 const nodeTwo = new ListNode(2, nodeThree);
 const nodeOne = new ListNode(2, null);
 
 const nodeC = new ListNode(4);
 const nodeB = new ListNode(3, nodeC);
 const nodeA = new ListNode(1, null);

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let pointer1 = list1;
    let pointer2 = list2;
    console.log(pointer1, pointer2);
    let head: ListNode;
    if(pointer1 == null && pointer2 == null) return list1;
    if(pointer1 == null && pointer2 != null) return list2;
    if(pointer2 == null && pointer1 != null) return list1;

    if(pointer1?.val <= pointer2?.val){
        const newNode = new ListNode(pointer1?.val, null);
        pointer1 = pointer1?.next;
        head = newNode; 
    }
    else{
        const newNode = new ListNode(pointer2?.val, null);
        pointer2 = pointer2?.next;
        head = newNode; 
    }
    let current = head;
    let done = false;
    console.log(pointer1, pointer2);
    while(!done){
        if(!pointer1 && !pointer2) {
            done = true
            break;
        };
        if(pointer1 != null && pointer2 == null){
            const newNode = new ListNode(pointer1?.val, null);
            pointer1 = pointer1?.next;
            current.next = newNode;
            current = current.next;
        }
        else if(pointer1?.val <= pointer2?.val){
            const newNode = new ListNode(pointer1?.val, null);
            pointer1 = pointer1?.next;
            current.next = newNode;
            current = current.next;
            
        }
        else if(pointer1 == null && pointer2 != null){
            const newNode = new ListNode(pointer2?.val, null);
            pointer2 = pointer2?.next;
            current.next = newNode;
            current = current.next;
        }
        else if (pointer2?.val < pointer1?.val){
            const newNode = new ListNode(pointer2?.val, null);
            pointer2 = pointer2?.next;
            current.next = newNode;
            current = current.next;
            
        }
    }
    return head;
};
const mergeList = mergeTwoLists(nodeOne, nodeA)
let runner = mergeList;
let done = false;
const temp = [];
while(!done){
    if(!runner?.next) done = true;
    temp.push(runner.val);
    runner = runner.next;

}
console.log(temp)