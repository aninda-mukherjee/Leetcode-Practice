var myAtoi = function(str){

    let result =0;
    let sign =1;
    let isNonWhiteSpaceMet = false;
    let isNumberPhase = false;

    for (let i=0; i<str.length; i++) {
        const char =str[i];
        if (char===' '){
            if (!isNonWhiteSpaceMet){
                continue
            }else {
                break
            }
        }
        isNonWhiteSpaceMet=true;
        if (char >='0' && char <= '9'){
            result=result * 10 + (char -'0')
            isNumberPhase=true;
            continue
        }
        if (char ==='+' && !isNumberPhase){
            isNonWhiteSpaceMet = true;
            isNumberPhase=true;
            continue
        }
        if (char==='-' && !isNumberPhase){
            isNonWhiteSpaceMet=true;
            isNumberPhase=true;
            sign *=-1
            continue
        }
      
        break
    }
    result *= sign;
    return Math.min(Math.max(-(2 ** 31), result),2**31 -1)
}


console.log(myAtoi("+-2"));