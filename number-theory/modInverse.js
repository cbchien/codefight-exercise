function modInverse(n, m) {
    var m0 = m,
        t,
        q,
        x0 = 0,
        x1 = 1
    
    if (m === 2 && n === 0) {
        return -1;
    } else if (m === 2) {
        return 1;
    } else if (n%m === 0 || m%n === 0) {
        return -1
    }
    
    while (n>1) {
        if (m === 0) {
            return -1
        }
        // q for quotient
        q = Math.floor(n / m)
        t = m
        
        m = n%m
        n = t
        
        t = x0
        x0 = x1 - q * x0
        x1 = t
    }
    
    if (x1 < 0){
        x1 += m0
    }
    
    return x1
}


function modInverse(n, m) {
    if(n === 0 ){
        return -1
    }
    for (var j=(m-1); j>-1; j--) {
        if((n * j) % m === 1){
            return j
        }
    }
    return -1
}



function timetest(n,m){
    var t0 = performance.now();
    var answer = modInverse(n, m)
    var t1 = performance.now();
    console.log("Call took " + (t1 - t0) + " milliseconds.")
    return answer
}

function modInverse(n, m) {
    var gcd = (a, b) => {
        if (a === 0) return [b, 0, 1];
        var g = gcd(b % a, a);
        return [g[0], g[2] - Math.floor(b / a) * g[1], g[1]];
    };
    var res = gcd(n, m);
    if (res[0] !== 1) return -1;
    return (res[1] % m + m) % m;
}
