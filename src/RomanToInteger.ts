const roman = 'MCMXCIV';
const romanMap = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
}
function romanToInt(s: string): number {
    let sum = 0;
    for(let i = 0; i < s.length; i++){
        let letter = s[i] as keyof typeof romanMap;
        if(letter === 'I'){
            if(i+1 < s.length && s[i+1] === 'V'){
                letter = 'IV';
                i++;
            }
            else if(i+1 < s.length && s[i+1] === 'X'){
                letter = 'IX';
                i++;
            }
        }

        if(letter === 'X'){
            if(i+1 < s.length && s[i+1] === 'L'){
                letter = 'XL';
                i++;
            }
            else if(i+1 < s.length && s[i+1] === 'C'){
                letter = 'XC';
                i++;
            }
        }

        if(letter === 'C'){
            if(i+1 < s.length && s[i+1] === 'D'){
                letter = 'CD';
                i++;
            }
            else if(i+1 < s.length && s[i+1] === 'M'){
                letter = 'CM';
                i++;
            }
        }
        console.log(letter)
        const mapped  = romanMap[letter];
        sum += mapped;
    }
    return sum;
};

console.log(romanToInt(roman))