const powerCalculator = function(base, exponent){
    if (exponent < 0) {
        return "exponent should be >= 0"
    }
    else if (exponent === 0 ) {
        return 1
    }
    const newExponent = exponent - 1
    return base * powerCalculator(base, newExponent)
}

console.log(powerCalculator(4,4));