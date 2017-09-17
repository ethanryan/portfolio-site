//collapse navbar onclick on mobile
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


// Define initial variables.
var words = [
"innovative",
"a full stack web developer",
"capable",
"a good listener",
"resourceful",
"knowledgeable",
"silly",
"loving",
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
"hilarious",
"practical",
"friendly",
"odd, but in a good way",
"wise",
"vivacious",
"glorious",
"amusing",
"cool",
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
  // console.log(current_word);
  $("#rotate_word").html(current_word); // change the word in the HTML
  count++; // Increase the wordcount
  if (count == words.length) { count = 0; } // if the wordcount is greater than the total, reset it.
  setTimeout(rotateWord, 2000); // repeat the function after 2000 milliseconds (2 seconds).
}
rotateWord();




//clicking skills removes two classes and adds a class

$("#skills-list span").click(function(e) {
    $(this).removeClass("yellowSkill pulse-grow");
    $(this).addClass("clicked-skill");

  if ( ! $("#skills-list span").hasClass("yellowSkill pulse-grow")) {
   $("#skills-list").addClass("colorful-text background-fireworks-gif");
   $("#skills-list span").addClass("clicked-skill-after-winning");
   $(".you-win-area-top").addClass("background-gradient");
   $(".you-win-area-bottom").addClass("background-gradient");
   $(".you-win-area-top span").html("You WIN!").addClass("shimmer");
   $(".rotate_encourangement").removeClass("rotate_encourangement");
   $(".you-win-area-bottom span").html("Skills").addClass("shimmer");
   changeFireworks();
   startClock();
	}
});

//change fireworks 6 seconds after showing them
function changeFireworks() {
     setTimeout(function(){
     $("#skills-list").addClass("background-blue");
     $("#skills-list svg").removeClass("hidden-icon");
     $("#skills-list span").addClass("hidden-text");
     $(".you-win-area-top span").html("Skills").addClass("shimmer");
     $(".you-win-area-top").addClass("background-blue-top");
     $(".you-win-area-bottom").addClass("background-blue-bottom");
 }, 6000)
}

//startClock countdown after fireworks
function startClock(){
   var counter = 6;
   setInterval(function() {
     counter--;
      if (counter >= 0) {
         span = document.getElementById("count");
         span.innerHTML = counter;
        //  span.innerHTML = counter + '!';
      }
      if (counter === 1) {
         span = document.getElementById("count");
         span.innerHTML = 'OH MY GOD';
       }
       if (counter === 0) {
          span = document.getElementById("count");
          span.innerHTML = '';
        }
     }, 1000);
}

//rotate words for skills page
// Define initial variables.
var encouragement = [
"You can do it!",
"You're doing great!",
"Keep clicking!",
"Almost done!",
"Incredible!",
"Wow, I'm impressed.",
"Nice clicking.",
"Keep it up!",
"Almost done!",
"Good job.",
"Still clicking?",
"Aren't you done yet?",
"Are you OK?",
"It's not that hard.",
"Just do it.",
"Come on.",
"You got this.",
"Ah, forget it.",
"Nevermind.",
"Oh my God!",
];
var count_Encouragement = 0; //count_Encouragement needs to be outside of function rotateWord

function rotateEncouragement() {
  var current_word = encouragement[count_Encouragement]; // define the word to create
  // console.log(current_word);
  $(".rotate_encourangement").html(current_word); // change the word in the HTML
  count_Encouragement++; // Increase the wordcount
  if (count_Encouragement == encouragement.length) { count_Encouragement = 0; } // if the wordcount is greater than the total, reset it.
  setTimeout(rotateEncouragement, 4000); // repeat the function after 4000 milliseconds (4 seconds).
}
rotateEncouragement();






//code for exploding popping bubble...

// $( '.explode' ).click(function(e) {
//   $( this ).toggle( 'explode' );
// });
