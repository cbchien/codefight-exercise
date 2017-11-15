// Array base functions. not linked list.
// function removeKFromList(l, k) {
//    var arr = []
//    for (var i in l){
//        if (i!==k){
//            arr.push(l[i])
//        }
//    }
//     return arr
// }

// function removeKFromList(l, k) {
//     var index  = l.indexOf(k)
//     if(index  === -1) {
//         return l
//     } else {
//         return l.filter(x => x!== k)
//     }
//     return l.filter(x => x!== k)
// }

function removeKFromList(l, k) {
    if (l === null) {
        return l
    } else if (l.value === k) {
        l = l.next
    }
    n = l
    while (n !== null && n.next !== null) {
        if (n.next.value === k){
            n.next = n.next.next
        } else {
            n = n.next
        }
    }
    if (n !== null && n.value === k) {
        l = l.next
    }
    return l
}

// code from @vikash_h
function removeKFromList(l, k) {
    if(l===null) return null;
    else {
        l.next = removeKFromList(l.next,k);
        return (l.value===k)?l.next:l
    }
}