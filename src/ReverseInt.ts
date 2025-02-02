function reverse(x: number): number {
    const isNegative = x < 0 ? true : false;
    if(isNegative){
        x = x * -1;
    }
    const s = reverseString((''+ x));
    let newNum = parseInt(s);
    if(isNegative){
        newNum = newNum * -1
    }

    if(newNum > 2147483647 ) return 0;
    if(newNum < -2147483648 ) return 0;

    return newNum;
};

function reverseString(str: string) {
    return str.split('').reverse().join('');
}
console.log(reverse(-123))