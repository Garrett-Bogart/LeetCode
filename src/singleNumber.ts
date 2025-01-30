function singleNumber(nums: number[]): number {
    let sum = 0;
    nums.forEach(x => {
        sum = sum ^ x;
    })
    return sum;
};