function repetitionEncryption(letter) {
  var pattern = /(\w+)([^a-zA-z]+)\1(?![a-zA-Z])/gi;
  var matches = letter.match(pattern);
  if (matches) {
    return matches.length;
  }
  else {
    return 0;
  }
}


// /(\w+)([^a-zA-z]+)\1(?![a-zA-Z])/gi
//                      ?               non capture so a word can be used twice
//                                   i  case insensitive
