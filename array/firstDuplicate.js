function firstDuplicate(a) {
    for (var i = 0; i < a.length; i++) {
        var num = a[i];
		console.log('i is:', i)
		console.log('this is num a[i]:', num)
        if ( a[Math.abs(num) - 1] > 0 ) {
		console.log('this is a[Math.abs(num) - 1]',  a[Math.abs(num) - 1])
            a[Math.abs(num) - 1] = -1 * a[Math.abs(num) - 1];
console.log('this is updated a[Math.abs(num) - 1]',  a[Math.abs(num) - 1])
		console.log('the array is now:', a)
        }
        else {
		console.log('a[Math.abs(num) - 1] is less than 0:',  a[Math.abs(num) - 1])
            return Math.abs(num);
        }
    }
    return -1;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function firstDuplicate(a) {
    tempSet = new Set()
    for (num of a)
        if (tempSet.has(num))
            return num
        else
            tempSet.add(num)
    return -1
}

function firstDuplicate(a) {
    var temp = {}
    for (var i=0; i<a.length; i++){
        temp.push(a[i])
        if (temp.includes(a[i+1])) {
            return a[i+1]
        }
    }
    return Number(-1)
}

function firstDuplicate(a) {
    var temp = {}
    for (var i=0; i<a.length; i++){
        if (temp[a[i]] != undefined) {
            return a[i];
        }
        temp[a[i]] = 1;
    }
    return Number(-1)
}