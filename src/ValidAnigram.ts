function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length) return false;
    let mapS = mapString(s);
    let mapT = mapString(t);
    return checkMapEquality(mapS, mapT)
};
function mapString(s: string){
    const map = new Map<string, number>();
    for(const char of s){
        if(map.has(char)){
            const mapVal = map.get(char) ?? 0;
            const newVal = mapVal + 1;
            map.set(char, newVal)
        }
        else{
            map.set(char, 1);
        }
    }
    return map;
}

function checkMapEquality(s: Map<string, number>, t: Map<string, number>): boolean{
    if(s.size !== t.size) return false;

    for(const [key, value] of s){
        if(!t.has(key)){
            return false;
        }

        if(t.get(key) !== value){
            return false;
        }
    }
    return true;
}
console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))