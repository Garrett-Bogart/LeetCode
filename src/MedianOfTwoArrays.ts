function mergeTwoArrays(arr1: number[], arr2: number[]): number[]{
    const arr3 = [...arr1, ...arr2];
    arr3.sort((a, b) => a-b);
    return arr3;
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const arr3 = mergeTwoArrays(nums1, nums2);
    console.log(arr3)
    const middle = Math.floor(arr3.length/2);
    console.log(middle, arr3[middle])
    let meadian = arr3[middle];
    if(arr3.length %2 == 0){
        meadian = (meadian + arr3[middle -1])/2
    }
    return meadian
};

console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,2], [3,4]))