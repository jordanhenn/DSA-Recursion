const reverseString = function(originalString){
    if (originalString.length === 1) {
        return originalString[0]
    }
    return originalString[originalString.length - 1] + reverseString(originalString.slice(0, originalString.length - 1))
}

console.log(reverseString('barbara'));