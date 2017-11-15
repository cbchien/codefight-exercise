function sudoku2(grid) {
    var validation = true
    for (var i=0; i<9; i++){
        validation = check(grid[i].filter(x=> x!=='.'))
		console.log('grid[i]', grid[i], validation)
		if (!validation) {
            return false
        }

		var tempArr = []
        for (var j=0; j<9; j++){
            tempArr.push(grid[j][i])
        }
		validation = check(tempArr.filter(x=> x!=='.'))
		console.log('tempArr', tempArr, validation)
		if (!validation) {
            return false
        }
    }
    for (var k=1; k<9; k=k+3){
        for (var l=1; l<9; l=l+3) {
            var innerBoxArr = []
            innerBoxArr.push(grid[k-1][l-1])
            innerBoxArr.push(grid[k-1][l])
            innerBoxArr.push(grid[k-1][l+1])
            innerBoxArr.push(grid[k][l-1])
            innerBoxArr.push(grid[k][l])
            innerBoxArr.push(grid[k][l+1])
            innerBoxArr.push(grid[k+1][l-1])
            innerBoxArr.push(grid[k+1][l])
            innerBoxArr.push(grid[k+1][l+1])
            validation = check(innerBoxArr.filter(x=> x!=='.'))
            console.log('innerBoxArr', innerBoxArr, validation)
            if (!validation) {
                return false
            }
        }
    }
    return validation
}

function check(arr) {
    tempSet = new Set()
    for (num of arr)
        if (tempSet.has(num))
            return false
        else
            tempSet.add(num)
    return true
}