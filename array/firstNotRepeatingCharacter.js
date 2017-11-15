function firstNotRepeatingCharacter(s) {
    tempSet = new Set()
    returnSet = new Set()
    var noRepeats = [] 
    for (char of s)
        if (!tempSet.has(char)){
            tempSet.add(char)
            returnSet.add(char)
        } else {
            returnSet.delete(char)
        }
    if(returnSet.values().next().value === undefined){
        return '_'
    } else {
        return returnSet.values().next().value
    }
}

function firstNotRepeatingCharacter(s) {
    var arr = s.split("");
    for(var i = 0; i < arr.length; i++){
        var chr = arr[i];
        if( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
            return arr[i]
        }
    }
    return "_"
}