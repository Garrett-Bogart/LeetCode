function maxArea(height: number[]): number {
    if(height.length == 0) return 0
    let left = 0;
    let right = height.length -1;
    let max = 0;
    while(left != right){
        console.log(height[left], height[right])
        let length = right - left;
        let h = height[left] >= height[right] ? height[right] : height[left]
        max = Math.max(max, length*h);

        if(height[left] >= height[right]){
            right--;
        }
        else{
            left++;
        }
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))