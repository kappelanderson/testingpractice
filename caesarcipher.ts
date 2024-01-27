//'a' == 97 'z' == 122
// 'A' == 65 'Z'== 90
// 'N' == 78 'n' == 110

function CaesarCipher(str){
    let newStr = ''
    let strArr = str.split('')
    strArr.forEach((char)=>{
        newStr += getCaesarChar(char)
    })
    return newStr
}
function getCaesarChar(char){
    let newchar = 0
    let charcode = char.charCodeAt(0)
    if((charcode < 78 && charcode >= 65) || (charcode < 110 && charcode >= 97)){
        newchar = charcode + 13
    }
    else if((charcode >= 78 && charcode <= 90) || (charcode >= 110 && charcode <= 122)){
        newchar = charcode - 13
    }
    else{
        return char
    }
    return String.fromCharCode(newchar)
}

export {getCaesarChar, CaesarCipher}