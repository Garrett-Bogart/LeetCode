const input = ["dog","racecar","car"];

function longestCommonPrefix(strs: string[]): any {
    const firstWord = strs[0];
    const map = [];
    let append =''
    for(let i = 0; i < firstWord.length; i++){
        append = append + firstWord[i];
        map.push(append);
    }

    let foundPrefix = ''
    map.forEach(prefix => {
        let count = 0;
        strs.forEach(word => {
            const slicedWord = word.slice(0, prefix.length)
            if(slicedWord.includes(prefix)){
                count++;
            }
        })
        if(count === strs.length){
            foundPrefix = prefix;
        }
    });
    return foundPrefix;
};
console.log(longestCommonPrefix(input))