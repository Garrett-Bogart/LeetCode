const x = 121;
function isPalindrome(x: number): boolean {
    let stringified = ''+x;
    if(stringified[0] === '-'){
        return false;
    }
    let end = stringified.length -1;
    for(let start = 0; start < stringified.length -1; start++){
        if(stringified[start] != stringified[end]) return false;
        console.log(stringified, stringified[start], stringified[end])
        end--;
    }
    return true;
};

isPalindrome(x)