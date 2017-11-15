function isSentenceCorrect(sentence) {
  var re = /^[A-Z][^.?!]*[.?!]$/g;
  return re.test(sentence);
}

// Example

// For sentence = "This is an example of *correct* sentence.",
// the output should be
// isSentenceCorrect(sentence) = true;

// For sentence = "!this sentence is TOTALLY incorrecT",
// the output should be
// isSentenceCorrect(sentence) = false.