// Define initial variables.
var words = [
"capable",
"a good listener",
"resourceful",
"knowledgeable",
"silly",
"loving",
"hilarious",
"funny",
"sincere",
"joyous",
"talented",
"lively",
"honest",
"entertaining",
"trustworthy",
"compassionate",
"boundless",
"sensible",
"comfortable",
"pleasant",
"proud",
"practical",
"friendly",
"odd, but in a good way",
"wise",
"vivacious",
"glorious",
"amusing",
"inventive",
"upbeat",
"good",
"extremely handsome",
"debonair",
"hardworking",
"cultured",
"adventurous",
"philosophical",
"interesting",
"eager",
"thoughtful",
"reflective",
"witty",
"romantic",
"adaptable",
"creative",
"stimulating",
"unassuming",
"clever",
"unusual, but in a good way",
"exciting",
"warm",
"industrious",
"energetic",
"likable",
"gentle",
"charming",
"cheerful",
"lucky",
"rhetorical",
"vigorous",
"calm",
"distractingly good-looking",
"modest",
"agreeable",
"skillful",
"ravishing",
"proactive",
"determined",
"amiable",
"persistent",
"honorable",
"cooperative",
"enthusiastic",
"enchanting",
"fantastic",
"detailed",
"mature",
"dynamic",
"sensitive",
"tough",
"strong",
"successful",
"encouraging",
"modern",
"willing",
"productive",
"alluring",
"decisive",
"devilishly handsome",
"dashing",
"steadfast",
"kind",
"considerate",
"rational",
"dazzling",
"efficient",
"thrifty",
"polite",
"confident",
"generous",
"ambitious",
"too sexy for this app",
"delightful",
"resolute",
"self-assured",
"excellent",
"helpful",
"responsible",
"diligent",
"harmonious",
"bright",
"weird, but in a good way",
"affectionate",
"reliable",
"plucky",
"succinct",
"wonderful",
"peaceful",
"passionate",
"splendid",
];
var count = 0; //count needs to be outside of function rotateWord

function rotateWord() {
  var current_word = words[count]; // define the word to create
  console.log(current_word);
  $("#rotate_word").html(current_word); // change the word in the HTML
  count++; // Increase the wordcount
  if (count == words.length) { count = 0; } // if the wordcount is greater than the total, reset it.
  setTimeout(rotateWord, 2000); // repeat the function after 2000 milliseconds (2 seconds).
}
rotateWord();