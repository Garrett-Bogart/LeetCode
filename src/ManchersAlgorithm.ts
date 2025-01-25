//solves sub-palindromes in O(n)
function longestPalindrome2(s: string){
    const str = `|${s.split("").join('|')}|`
    let length = str.length;
    let palindromeRadii = new Array(length);
    let center = 0;
    let radius = 0;

    for(let i = 0; i < str.length; i++){
        let skip = 0;

        let endOfWindow = center + radius;
        if(i < endOfWindow){
            skip = Math.min(palindromeRadii[2*center-i], (endOfWindow - i))
        }

        const palindromesLength = getPalindromeLength(str, i, skip);
        palindromeRadii[i] = palindromesLength;

        const endOfNewWindow = i + palindromesLength;
        if(endOfNewWindow > endOfWindow){
            center = i;
            radius = palindromesLength;
        }
    }
    //console.log(palindromeRadii, str)
    return processing(palindromeRadii, str);
}

function getPalindromeLength(s: string, center: number, skip: number = 0): number {
    let index = skip;
    while(center - index >= 0 && center + index < s.length && s[center + index] === s[center - index]){
        index++;
    }
    return index-1;
}

function processing(palindromeRadii: number[], s: string){
    const pal = {
        index: 0,
        value: 0
    }
    palindromeRadii.forEach((x, i) => {
        if(x > pal.value){
            pal.index = i;
            pal.value = x;
        }
    })
    //console.log(pal)
    let expansion = 1;
    let l = s[pal.index]
    let r = ''
    while(expansion < pal.value){
        //console.log(expansion, pal.value)
        l = s[pal.index - expansion] + l;
        r = r+[s[pal.index + expansion]]
        expansion++;
    }
    return (l+r).replaceAll('|', '');
}

console.log(longestPalindrome2('abaxabaxabb'))
console.log(longestPalindrome2('cbbd'))
console.log(longestPalindrome2('cd'))
console.log(longestPalindrome2('babad'))
console.log(longestPalindrome2("aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa"));
