function longestPalindrome(s: string): string {
    let map = createMapOfLetters(s)
    let keys = map.keys();
    let result = keys.next();
    let palindromes = '';
    while(!result.done){
        let key = result.value;
        let mapValue = map.get(key);
        if(mapValue && mapValue.length >=2){
            let combos = mapCombinations(mapValue)
            combos.forEach(c => {
                //console.log('checking', c)
                let t = checkPalindrome(s, c[0], c[1]);
                //console.log('got', t)
                if(t.length > palindromes.length) palindromes = t;
            })          
        }
        else{
            if(key.length > palindromes.length) palindromes = key;
        }
        result = keys.next();
    }
    return palindromes;
};

function mapCombinations(map: number[]){
    let done = false;
    let combos: number[][] = []
    let start = 0;
    let end = map.length -1;
    while(!done){
        for(let i = start; i < map.length; i++){
            let t = map[start];
            let t2 = map[i]
            combos = [...combos, [t, t2]]
        };
        start++;
        if(map[start] >= map[end]) done = true;
    }
    return combos;
}

function checkPalindrome(s: string, start: number, end: number){
    let isPalindrome = true;
    let subPalindromeStart = '';
    let subPalindromeEnd = '';
    //console.log('start: ',start,  'end:', end)
    while(start <= end){
        if(s[start] != s[end]){
            isPalindrome = false;
            break;
        }
        else if(start == end){
            subPalindromeStart = subPalindromeStart + s[start]
            //console.log('matching letter', subPalindromeStart, subPalindromeEnd)
        }
        else {
            //console.log('matching letter different index', s[start], s[end])
            subPalindromeStart = subPalindromeStart + s[start]
            subPalindromeEnd = s[end] + subPalindromeEnd;
            //console.log(subPalindromeStart, subPalindromeEnd)
        }
        
        start++;
        end--;
    }
    if(!isPalindrome) return '';
    return subPalindromeStart + subPalindromeEnd;
}

function createMapOfLetters(s: string){
    let map: Map<string, number[]> = new Map<string, number[]>();

    for(let i = 0; i < s.length; i++){
        let t = map.get(s[i])
        if(t != undefined){
            t = [...t, i]
            map.set(s[i], t);
        }
        else {
            map.set(s[i], [i])
        }
    }
    return map;
}
// console.log(longestPalindrome('abcba'))
// console.log(longestPalindrome('azyzbzxzzxz'))
// console.log(longestPalindrome('a'))
// console.log(longestPalindrome('aa'))
// console.log(longestPalindrome('ac'))
// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('cac'))
console.log(longestPalindrome('abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa'))