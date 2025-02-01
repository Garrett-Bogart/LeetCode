function longestConsecutive(nums: number[]): number {
    if(nums.length == 0) return 0;
    const mappedNums = mapNums(nums);
    let longestSequence = 0;
    nums.forEach(num => {
        let done = false;
        let currentSequenceLength = {current: 1};
        let below = num -1;
        let above = num + 1;
        //num has not been added to a sequence
        if(!mappedNums.get(num)){
            mappedNums.set(num, true)
            console.log(num, below, above)
            checkBelow(below, mappedNums, currentSequenceLength);
            checkAbove(above, mappedNums, currentSequenceLength);
        }
        else{
            //num has already been added to sequence so skip
        }
        
        if(currentSequenceLength.current > longestSequence) longestSequence = currentSequenceLength.current;
    })
    console.log(mappedNums, longestSequence);
    return longestSequence;
};

function checkBelow(below: number, mappedNums: Map<number, boolean>, currentSequenceLength: {current:number}){
    if(mappedNums.has(below)){
        mappedNums.set(below, true)
        checkBelow(below-1, mappedNums, currentSequenceLength);
        currentSequenceLength.current++;
    }
}

function checkAbove(above: number, mappedNums: Map<number, boolean>, currentSequenceLength: {current:number}){
    if(mappedNums.has(above)){
        mappedNums.set(above, true)
        checkAbove(above+1, mappedNums, currentSequenceLength);
        currentSequenceLength.current++;
    }
}

function mapNums(nums: number[]){
    const mappedNums = new Map<number, boolean>();
    nums.forEach(num => {
        if(!mappedNums.has(num)){
            mappedNums.set(num, false);
        }
    })
    return mappedNums;
}

console.log(longestConsecutive([100,4,200,1,3,2]));