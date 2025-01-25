function mySqrt(x: number): number {
    let start = 1;
    let count = 0;
    let sum = x;

    while(sum > 0){
        sum = sum - start;
        start+=2;
        count++;
        //console.log('new sum', sum, start, count)
        if(sum < start){
            sum = 0;
        }
    }
    return count
};

console.log(2,mySqrt(2))
console.log(3,mySqrt(3))
console.log(4,mySqrt(4))
console.log(5,mySqrt(5))
console.log(6,mySqrt(6))
console.log(7,mySqrt(7))
console.log(8,mySqrt(8))
console.log(9,mySqrt(9))