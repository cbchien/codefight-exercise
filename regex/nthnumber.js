function nthNumber(s, n) {
  var re = new RegExp(`(?:[0\\D]*(\\d+)\\D*){${n}}`);
  return re.exec(s)[1];
}

// (?:[0\\D]*(\\d+)\\D*)
// (?:[0\\D]* .... \\D*) non-captured ground
//           (\\d+)      captured ground
// \\ Regular String to Raw string
// once read will be (?:[0\D]*(\d+)\D*)