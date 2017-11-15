function missingNumber(arr) {
    arr.sort(sortNumber)
	var missing = 0
    if(arr[0] !== 0){
        return 0
    }
    for (var i=0; i<arr.length;i++){
        if(arr[i+1]-arr[i] !== Number(1)){
			missing = arr[i]+1
            return missing
        }
    }
}

function sortNumber(a,b) {
    return a - b;
}


// More efficient way
// function missingNumber(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (!arr.includes(i)) return i;
//     }
//     return arr.length;
// }

// Clever and fun way
// function missingNumber(arr) {

//     var len = arr.length;
    
//     2        0 1
//     3   6    0 1 2 3   
//     4  10    0 1 2 3 4    
//     5  15    0 1 2 3 4 5   
    
//     var expectedSum = (len + 1) / 2 * len;
    
//     var actualSum = 0;
    
//     for(var num of arr) {
//         actualSum += num;
//     }
    
//     return expectedSum - actualSum;
    
// }
