function convert(s: string, numRows: number): string {
    if(numRows == 1) return s;
    let currentArray = 0;
    let currentIndex = 0;
    let indexIncreaser = 0;
    let decreasing = false;
    const max = numRows - 1;
    let zigzag: string[][] = []
    for(let i = 0; i < numRows; i++){
        zigzag[i] = new Array(s.length).fill('');
    }
    for(const char of s){
        //console.log(currentArray, currentIndex)
        zigzag[currentArray][currentIndex] = char
        if(indexIncreaser == max){
            decreasing = true;
        }

        if(decreasing && indexIncreaser == 0){
            decreasing = false;
        }

        if(!decreasing){
            indexIncreaser++;
            currentArray++;
        }
        if(decreasing){
            indexIncreaser--;
            currentIndex++;
            currentArray--;
        }
        
        
    }
    //console.log(zigzag)
    let t = '';
    zigzag.forEach(zig => {
        //console.log(zig.join(''))
        t= t + zig.join('')
    })
    return t;
};

// P   A   H   N
// A P L S I I G
// Y   I   R
console.log(convert("PAYPALISHIRING", 3))
//PAHNAPLSIIGYIR
//PAHNAPLSIIGYIR
console.log(convert("PAYPALISHIRING", 4))
//PINALSIGYAHRPI
//PINALSIGYAHRPI