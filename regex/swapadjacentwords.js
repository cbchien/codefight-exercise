// Using $n with String.replace

// The following script uses the replace() method of the 
// String instance to match a name in the format first last 
// and output it in the format last, first. In the replacement 
// text, the script uses $1 and $2 to indicate the results of 
// the corresponding matching parentheses in the regular expression pattern.

function swapAdjacentWords(s) {
  return s.replace(/([\w]+) (\w+)/g, "$2 $1");
}

// Example

// For s = "CodeFight On", the output should be
// swapAdjacentWords(s) = "On CodeFight";
// For s = "How are you today guys", the output should be
// swapAdjacentWords(s) = "are How today you guys".