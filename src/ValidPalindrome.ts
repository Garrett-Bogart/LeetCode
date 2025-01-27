function isPalindrome(s: string): boolean {
    const strippedInput = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    console.log(strippedInput);
    if(strippedInput.length == 0 || strippedInput.length == 1) return true;
    let left = 0;
    let right = strippedInput.length-1;
    let isPal = true;
    while(isPal && left <= right){
        if(strippedInput[left] != strippedInput[right]) isPal = false;
        right--;
        left++
    }
    return isPal;
};

//console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome("ab_a"))
//console.log(isPalindrome(" "))