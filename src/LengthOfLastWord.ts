const s = "   fly me   to   the moon  "
function lengthOfLastWord(s: string): number {
    const split  = s.trim().split(' ');
    console.log(split)
    return split[split.length -1].length;
};

console.log(lengthOfLastWord(s))