function rotateImage(a) {
  let curr, next;

  for (let j = 0; j < a.length / 2; j++) {
    for (let i = j; i < a.length - 1 - j; i++) {
      next = a[i][a.length - 1 - j];
      a[i][a.length - 1 - j] = a[j][i];
      curr = next;

      next = a[a.length - 1 - j][a.length - 1 - i];
      a[a.length - 1 - j][a.length - 1 - i] = curr;
      curr = next;

      next = a[a.length - 1 - i][j];
      a[a.length - 1 - i][j] = curr;
      curr = next;

      next = a[j][i];
      a[j][i] = curr;
      curr = next;
    }
  }

  return a;
}


// http://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/
// code concpet from @bintay1
function rotateImage(a) {
    // Transpose
    for(var i = 0;i<a.length;i++){
        for(var j = 0;j<i;j++){
            // Switch a[i][j] and a[j][i] 
            // With XOR swap
            a[i][j] ^= a[j][i]
            a[j][i] ^= a[i][j]
            a[i][j] ^= a[j][i]
         }
    }
    // Reverse columns
    for(var i in a){
        a[i] = a[i].reverse()
    }
    return a
}
