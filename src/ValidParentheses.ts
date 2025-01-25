/*
Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

*/

function isValid(s: string): boolean {
    let testString: string [] = []
    let openCharacters = ''
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            testString.push(s[i])
            openCharacters = openCharacters + s[i];
        }
        if(s[i] === ')'){
            console.log(openCharacters, ')', 11111111)
            if(openCharacters[openCharacters.length -1] != '(') return false;
            stripCharacter(testString,'(')
            openCharacters = openCharacters.slice(0, -1)
        }

        if(s[i] === ']'){
            console.log(openCharacters, ']', 2222)
            if(openCharacters[openCharacters.length -1] != '[') return false;
            stripCharacter(testString,'[')
            openCharacters = openCharacters.slice(0, -1)
        }

        if(s[i] === '}'){
            console.log(openCharacters, '}', 3333333)
            if(openCharacters[openCharacters.length -1] != '{') return false;
            stripCharacter(testString,'{')
            openCharacters = openCharacters.slice(0, -1)
        }
    }
    console.log(testString)
    if(testString.includes('(')) return false;
    if(testString.includes('{')) return false;
    if(testString.includes('[')) return false;
    return true;
};

function stripCharacter(testString: string[], c: string){
    let found  = testString.findIndex(y => y === c);
    if(found != -1){
        testString[found] = '';
    } 
}
console.log(isValid("()[]{}"));