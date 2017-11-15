function isCryptSolution(crypt, solution) {
    var strCrypt = crypt.join(' ')
    for (let arr of solution) {
        var re = new RegExp(arr[0], 'g')
        strCrypt = strCrypt.replace(re, arr[1])
    }
    var arrCrypt = strCrypt.split(' ').map(Number)
    if (/0\s0\s0/.test(strCrypt)) {
        return true
    } else if (/\b0/.test(strCrypt)) {
        return false
    } else if (arrCrypt[0] + arrCrypt[1] === arrCrypt[2]) {
        return true
    } return false
}

// isCryptSolution(
//     ['TEN', 'TWO', 'ONE'], 
//    [['O', '1'],
//     ['T', '0'],
//     ['W', '9'],
//     ['E', '5'],
//     ['N', '4']])
    
// isCryptSolution(
//     ['SEND', 'MORE', 'MONEY'], 
//    [['O', '0'],
//     ['M', '1'],
//     ['Y', '2'],
//     ['E', '5'],
//     ['N', '6'],
//     ['D', '7'],
//     ['R', '8'],
//     ['S', '9']])