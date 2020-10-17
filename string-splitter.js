const splitString = function(originalString){
    const splitArray = []
    if (originalString[0] === '/') {
        return splitString(originalString.slice(1, originalString.length))
    }
    if (originalString.length === 1 && originalString[0] !== '/') {
        return originalString[0]
    }
    splitArray.push(originalString[0] + splitString(originalString.slice(1, originalString.length)))
    return splitArray
}

console.log(splitString('02/20/2020'));