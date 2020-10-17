const maze = function(maze){
    const solution = ''
    const traverse = function(x, y) {
        if (maze[x][y] === '*') {

        }
        else if (maze[x][y] === 'e') {
            return solution
        }
        traverse(x, y+1)
    }
}

console.log(factorial(5));