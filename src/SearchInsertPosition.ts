function searchInsert(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    
    while(low <=high){
        let middle = low + Math.trunc((high - low)/2);

        if(target == nums[middle]){
            return middle;
        }

        if(target < nums[middle]){          
            high = middle -1;
        }

        if(target > nums[middle]){
            low = middle + 1;
        }
    }
    return low;
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
// console.log(searchInsert([1,3,5,6], 3))
// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1,3,5,6], 6))