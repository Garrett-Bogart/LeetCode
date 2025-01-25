const nums = [2,4,11,3];
const target = 6

function twoSum(nums: number[], target: number): number[] {
    let found: number[] = [];
    const map: any = {};
    nums.forEach((x, i) => {
        if(map[x] != undefined){
            map[x] = [...map[x], i]
        }
        else {
            map[x] = [i];
        }
        
        let couple = target - x;
        console.log('asdfadsf', !map[couple])
        if(map[couple] != undefined){
            console.log(map, map[couple] != undefined, target, couple)
            if(map[couple]?.length > 1){
                found = [map[couple][0], map[couple][1]]
            }
            else{
                if(map[couple] != i){
                    found = [...map[couple], i]
                }
            }
        }
    })
    return found;
};

console.log(twoSum(nums, target))