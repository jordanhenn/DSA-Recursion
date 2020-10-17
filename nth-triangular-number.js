const nthTriangular = function(num){
    if (num === 1) {
        return num
    }
    return num + nthTriangular(num - 1)
}

console.log(nthTriangular(9));