const t = [1,2,5]
function plusOne(digits: number[]): number[] {
    const length = digits.length-1;
    let newSum = 1;
    for(let i = length; i >= 0; i--){
        if(newSum == 10){
            newSum = newSum - 9;
        }
        newSum = digits[i] + newSum;
        if(newSum == 10){
            digits[i] = newSum - 10;
        }
        else{
            digits[i] = newSum;
        }
        if(newSum >= 10 && i == 0){
            return [1, ...digits]
        }
        
        if(newSum < 10) break;
        
    }
    return digits;
};
console.log(plusOne(t))