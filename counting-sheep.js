const countingSheep = function(numberOfSheep){
    if (numberOfSheep === 0) {
        return "0: All sheep jumped over the fence"
    }
    return `${numberOfSheep}: Another sheep jumps over the fence ` + countingSheep(numberOfSheep - 1)
}

console.log(countingSheep(3));