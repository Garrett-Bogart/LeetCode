const haystack = "hello";
const needle = "ll";
function strStr(haystack: string, needle: string): number {
    const reg = new RegExp('('+ needle +')');
    const found = haystack.match(reg);
    console.log(found);
    if(found != null){
        return found.index as number;
    }
    return -1;
};

console.log(strStr(haystack, needle))