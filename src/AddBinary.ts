let a = "01101"; let b = "10111"
function addBinary(a: string, b: string): string {
    let aLength = a.length;
    let bLength = b.length;
    if(aLength < bLength){
        let difference = bLength - aLength;
        let padding = "0".repeat(difference);
        a = padding + a;
    }
    else if( b.length < a.length){
        let difference = aLength - bLength;
        let padding = "0".repeat(difference);
        b = padding + b;
    }
    let binaryString = '';
    let remainder = false;
    for(let i = a.length -1; i >= 0; i--){
        let subA = a[i];
        let subB = b[i];
        console.log(subA,subB, binaryString)
        if(subA != subB){
            if(remainder){
                binaryString =  '0'+ binaryString;
            }
            else{
                binaryString = '1'+ binaryString;
            }
        }

        if(subA == subB && subA =='0' && subB == '0'){
            if(remainder){
                binaryString = '1' + binaryString; 
                remainder = false;
            }
            else {
                binaryString = '0' + binaryString;
            }
        }

        if(subA == subB && subA =='1' && subB == '1'){
            if(remainder){
                binaryString = '1' + binaryString;
            }
            else {
                binaryString = '0' + binaryString;
                remainder = true; 
            }
        }
    }
    if(remainder){
        binaryString = '1' + binaryString;
    }
    return binaryString;
};

console.log(addBinary(a, b))