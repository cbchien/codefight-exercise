function simplifyRational(numerator, denominator) {
    var gcd_rec = (a, b) => b ? gcd_rec(b, a % b) : a
    var gcd = gcd_rec(numerator,denominator)
    if (numerator < 0 && denominator < 0) {
        return [Math.abs(numerator/gcd) , Math.abs(denominator/gcd)]
    } else if (numerator < 0 || denominator < 0) {
        return [-Math.abs(numerator/gcd) , Math.abs(denominator/gcd)]
    } 
    return [(numerator/gcd) , (denominator/gcd)]
}